"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const SectionBackgroundWrapper = ({
  children,
  className,
  id,
  isTop,
  none,
  variant = "primary",
  color = "main",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isTop?: boolean;
  none?: boolean;
  variant?: "primary" | "secondary";
  color?: "main" | "gary";
}) => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!bgRef.current) return;

    // Initial state
    gsap.set(bgRef.current, {
      width: isTop ? "95%" : "100%",
      borderRadius: isTop ? "25px" : "0px",
    });

    // Scroll animation
    gsap.to(bgRef.current, {
      width: isTop ? "100%" : "95%",
      borderRadius: isTop ? "0px" : "25px",
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: isTop ? "center bottom" : "top top",
        end: isTop ? "center center" : "bottom center",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return variant === "primary" ? (
    <Section
      id={id || "#"}
      ref={none ? undefined : bgRef}
      className={cn(
        "w-full mx-auto lg:min-h-screen bg-primary/25 py-20! sm:py-28!",
        className
      )}
    >
      {children}
    </Section>
  ) : (
    <Section
      id={id}
      className={cn(
        "xl:rounded-2xl max-w-[1550px] mx-auto my-16",
        color === "main" ? "bg-primary/25" : "bg-[var(--primary-basic)]/2",
        className
      )}
    >
      <div className="py-6 sm:py-12">{children}</div>
    </Section>
  );
};

export default SectionBackgroundWrapper;
