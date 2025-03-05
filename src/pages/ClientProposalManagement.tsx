import React from "react";
import { ClientDashboardLayout } from "@/components/client/ClientDashboardLayout";
import { ProposalList } from "@/components/client/ProposalList";
import { UpgradePrompt } from "@/components/client/UpgradePrompt";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ClientProposalManagement = () => {
  return (
    <ClientDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/client/dashboard">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold mt-4">Project Proposals</h1>
            <p className="text-muted-foreground">
              Review and manage proposals from freelancers
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Received Proposals</h2>
            <ProposalList />
          </div>

          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upgrade Options</h2>
            <UpgradePrompt />
          </div>
        </div>
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientProposalManagement;