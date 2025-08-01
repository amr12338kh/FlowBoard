/* eslint-disable @next/next/no-img-element */
import { LoginForm } from "@/components/Forms/LoginForm";
import Link from "next/link";
import { HeaderLogo } from "@/components/Logo";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <HeaderLogo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/teamwork-image.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Join thousands of teams</h2>
          <p className="text-white/90 text-sm">
            FlowBoard helps teams collaborate better and ship faster with
            AI-powered project management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
