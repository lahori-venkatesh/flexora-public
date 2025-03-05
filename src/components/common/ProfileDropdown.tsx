import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Settings, LogOut, Briefcase, Heart, Crown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";

interface ProfileDropdownProps {
  userType: "client" | "freelancer";
}

export function ProfileDropdown({ userType }: ProfileDropdownProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const mockUser = user || { 
    name: userType === "client" ? "John Client" : "Jane Freelancer", 
    email: userType === "client" ? "john@example.com" : "jane@example.com",
    avatar: ""
  };
  
  const basePath = userType === "client" ? "/client" : "/freelancer";
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-7 w-7 md:h-8 md:w-8 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
          <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
          <AvatarFallback>
            <UserRound className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{mockUser.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {mockUser.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={`${basePath}/profile`} className="cursor-pointer">
              <UserRound className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </Link>
          </DropdownMenuItem>
          
          {userType === "freelancer" && (
            <>
              <DropdownMenuItem asChild>
                <Link to="/freelancer/projects" className="cursor-pointer">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>My Projects</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/freelancer/favorites" className="cursor-pointer">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Saved Jobs</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
          
          {userType === "client" && (
            <DropdownMenuItem asChild>
              <Link to="/post-project" className="cursor-pointer">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>Post a Project</span>
              </Link>
            </DropdownMenuItem>
          )}
          
          <DropdownMenuItem asChild>
            <Link to={`${userType}-pricing`} className="cursor-pointer">
              <Crown className="mr-2 h-4 w-4" />
              <span>Upgrade Plan</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link to={`${basePath}/settings`} className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={handleLogout}
          className="cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
