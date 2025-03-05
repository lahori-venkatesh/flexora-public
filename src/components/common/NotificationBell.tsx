import React from "react";
import {
  Bell,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockNotifications = [
  {
    id: 1,
    type: "message",
    content: "New proposal received for Website Redesign",
    time: "5m ago",
  },
  {
    id: 2,
    type: "calendar",
    content: "Meeting scheduled with John Doe",
    time: "1h ago",
  },
  {
    id: 3,
    type: "update",
    content: "Your project status has been updated",
    time: "2h ago",
  },
];

const notificationIcons = {
  message: MessageSquare,
  calendar: Calendar,
  update: CheckCircle,
};

export function NotificationBell() {
  const [unreadCount, setUnreadCount] = React.useState(mockNotifications.length);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {mockNotifications.map((notification) => {
          const Icon = notificationIcons[notification.type as keyof typeof notificationIcons];
          return (
            <DropdownMenuItem key={notification.id} className="flex items-start gap-3 p-3">
              <Icon className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col gap-1">
                <p className="text-sm">{notification.content}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}