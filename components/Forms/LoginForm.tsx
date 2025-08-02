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
    <div className="flex flex-col gap-3">
      <div className="space-y-2 pb-6 ">
        <h1 className="text-5xl lg:text-4xl xl:text-5xl font-black tracking-tight">
          <span className="block">Welcome</span>
          <span className="block text-foreground">
            To <span className="gradient-text-primary">FlowBoard</span>
          </span>
        </h1>

        <p className="text-muted-foreground text-sm">
          To get started, please sign in
        </p>
      </div>
      <Button
        size="lg"
        type="button"
        disabled={isPending}
        variant="outline"
        onClick={() => run(() => login("google"), "google")}
        className="w-full p-5 hover:bg-muted-foreground/5 text-lg p-5"
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
        className="w-full p-5 hover:bg-muted-foreground/5 text-lg"
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
        className="w-full p-5 hover:bg-muted-foreground/5 text-lg"
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
        className="w-full p-5 hover:bg-muted-foreground/5 text-lg"
      >
        {isPending && provider === "facebook" && (
          <Loader2 className="animate-spin" />
        )}
        <FaFacebook /> Facebook
      </Button>
    </div>
  );
};
