"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import UserAvatar from "@/components/shared/UserAvatar";
import { Session } from "next-auth";
import Link from "next/link";
import { navUserData } from "@/data/data";

export function NavUser({ session }: { session: Session | null }) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:rounded-full!"
            >
              <UserAvatar session={session} withSittings={false} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-fit rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel>
              <UserAvatar session={session} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navUserData.map((item, i) =>
              !item.group ? (
                <>
                  {i === navUserData.length - 1 && <DropdownMenuSeparator />}

                  <DropdownMenuGroup key={i}>
                    <Link href={item.href || "#"}>
                      <DropdownMenuItem
                        className={
                          i === navUserData.length - 1
                            ? "focus:text-destructive! focus:bg-destructive/10"
                            : ""
                        }
                      >
                        {item.icon && <item.icon />}
                        {item.name}
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>

                  {i === 0 && <DropdownMenuSeparator />}
                </>
              ) : (
                <DropdownMenuGroup key={i}>
                  {item.group.map((groupItem, j) => (
                    <Link key={j} href={groupItem.href || "#"}>
                      <DropdownMenuItem>
                        {groupItem.icon && <groupItem.icon />}
                        {groupItem.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
