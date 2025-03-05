import React from "react";
import { ClientDashboardLayout } from "@/components/client/ClientDashboardLayout";
import { ProjectList } from "@/components/client/ProjectList";
import { UpgradePrompt } from "@/components/client/UpgradePrompt";

export default function ClientDashboard() {
  return (
    <ClientDashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here's an overview of your projects and available upgrades
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Your Projects</h3>
          <ProjectList />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Available Upgrades</h3>
          <UpgradePrompt />
        </div>
      </div>
    </ClientDashboardLayout>
  );
}