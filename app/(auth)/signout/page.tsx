import { AlertCircleIcon, ArrowLeft, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignoutForm from "@/components/Home/Forms/SignoutForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import UserAvatar from "@/components/shared/UserAvatar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 space-y-10">
      <div className="w-full max-w-md space-y-6">
        {/* User Avatar */}
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <UserAvatar session={session} withText={false} />
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">
              {session?.user?.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-foreground text-center">
            Sign out of Flow Board?
          </h1>

          {/* Warning Alert */}
          <Alert variant="destructive" className="p-4">
            <AlertCircleIcon />
            <AlertTitle>You&apos;ll lose access to:</AlertTitle>
            <AlertDescription>
              <ul className="list-inside list-disc text-sm">
                <li>Your projects and tasks</li>
                <li>Team collaboration features</li>
                <li>Real-time notifications</li>
                <li>Personal settings and preferences</li>
              </ul>
            </AlertDescription>
          </Alert>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2">
            <SignoutForm />

            <div className="flex gap-3">
              <Link href="/dashboard" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full gap-2 hover:bg-muted/50"
                >
                  <ArrowLeft size={16} />
                  Back to Dashboard
                </Button>
              </Link>

              <Link href="/" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full gap-2 hover:bg-muted/50"
                >
                  <HomeIcon size={16} />
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Options */}
      <div className="text-center space-y-3">
        <p className="text-xs text-muted-foreground">
          Having trouble?{" "}
          <Link href="/support" className="text-primary hover:underline">
            Contact support
          </Link>
        </p>

        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <span>•</span>
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms
          </Link>
          <span>•</span>
          <Link
            href="/help"
            className="hover:text-foreground transition-colors"
          >
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
