"use client";

import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { login } from "@/lib/actions";
import { useTransition } from "react";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [provider, setProvider] = useState("");

  const run = (action: () => Promise<void>, provider?: string) => {
    setProvider(provider || "");
    startTransition(async () => {
      try {
        await action();
      } catch (error) {
        console.error("Error logging in: ", error);
        if (error instanceof AuthError) {
          return redirect(`/error?error=${error.type}`);
        }
        throw error;
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        size="lg"
        type="button"
        disabled={isPending}
        variant="outline"
        onClick={() => run(() => login("google"), "google")}
        className="w-full"
      >
        {isPending && provider === "google" && (
          <Loader2 className="animate-spin" />
        )}
        <FaGoogle /> Google
      </Button>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or Continue With
        </span>
      </div>
      <Button
        size="lg"
        type="button"
        disabled={isPending}
        variant="outline"
        onClick={() => run(() => login("github"), "github")}
        className="w-full"
      >
        {isPending && provider === "github" && (
          <Loader2 className="animate-spin" />
        )}
        <FaGithub /> GitHub
      </Button>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or Continue With
        </span>
      </div>
      <Button
        size="lg"
        type="button"
        disabled={isPending}
        variant="outline"
        onClick={() => run(() => login("twitter"), "twitter")}
        className="w-full"
      >
        {isPending && provider === "twitter" && (
          <Loader2 className="animate-spin" />
        )}{" "}
        <FaXTwitter />
        Twitter
      </Button>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or Continue With
        </span>
      </div>
      <Button
        size="lg"
        type="button"
        disabled={isPending}
        variant="outline"
        onClick={() => run(() => login("facebook"), "facebook")}
        className="w-full"
      >
        {isPending && provider === "facebook" && (
          <Loader2 className="animate-spin" />
        )}
        <FaFacebook /> Facebook
      </Button>
    </div>
  );
};
