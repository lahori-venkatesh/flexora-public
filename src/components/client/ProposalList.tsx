import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Proposal = {
  id: string;
  freelancerName: string;
  rating: number;
  portfolioLink: string;
  proposalDate: string;
  status: "pending" | "accepted" | "rejected";
};

const mockProposals: Proposal[] = [
  {
    id: "1",
    freelancerName: "John Doe",
    rating: 4.8,
    portfolioLink: "https://portfolio.example.com/johndoe",
    proposalDate: "2024-02-20",
    status: "pending",
  },
  {
    id: "2",
    freelancerName: "Jane Smith",
    rating: 4.5,
    portfolioLink: "https://portfolio.example.com/janesmith",
    proposalDate: "2024-02-19",
    status: "accepted",
  },
];

export function ProposalList() {
  const { toast } = useToast();
  const [viewedProposals, setViewedProposals] = React.useState<string[]>([]);

  const handleViewContact = (proposalId: string) => {
    if (viewedProposals.length >= 4 && !viewedProposals.includes(proposalId)) {
      toast({
        title: "Upgrade Required",
        description: "You've reached the limit of free contact views. Upgrade to view more.",
        variant: "destructive",
      });
      return;
    }
    
    if (!viewedProposals.includes(proposalId)) {
      setViewedProposals([...viewedProposals, proposalId]);
      toast({
        title: "Contact Details Available",
        description: "You can now view this freelancer's contact information.",
      });
    }
  };

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Freelancer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Portfolio</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProposals.map((proposal) => (
            <TableRow key={proposal.id}>
              <TableCell className="font-medium">{proposal.freelancerName}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{proposal.rating}</span>
                </div>
              </TableCell>
              <TableCell>
                <a
                  href={proposal.portfolioLink}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Portfolio
                </a>
              </TableCell>
              <TableCell>{new Date(proposal.proposalDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge
                  variant={proposal.status === "accepted" ? "success" : "secondary"}
                >
                  {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewContact(proposal.id)}
                  className="gap-2"
                >
                  {viewedProposals.includes(proposal.id) ? (
                    "View Contact"
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      Unlock Contact
                    </>
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}