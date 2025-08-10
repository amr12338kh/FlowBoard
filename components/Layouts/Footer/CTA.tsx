"use client";

import React from "react";
import SectionBackgroundWrapper from "../SectionBackgroundWrapper";
import { useThemeAwareColor } from "@/hooks/use-theme-aware-color";
import { darkenHexColor } from "@/lib/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "../Container";

const CTA = () => {
  const textColor = useThemeAwareColor("--color-primary", (color) =>
    darkenHexColor(color, 100)
  );

  return (
    <SectionBackgroundWrapper
      isTop
      className="min-[200px] sm:min-h-[500px]! sm:py-0! sm:pt-28! sm:pb-6! h-full"
    >
      <Container className="flex flex-col sm:justify-between sm:min-h-[400px] h-full">
        <div className="flex flex-col items-center gap-5">
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-3xl text-center"
            style={{ color: textColor }}
          >
            The only platform that can support your company at any scale
          </h2>

          <Link href="/login" className="mt-4">
            <Button
              variant="transparent"
              size="wide"
              style={{ color: textColor, borderColor: textColor }}
            >
              Get Started
            </Button>
          </Link>
        </div>
        <Separator className="bg-muted-foreground/25 hidden sm:block" />
      </Container>
    </SectionBackgroundWrapper>
  );
};

export default CTA;
