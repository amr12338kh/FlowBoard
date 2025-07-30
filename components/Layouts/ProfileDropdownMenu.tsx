"use client";

import { dropdownItems } from "@/data/data";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, Settings } from "lucide-react";

export const ProfileDropdownMenu = () => {
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
        <div className="flex items-center gap-1">
          <Avatar className="w-10 h-10">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <ChevronDown
            size={16}
            className={
              isOpen ? "rotate-180 transition-transform duration-200" : ""
            }
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex items-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <Avatar className="w-12 h-12">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="text-lg">AK</AvatarFallback>
              </Avatar>

              <div className="max-w-[150px]">
                <h3 className="font-semibold">Amr Khaled</h3>
                <span className="text-muted-foreground truncate block text-xs">
                  amrkhaled12338@gmail.com
                </span>
              </div>
            </div>

            <Link href="/user_settings">
              <Settings
                size={16}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              />
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownItems.map((item, i) => (
          <>
            <Link key={i} href={item.href}>
              <DropdownMenuItem>
                {item.icon && <item.icon className="hover:text-primary" />}{" "}
                {item.name}
              </DropdownMenuItem>
            </Link>

            {i === 2 && <DropdownMenuSeparator />}
          </>
        ))}

        <DropdownMenuSeparator />
        <Link href="/log-out">
          <DropdownMenuItem>
            <LogOut className="hover:text-primary" /> Log Out
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
