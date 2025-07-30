import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { notifications } from "@/data/data";

const Notifications = ({
  notificationCount,
}: {
  notificationCount: number;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="relative">
          <Bell size={22} />
          {notificationCount > 0 && (
            <span className="absolute -top-2 right-[-6px] h-4 w-4 bg-destructive text-white rounded-full text-[11px] flex items-center justify-center font-medium">
              {notificationCount}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-96 overflow-y-auto space-y-1">
        {notifications.map((notification) => (
          <DropdownMenuItem
            key={notification.id}
            className={cn(
              "p-4 hover:bg-accent",
              notification.unread && "bg-accent/50"
            )}
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "w-2 h-2 rounded-full mt-2",
                  notification.unread ? "bg-primary" : "bg-muted"
                )}
              />

              <div className="flex-1 min-w-0 space-y-2">
                <p className="font-medium text-sm">{notification.title}</p>
                <p className="text-sm text-muted-foreground">
                  {notification.message}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <Link href="/notifications">
          <DropdownMenuItem className="justify-center">
            View all notifications
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
