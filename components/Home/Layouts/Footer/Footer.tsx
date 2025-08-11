/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import SectionBackgroundWrapper from "../SectionBackgroundWrapper";
import { Container } from "../Container";
import { HeaderLogo } from "@/components/shared/Logo";
import { footerCopyright, footerData, socialLinks } from "@/data/data";
import Link from "next/link";
import { useThemeAwareColor } from "@/hooks/use-theme-aware-color";
import { darkenHexColor } from "@/lib/helpers";
import { Earth } from "lucide-react";

const Footer = () => {
  const textColor = useThemeAwareColor("--color-primary", (color) =>
    darkenHexColor(color, 100)
  );

  return (
    <SectionBackgroundWrapper
      none
      className="sm:py-0! py-0! min-h-fit! flex flex-col"
    >
      <Container className="gap-12 flex flex-col lg:flex-row lg:gap-40 w-full">
        <div className="flex lg:block">
          <HeaderLogo />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full space-y-12">
          {footerData.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3
                className="md:text-lg font-bold mb-1"
                style={{ color: textColor }}
              >
                {item.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {item.links.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="font-semibold opacity-70 hover:opacity-100 hover:underline duration-200 transition-all text-sm md:text-base"
                      style={{ color: textColor }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div
        style={{ color: textColor }}
        className="bg-accent w-full p-2 border-t border-muted-foreground/25"
      >
        <Container className="flex flex-col xl:flex-row justify-between items-center gap-y-8">
          <p className="font-bold">
            © {footerCopyright.year} {footerCopyright.company}{" "}
            {footerCopyright.allRightsReserved}
          </p>

          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer">
            <Earth className="size-5" /> <span>English</span>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="p-2 rounded-full bg-primary-basic"
              >
                {item.icon && <item.icon className="text-white" />}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hover:underline opacity-80 hover:opacity-100 duration-200 transition-all"
            >
              Terms of Service
            </Link>{" "}
            •{" "}
            <Link
              href="#"
              className="hover:underline opacity-80 hover:opacity-100 duration-200 transition-all"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/app-store-btn.png"
              alt="App Store Download Button"
              className="w-[100px] cursor-pointer"
            />
            <img
              src="/play-store-btn.png"
              alt="Play Store Download Button"
              className="w-[120px] cursor-pointer"
            />
          </div>
        </Container>
      </div>
    </SectionBackgroundWrapper>
  );
};

export default Footer;
