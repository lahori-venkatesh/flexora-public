import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageSquare, Bookmark, Clock, CheckCircle, StickyNote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProposalComparisonProps {
  proposals: Array<{
    id: string;
    freelancerName: string;
    rating: number;
    price: number;
    deliveryTime: number;
    skills: string[];
    status: "pending" | "accepted" | "rejected";
  }>;
}

export function ProposalComparison({ proposals }: ProposalComparisonProps) {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minRating: "",
    skills: "",
  });
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleAddNote = (proposalId: string, note: string) => {
    setNotes((prev) => ({ ...prev, [proposalId]: note }));
    toast({
      title: "Note Added",
      description: "Your note has been saved successfully.",
    });
  };

  const toggleFavorite = (proposalId: string) => {
    setFavorites((prev) =>
      prev.includes(proposalId)
        ? prev.filter((id) => id !== proposalId)
        : [...prev, proposalId]
    );
    toast({
      title: favorites.includes(proposalId) ? "Removed from Favorites" : "Added to Favorites",
      description: favorites.includes(proposalId)
        ? "Proposal removed from your favorites"
        : "Proposal added to your favorites",
    });
  };

  const handleAcceptProposal = (proposalId: string) => {
    toast({
      title: "Proposal Accepted",
      description: "The freelancer has been notified and project setup will begin shortly.",
    });
    // Here you would typically make an API call to accept the proposal
  };

  const filteredProposals = proposals.filter((proposal) => {
    if (filters.minPrice && proposal.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && proposal.price > Number(filters.maxPrice)) return false;
    if (filters.minRating && proposal.rating < Number(filters.minRating)) return false;
    if (
      filters.skills &&
      !proposal.skills.some((skill) =>
        skill.toLowerCase().includes(filters.skills.toLowerCase())
      )
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Filter Proposals</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input
            placeholder="Min Price"
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
          />
          <Input
            placeholder="Max Price"
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
          />
          <Input
            placeholder="Min Rating"
            type="number"
            min="0"
            max="5"
            value={filters.minRating}
            onChange={(e) => setFilters((prev) => ({ ...prev, minRating: e.target.value }))}
          />
          <Input
            placeholder="Skills"
            value={filters.skills}
            onChange={(e) => setFilters((prev) => ({ ...prev, skills: e.target.value }))}
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProposals.map((proposal) => (
          <Card key={proposal.id} className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold">{proposal.freelancerName}</h4>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{proposal.rating}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleFavorite(proposal.id)}
                className={favorites.includes(proposal.id) ? "text-primary" : ""}
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{proposal.deliveryTime} days delivery</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {proposal.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Textarea
              placeholder="Add notes about this proposal..."
              value={notes[proposal.id] || ""}
              onChange={(e) => handleAddNote(proposal.id, e.target.value)}
              className="mb-4"
            />

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2"
                onClick={() => {
                  toast({
                    title: "Message Sent",
                    description: "Your message has been sent to the freelancer.",
                  });
                }}
              >
                <MessageSquare className="h-4 w-4" />
                Message
              </Button>
              <Button
                size="sm"
                className="w-full gap-2"
                onClick={() => handleAcceptProposal(proposal.id)}
              >
                <CheckCircle className="h-4 w-4" />
                Accept
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}