import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ellipsis, Frame, Map, PieChart, Plus } from "lucide-react";
import React from "react";

const HomeProjects = () => {
  return (
    <div className="w-full sm:min-h-[400px] sm:border border-muted-foreground/25 sm:rounded-md sm:px-6 py-4">
      <div className="flex items-center gap-4">
        <h3 className="font-semibold text-2xl">Projects</h3>
        <Select>
          <SelectTrigger className="cursor-pointer  text-xs sm:text-sm text-muted-foreground">
            <SelectValue placeholder="Recents" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recents">Recents</SelectItem>
            <SelectItem value="starred">Starred</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="flex items-center gap-5 hover:bg-[var(--primary-basic)]/5 rounded-md p-2 group/project cursor-pointer">
          <div className="w-14 h-14 flex items-center justify-center border border-muted-foreground/25 group-hover/project:border-foreground border-dashed rounded-lg transition-colors">
            <Plus className="size-5 text-muted-foreground group-hover/project:text-foreground transition-colors" />
          </div>
          <p className="text-muted-foreground group-hover/project:text-foreground transition-colors font-semibold">
            Create a new project
          </p>
        </div>

        <div className="flex justify-between items-center rounded-md p-2 group/project cursor-pointer hover:bg-[var(--primary-basic)]/5">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-lg">
              <Frame className="size-8 " />
            </div>
            <p className="text-muted-foreground group-hover/project:text-foreground transition-colors font-semibold">
              Project Test 1
            </p>
          </div>

          <div className="p-1 hover:bg-[var(--primary-basic)]/5 text-muted-foreground hover:text-foreground rounded-md cursor-pointer">
            <Ellipsis />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-md p-2 group/project cursor-pointer hover:bg-[var(--primary-basic)]/5">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex items-center justify-center bg-pink-400 rounded-lg">
              <PieChart className="size-8 " />
            </div>
            <p className="text-muted-foreground group-hover/project:text-foreground transition-colors font-semibold">
              Project Test 2
            </p>
          </div>

          <div className="p-1 hover:bg-[var(--primary-basic)]/5 text-muted-foreground hover:text-foreground rounded-md cursor-pointer">
            <Ellipsis />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-md p-2 group/project cursor-pointer hover:bg-[var(--primary-basic)]/5">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex items-center justify-center bg-amber-500 rounded-lg">
              <Map className="size-8 " />
            </div>
            <p className="text-muted-foreground group-hover/project:text-foreground transition-colors font-semibold">
              Project Test 3
            </p>
          </div>

          <div className="p-1 hover:bg-[var(--primary-basic)]/5 text-muted-foreground hover:text-foreground rounded-md cursor-pointer">
            <Ellipsis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
