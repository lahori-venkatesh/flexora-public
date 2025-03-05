
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClientSidebarContent } from "./ClientSidebarContent";
import { ClientHeader } from "./ClientHeader";
import { useIsMobile } from "@/hooks/use-mobile";

export function ClientDashboardLayout({ children }: { children: React.ReactNode }) {
  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
  };
  
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <TooltipProvider>
        <div className="flex min-h-screen w-full bg-neutral-50">
          <ClientSidebarContent />
          <div className="flex-1 w-full">
            <ClientHeader onSearch={handleSearch} />
            <main className="p-4 md:p-6 w-full overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
}
