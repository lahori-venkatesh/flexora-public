
import React from "react";
import { Menu } from "lucide-react";
import { SearchBar } from "@/components/common/SearchBar";
import { NotificationBell } from "@/components/common/NotificationBell";
import { ProfileDropdown } from "@/components/common/ProfileDropdown";
import { useAuth } from "@/contexts/AuthContext";
import { useSidebar } from "@/components/ui/sidebar";

export const FreelancerHeader = () => {
  const { user } = useAuth();
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <header className="border-b bg-white px-3 md:px-6 py-2 md:py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleSidebar}
            className="mr-1 md:mr-2 p-1 rounded-md hover:bg-gray-100 transition-all"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <div className="hidden sm:block w-full max-w-md">
            <SearchBar onSearch={(term) => console.log("Searching:", term)} placeholder="Search projects..." />
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <NotificationBell />
          <ProfileDropdown userType="freelancer" />
        </div>
      </div>
      <div className="mt-2 sm:hidden w-full">
        <SearchBar onSearch={(term) => console.log("Searching:", term)} placeholder="Search..." />
      </div>
    </header>
  );
};
