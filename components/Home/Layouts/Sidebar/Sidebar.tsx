"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SIDEBAR_WIDTH } from "@/lib/constants";
import { SidebarLogo } from "../../../shared/Logo";
import Link from "next/link";
import { useState } from "react";
import SidebarNavigation from "./SidebarNavigation";
import QuickActions from "./QuickActions";
import Resources from "./Resources";
import LoggedUserInfo from "./UserInfo/LoggedUserInfo";
import GuestActions from "./UserInfo/GuestActions";
import { Session } from "next-auth";
import { SidebarModeToggle } from "@/components/Home/Themes/ModeToggle";

const Sidebar = ({ session }: { session: Session | null }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetTrigger asChild>
        <Menu size={22} className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className={`w-[${SIDEBAR_WIDTH.mobile}] sm:w-[${SIDEBAR_WIDTH.tablet}] p-0 bg-background border-l overflow-y-auto`}
      >
        {/* Header */}
        <SheetHeader className="px-6 py-4 border-b bg-muted/30">
          <SheetTitle className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <SidebarLogo />
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* Main Content */}
        <div className="flex flex-col h-full">
          <div className="flex-1 px-4 pb-4 space-y-6">
            {/* Quick Actions (if logged in) */}
            {session?.user && <QuickActions />}

            {/* Main Navigation */}
            <SidebarNavigation />

            {/* Additional Resources */}
            <Resources />
          </div>

          <div className="px-4 py-4 border-t bg-muted/10">
            <SidebarModeToggle />
          </div>

          {/* Bottom Section */}
          <div className="border-t bg-muted/20 p-4">
            {session?.user ? (
              <LoggedUserInfo session={session} />
            ) : (
              /* Login/Signup Section */
              <GuestActions />
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
