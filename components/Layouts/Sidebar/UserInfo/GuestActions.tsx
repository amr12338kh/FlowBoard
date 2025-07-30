import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const GuestActions = () => {
  return (
    <div className="space-y-3">
      <div className="text-center space-y-2 mb-4">
        <h3 className="font-semibold text-sm">Get started with FlowBoard</h3>
        <p className="text-xs text-muted-foreground">
          Join thousands of teams already using FlowBoard
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/register">
          <Button className="w-full gradient-primary hover:opacity-90 font-medium">
            Get started free
          </Button>
        </Link>

        <Link href="/login">
          <Button variant="outline" className="w-full">
            Log in
          </Button>
        </Link>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        No credit card required
      </p>
    </div>
  );
};

export default GuestActions;
