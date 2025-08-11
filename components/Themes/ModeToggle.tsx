"use client";

import * as React from "react";
import { Check, Cloud, Waves } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Cloud
            className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all data-[theme=teal]:scale-0 data-[theme=teal]:-rotate-90 data-[theme=system]:scale-0 data-[theme=system]:-rotate-90"
            data-theme={theme}
          />{" "}
          <Waves
            className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all data-[theme=teal]:scale-100 data-[theme=teal]:rotate-0"
            data-theme={theme}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("sky")}>
          <Cloud className="h-[1.2rem] w-[1.2rem]" /> Sky
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("teal")}>
          <Waves className="h-[1.2rem] w-[1.2rem]" />
          Teal
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SidebarModeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      value: "sky",
      label: "Sky",
      icon: Cloud,
    },
    {
      value: "teal",
      label: "Teal",
      icon: Waves,
    },
  ];

  return (
    <div className="space-y-2">
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        const isActive = theme === themeOption.value;

        return (
          <Button
            key={themeOption.value}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => setTheme(themeOption.value)}
            className="w-full justify-start gap-3"
          >
            <Icon className="h-4 w-4" />
            <span className="flex-1 text-left">{themeOption.label} Theme</span>
            {isActive && <Check className="h-4 w-4" />}
          </Button>
        );
      })}
    </div>
  );
}
