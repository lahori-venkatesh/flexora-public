
import React from "react";
import { Menu } from "lucide-react";
import { SearchBar } from "@/components/common/SearchBar";
import { NotificationBell } from "@/components/common/NotificationBell";
import { ProfileDropdown } from "@/components/common/ProfileDropdown";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface ClientHeaderProps {
  onSearch: (term: string) => void;
}

export const ClientHeader: React.FC<ClientHeaderProps> = ({ onSearch }) => {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";
  const isMobile = useIsMobile();

  return (
    <header className="border-b bg-white px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {(isCollapsed || isMobile) && (
            <button 
              onClick={toggleSidebar}
              className="mr-2 p-1 rounded-md hover:bg-gray-100 transition-all touch-target"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          )}
          <div className="hidden md:block">
            <SearchBar onSearch={onSearch} placeholder="Search projects..." />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <NotificationBell />
          <ProfileDropdown userType="client" />
        </div>
      </div>
      {isMobile && (
        <div className="mt-3 pb-1">
          <SearchBar onSearch={onSearch} placeholder="Search projects..." />
        </div>
      )}
    </header>
  );
};
