
import React from "react";
import { 
  Sidebar, 
  SidebarContent as SidebarContentBase, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  ChevronDown,
  ChevronUp,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { freelancerSidebarItems } from "./FreelancerSidebarItems";

export const FreelancerSidebarContent = () => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);
  const { state, toggleSidebar, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  const toggleSubMenu = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarContentBase>
        <SidebarGroup>
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <SidebarGroupLabel className={cn(
              "text-lg font-semibold transition-all duration-300",
              isCollapsed && !isMobile ? "w-0 opacity-0" : "w-auto opacity-100"
            )}>
              {!isCollapsed || isMobile ? "TalentHire" : "TH"}
            </SidebarGroupLabel>
            <SidebarTrigger 
              className="hover:bg-gray-100 p-1 rounded-md transition-all duration-300"
              onClick={toggleSidebar}
            >
              {isCollapsed ? (
                <PanelLeftOpen className="h-5 w-5 text-gray-600" />
              ) : (
                <PanelLeftClose className="h-5 w-5 text-gray-600" />
              )}
            </SidebarTrigger>
          </div>
          <SidebarGroupContent className="p-2">
            <SidebarMenu>
              {freelancerSidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <div className="px-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            "w-full rounded-lg hover:bg-gray-100 transition-all duration-300",
                            "group flex items-center justify-between p-2",
                            item.subItems && openItems.includes(item.title) && "bg-gray-100"
                          )}
                          onClick={(e) => {
                            if (item.subItems) {
                              e.preventDefault();
                              toggleSubMenu(item.title);
                            }
                          }}
                        >
                          <a href={item.href} className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <item.icon className="h-5 w-5 shrink-0 text-gray-600" />
                              <span className={cn(
                                "font-medium text-gray-700 transition-opacity duration-300",
                                isCollapsed && !isMobile ? "opacity-0 hidden md:inline-block md:opacity-0" : "opacity-100"
                              )}>
                                {item.title}
                              </span>
                            </div>
                            {(!isCollapsed || isMobile) && (
                              <div className="flex items-center">
                                {item.badge && (
                                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full mr-2">
                                    {item.badge}
                                  </span>
                                )}
                                {item.subItems && (
                                  openItems.includes(item.title) 
                                    ? <ChevronUp className="h-4 w-4 text-gray-500" />
                                    : <ChevronDown className="h-4 w-4 text-gray-500" />
                                )}
                              </div>
                            )}
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="right" className={cn(
                        "z-50",
                        !isCollapsed && "hidden"
                      )}>
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  {(!isCollapsed || isMobile) && item.subItems && openItems.includes(item.title) && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className="pl-12 py-2 w-full hover:bg-gray-100 rounded-lg transition-all duration-300 text-gray-600 hover:text-gray-900"
                          >
                            <a href={subItem.href}>{subItem.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContentBase>
    </Sidebar>
  );
};
