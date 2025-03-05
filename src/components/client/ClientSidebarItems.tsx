
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  Star, 
  DollarSign,
  Settings,
  HelpCircle,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard Overview",
    icon: LayoutDashboard,
    href: "/client/dashboard"
  },
  {
    title: "Projects",
    icon: Briefcase,
    href: "/client/projects",
    subItems: [
      { title: "Active Projects", href: "/client/projects/active" },
      { title: "Completed Projects", href: "/client/projects/completed" },
      { title: "Archived Projects", href: "/client/projects/archived" },
    ]
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/client/messages",
    badge: "3"
  },
  {
    title: "Favorites",
    icon: Star,
    href: "/client/favorites",
    badge: "2"
  },
  {
    title: "Upgrade Now",
    icon: DollarSign,
    href: "/client-pricing"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/client/settings"
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    href: "/client/support"
  }
];
