"use client";

import { dropdownItems } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import UserAvatar from "../../../shared/UserAvatar";
import { Session } from "next-auth";

export const ProfileDropdownMenu = ({ session }: { session: Session }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdownTrigger = document.querySelector("[data-dropdown-trigger]");
      if (dropdownTrigger && !dropdownTrigger.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const lastItemIndex = dropdownItems.length - 1;

  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        data-dropdown-trigger
      >
        <div className="flex items-center gap-2">
          <UserAvatar
            session={session}
            withText={false}
            avatarClassName="h-8! w-8!"
          />
          <ChevronDown
            size={16}
            className={cn(
              isOpen ? "rotate-180" : "rotate-0",
              "transition-transform duration-200"
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <UserAvatar session={session} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownItems.map((item, i) => (
          <>
            {i === lastItemIndex && <DropdownMenuSeparator />}

            <Link key={i} href={item.href}>
              <DropdownMenuItem
                className={cn(
                  i === lastItemIndex &&
                    "focus:text-destructive! focus:bg-destructive/10!"
                )}
              >
                {item.icon && <item.icon className="hover:text-primary" />}{" "}
                {item.name}
              </DropdownMenuItem>
            </Link>

            {(i === 2 || i === 5) && <DropdownMenuSeparator />}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
