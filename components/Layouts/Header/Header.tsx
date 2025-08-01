import { Container } from "../Container";
import { HeaderLogo } from "../../Logo";
import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types/types";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ProfileDropdownMenu } from "./ProfileDropdownMenu";
import Notifications from "./Notifications";
import HeaderNavigation from "./HeaderNavigation";
import Sidebar from "../Sidebar/Sidebar";
import { auth } from "@/auth";

const Header = async ({ className, notificationCount = 3 }: HeaderProps) => {
  const session = await auth();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <Container className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 lg:gap-10">
            <Link href="/">
              <HeaderLogo />
            </Link>
            <div className="hidden md:block">
              <HeaderNavigation />
            </div>
          </div>

          <div className="flex items-center gap-5">
            {!session?.user ? (
              <div className="space-x-4 hidden sm:block">
                <Link href="/login">
                  <Button className="gradient-primary hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-5">
                <ProfileDropdownMenu session={session} />
                <Notifications notificationCount={notificationCount} />
              </div>
            )}

            <div className="hidden sm:block md:hidden h-6 w-px bg-muted-foreground/40" />

            <div className="md:hidden flex items-center">
              <Sidebar session={session} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
