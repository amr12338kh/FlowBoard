"use client";

import { Container } from "../Container";
import { HeaderLogo } from "../../Logo";
import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types/types";
import Link from "next/link";
import { Button } from "../../ui/button";
import { useState } from "react";
import { ProfileDropdownMenu } from "./ProfileDropdownMenu";
import Notifications from "./Notifications";
import HeaderNavigation from "./HeaderNavigation";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ className, notificationCount = 3 }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            {!isLoggedIn ? (
              <div className="space-x-4">
                <Link href="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-black hover:bg-black/80">
                    Get Started
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-5">
                <ProfileDropdownMenu />
                <Notifications notificationCount={notificationCount} />
              </div>
            )}

            <div className="md:hidden h-6 w-px bg-muted-foreground/40" />

            <div className="md:hidden flex items-center">
              <Sidebar />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
