import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  id,
  ref,
  children,
  className,
}: {
  id?: string;
  ref?: React.Ref<HTMLDivElement | null>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      id={id || "#"}
      ref={ref}
      className={cn("py-12 sm:py-16", className)}
    >
      {children}
    </section>
  );
};

export default Section;
