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
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const bgRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!bgRef.current) return;

    // Initial state
    gsap.set(bgRef.current, {
      width: "100%",
      borderRadius: "0px",
    });

    // Scroll animation
    gsap.to(bgRef.current, {
      width: "95%",
      borderRadius: "25px",
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom center",
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
