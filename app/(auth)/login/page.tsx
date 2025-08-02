/* eslint-disable @next/next/no-img-element */
import { LoginForm } from "@/components/Forms/LoginForm";
import Link from "next/link";
import { HeaderLogo } from "@/components/Logo";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PageContainer } from "@/components/Layouts/Container";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="grid min-h-svh lg:grid-cols-3">
      <PageContainer className="flex flex-col gap-4">
        <Link href="/" className="flex justify-start">
          <HeaderLogo />
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md sm:max-w-sm">
            <LoginForm />
          </div>
        </div>
      </PageContainer>
      <div className="bg-muted relative hidden lg:block col-span-2">
        <img
          src="/teamwork-image.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-3xl font-black mb-1">Join thousands of teams</h2>
          <p className="text-muted text-sm">
            FlowBoard helps teams collaborate better and ship faster with
            AI-powered project management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
