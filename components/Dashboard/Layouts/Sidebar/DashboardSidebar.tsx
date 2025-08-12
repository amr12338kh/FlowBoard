"use client";

import * as React from "react";

import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
import { TeamSwitcher } from "./TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { dashboardSidebarData } from "@/data/data";
import { Session } from "next-auth";
import { NavProjects } from "./NavProjects";

export function AppSidebar({
  session,
  ...props
}: React.ComponentProps<typeof Sidebar> & { session: Session | null }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={dashboardSidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dashboardSidebarData.navMain} />
        <NavProjects projects={dashboardSidebarData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser session={session} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
