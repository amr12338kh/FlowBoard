"use client";

import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";
import { useTransition } from "react";
import { signout } from "@/lib/actions";

const SignoutForm = () => {
  const [isPending, startTransition] = useTransition();

  const run = (action: () => Promise<void>) => {
    startTransition(async () => {
      try {
        await action();
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    });
  };

  return (
    <Button
      disabled={isPending}
      variant="outline"
      onClick={() => run(signout)}
      className="w-full gap-2 hover:text-destructive hover:bg-destructive/10"
    >
      <LogOut size={16} />
      Sign out
    </Button>
  );
};

export default SignoutForm;
