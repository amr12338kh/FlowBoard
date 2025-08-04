"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const SectionBackgroundWrapper = ({
  children,
  className,
  id,
  isTop,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isTop?: boolean;
}) => {
  const bgRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id={id || "#"}
      ref={bgRef}
      className={cn("w-full mx-auto lg:min-h-screen bg-accent", className)}
    >
      {children}
    </section>
  );
};

export default SectionBackgroundWrapper;
