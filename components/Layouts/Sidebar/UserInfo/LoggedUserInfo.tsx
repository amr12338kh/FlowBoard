import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import UserAvatar from "@/components/UserAvatar";
import { sidebarUserMenuItems } from "@/data/data";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

const LoggedUserInfo = () => {
  return (
    <div className="space-y-4">
      {/* User Profile */}
      <UserAvatar name="Amr Khaled" email="amrkhaled12338@gmail.com" />

      {/* User Menu Items */}
      <div className="space-y-1">
        {sidebarUserMenuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 px-2 text-xs"
            >
              {item.icon && <item.icon size={14} />}
              {item.name}
            </Button>
          </Link>
        ))}
      </div>

      <Separator />

      {/* Logout */}
      <Link href="/signout">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 px-2 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut size={14} />
          Sign out
        </Button>
      </Link>
    </div>
  );
};

export default LoggedUserInfo;
