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
import { ModeToggle } from "@/components/Themes/ModeToggle";

const Header = async ({ className, notificationCount = 3 }: HeaderProps) => {
  const session = await auth();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur",
        className
      )}
    >
      <Container padding="sm" className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6">
            <Link href="/">
              <HeaderLogo />
            </Link>
            <div className="hidden md:block">
              <HeaderNavigation />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            {!session?.user ? (
              <div className="space-x-4 block">
                <Link href="/login">
                  <Button variant="basic" size="sm" className="rounded-[4px]!">
                    Get Started
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-4 md:gap-5">
                <ProfileDropdownMenu session={session} />
                <Notifications notificationCount={notificationCount} />
              </div>
            )}

            <div className="md:hidden h-6 w-px bg-muted-foreground/40" />

            <div className="md:hidden flex items-center">
              <Sidebar session={session} />
            </div>

            <div className="h-6 w-px bg-muted-foreground/40 hidden md:block" />

            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
