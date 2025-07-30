import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const QuickActions = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <Link href="/projects/new">
          <Button
            variant="outline"
            size="sm"
            className="w-full h-auto py-3 flex-col gap-1"
          >
            <span className="text-lg">+</span>
            <span className="text-xs">New Project</span>
          </Button>
        </Link>
        <Link href="/tasks/new">
          <Button
            variant="outline"
            size="sm"
            className="w-full h-auto py-3 flex-col gap-1"
          >
            <span className="text-lg">✓</span>
            <span className="text-xs">New Task</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
