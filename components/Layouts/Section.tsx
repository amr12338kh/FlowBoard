import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("py-12 sm:py-16", className)}>{children}</section>
  );
};

export default Section;
