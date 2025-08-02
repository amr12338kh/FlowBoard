"use client";

import * as React from "react";
import { Cloud, Moon, Sun, Waves } from "lucide-react";
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
          />
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
