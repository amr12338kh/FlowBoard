"use client";

import { cn } from "@/lib/utils";
import UserAvatar from "../../shared/UserAvatar";
import { Session } from "next-auth";
import { useState } from "react";
import { CheckCircle2, Plus } from "lucide-react";
import Link from "next/link";

const HomeTasks = ({ session }: { session: Session | null }) => {
  const [active, setActive] = useState("upcoming");

  const handleActiveNav = (nav: string) => () => setActive(nav);

  const Nav = () => (
    <ul className="flex gap-5">
      <li
        className={cn(
          "text-xs sm:text-sm cursor-pointer text-muted-foreground font-medium hover:text-foreground ",
          active === "upcoming" && "active-nav text-foreground"
        )}
        onClick={handleActiveNav("upcoming")}
      >
        Upcoming
      </li>
      <li
        className={cn(
          "text-xs sm:text-sm cursor-pointer text-muted-foreground font-medium hover:text-foreground",
          active === "overdue" && "active-nav text-foreground"
        )}
        onClick={handleActiveNav("overdue")}
      >
        Overdue (2)
      </li>
      <li
        className={cn(
          "text-xs sm:text-sm cursor-pointer text-muted-foreground font-medium hover:text-foreground",
          active === "completed" && "active-nav text-foreground"
        )}
        onClick={handleActiveNav("completed")}
      >
        Completed
      </li>
    </ul>
  );

  return (
    <div className="w-full sm:min-h-[400px] sm:border border-muted-foreground/25 sm:rounded-md">
      <div className="flex flex-col gap-3.5 sm:gap-0 border-b sm:border-none border-muted-foreground/25 py-4 sm:py-0">
        <div className="flex w-full items-start gap-3.5 sm:gap-5 sm:border-b border-muted-foreground/25 sm:py-4 sm:px-6">
          <Link href={`/account`}>
            <UserAvatar
              withText={false}
              session={session}
              avatarClassName="h-10! w-10! sm:h-12! sm:w-12! hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="flex flex-col space-y-4 mt-1.5 sm:mt-2">
            <Link
              href={"/dashboard/tasks"}
              className="font-semibold text-xl sm:text-2xl hover:underline"
            >
              <h3>My Tasks</h3>
            </Link>
            <div className="hidden sm:block">
              <Nav />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <Nav />
        </div>
      </div>

      {active === "upcoming" && (
        <div>
          <div className="sm:px-6">
            <div className="py-2 flex">
              <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-[var(--primary-basic)]/5 transition-colors duration-200 rounded-md">
                <Plus className="size-4 sm:size-5" />
                <h3 className="font-medium text-sm">Create Task</h3>
              </div>
            </div>
          </div>
          <div className="sm:px-6 hover:border-b hover:border-t border-muted-foreground/25 hover:bg-[var(--primary-basic)]/5 transition-colors duration-200">
            <div className="py-2 border-b border-t border-muted-foreground/25 hover:border-none flex items-center justify-between">
              <div className=" flex items-center gap-2 cursor-pointer p-1">
                <CheckCircle2 className="size-4 sm:size-5 hover:text-success transition-colors duration-100" />
                <h3 className="font-medium  text-sm">Test Task 1</h3>
              </div>

              <p className="text-muted-foreground text-sm">Aug 21</p>
            </div>
          </div>
        </div>
      )}

      {active === "overdue" && (
        <div>
          <div className="sm:px-6 hover:border-b border-muted-foreground/25 hover:bg-[var(--primary-basic)]/5 transition-colors duration-200">
            <div className="py-2 border-b border-muted-foreground/25 hover:border-none flex items-center justify-between">
              <div className="flex items-center gap-2 cursor-pointer p-1">
                <CheckCircle2 className="size-5 hover:text-success transition-colors duration-100" />
                <h3 className="font-medium text-sm">Test Project 1</h3>
              </div>
              <p className="text-destructive text-sm">Jul 31 - Aug 4</p>
            </div>
          </div>
          <div className="sm:px-6 hover:border-b border-muted-foreground/25 hover:bg-[var(--primary-basic)]/5 transition-colors duration-200">
            <div className="py-2 border-b border-muted-foreground/25 hover:border-none transition-colors duration-200 flex items-center justify-between">
              <div className="flex items-center gap-2 cursor-pointer p-1">
                <CheckCircle2 className="size-5 hover:text-success transition-colors duration-100" />
                <h3 className="font-medium text-sm">Test Project 2</h3>
              </div>
              <p className="text-destructive text-sm">Jul 30 - Aug 1</p>
            </div>
          </div>
        </div>
      )}

      {active === "completed" && (
        <div className="sm:px-6 hover:border-b border-muted-foreground/25 hover:bg-[var(--primary-basic)]/5 transition-colors duration-200">
          <div className="py-2 flex items-center justify-between border-b border-muted-foreground/25 hover:border-none">
            <div className="flex items-center gap-2 cursor-pointer p-1">
              <CheckCircle2 className="size-5 text-success transition-colors duration-100" />
              <h3 className="font-medium text-sm">Test Task 2</h3>
            </div>
            <p className="text-muted-foreground text-sm">Thursday</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeTasks;
