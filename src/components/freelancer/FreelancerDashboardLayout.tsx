
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FreelancerSidebarContent } from "./FreelancerSidebarContent";
import { FreelancerHeader } from "./FreelancerHeader";
import { useIsMobile } from "@/hooks/use-mobile";

const FreelancerDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // For mobile devices, we start with collapsed sidebar
  const isMobile = useIsMobile();
  
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col md:flex-row bg-neutral-50">
          <FreelancerSidebarContent />
          <div className="flex-1 w-full overflow-x-hidden">
            <FreelancerHeader />
            <main className="p-3 md:p-6">
              {children}
            </main>
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default FreelancerDashboardLayout;
