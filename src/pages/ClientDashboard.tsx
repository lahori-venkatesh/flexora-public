
import { ClientDashboardLayout } from "@/components/client/ClientDashboardLayout";
import { ProjectList } from "@/components/client/ProjectList";
import { ProposalList } from "@/components/client/ProposalList";
import { ProposalComparison } from "@/components/client/ProposalComparison";
import { UpgradePrompt } from "@/components/client/UpgradePrompt";
import { Button } from "@/components/ui/button";
import { PlusCircle, MessageSquare, User, Settings, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";

// Mock data for demonstration
const mockProposals = [{
  id: "1",
  freelancerName: "John Doe",
  rating: 4.8,
  price: 500,
  deliveryTime: 7,
  skills: ["React", "TypeScript", "UI/UX"],
  status: "pending" as const
}, {
  id: "2",
  freelancerName: "Jane Smith",
  rating: 4.5,
  price: 450,
  deliveryTime: 5,
  skills: ["React", "Node.js", "MongoDB"],
  status: "pending" as const
}];
const ClientDashboard = () => {
  const isMobile = useIsMobile();
  const {
    user
  } = useAuth();
  const mockUser = user || {
    name: "John Client",
    email: "john@example.com",
    avatar: ""
  };
  return <ClientDashboardLayout>
      <div className="space-y-4 md:space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="font-bold text-xl md:text-2xl px-[7px]">My Projects</h1>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Link to="/project-chat/1" className="w-full sm:w-auto">
              <Button variant="outline" className="gap-2 w-full sm:w-auto h-12 md:h-10">
                <MessageSquare className="w-4 h-4" />
                Open Chat
              </Button>
            </Link>
            <Link to="/post-project" className="w-full sm:w-auto">
              <Button className="gap-2 text-white w-full sm:w-auto h-12 md:h-10">
                <PlusCircle className="w-4 h-4" />
                Post New Project
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-[2px]">
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback>
                    <User className="h-10 w-10 text-gray-400" />
                  </AvatarFallback>
                </Avatar>
                <h2 className="font-semibold">{mockUser.name}</h2>
                <p className="text-sm text-muted-foreground">{mockUser.email}</p>
              </div>
              
              <div className="space-y-2">
                <Link to="/client/profile" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Button>
                </Link>
                <Link to="/post-project" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Post a Project
                  </Button>
                </Link>
                <Link to="/client/settings" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <div className="md:col-span-3">
            <div className="overflow-x-auto -mx-6 px-6 py-2">
              <ProjectList />
            </div>

            <div className="mt-8 md:mt-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Proposals</h2>
              <Tabs defaultValue="list" className="space-y-4">
                <TabsList className="w-full sm:w-auto">
                  <TabsTrigger value="list" className="flex-1 sm:flex-none">List View</TabsTrigger>
                  <TabsTrigger value="compare" className="flex-1 sm:flex-none">Compare View</TabsTrigger>
                </TabsList>
                <TabsContent value="list" className="overflow-x-auto -mx-6 px-6 py-2">
                  <ProposalList />
                </TabsContent>
                <TabsContent value="compare">
                  <ProposalComparison proposals={mockProposals} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <UpgradePrompt />
        </div>
      </div>
    </ClientDashboardLayout>;
};
export default ClientDashboard;
