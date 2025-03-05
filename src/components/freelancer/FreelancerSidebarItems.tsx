
import { LayoutDashboard, Briefcase, MessageSquare, Star, Crown, Settings, HelpCircle } from "lucide-react";

export const freelancerSidebarItems = [
  {
    title: "Dashboard Overview",
    icon: LayoutDashboard,
    href: "/freelancer/dashboard"
  },
  {
    title: "Projects",
    icon: Briefcase,
    href: "/freelancer/projects",
    subItems: [
      { title: "Active Projects", href: "/freelancer/projects/active" },
      { title: "Accepted Projects", href: "/freelancer/projects/accepted" },
      { title: "Archived Projects", href: "/freelancer/projects/archived" },
    ]
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/freelancer/messages",
    badge: "3"
  },
  {
    title: "Favorites",
    icon: Star,
    href: "/freelancer/favorites"
  },
  {
    title: "Upgrade Now",
    icon: Crown,
    href: "/freelancer-pricing"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/freelancer/settings"
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    href: "/freelancer/support"
  }
];
