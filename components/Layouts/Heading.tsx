import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({
  children,
  containerClassName,
  titleClassName,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={cn("max-w-3xl sm:mb-8 mb-4", containerClassName)}>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-6xl font-[600] tracking-tighter",
          titleClassName
        )}
      >
        {children}
      </h2>
    </div>
  );
};

const TitleGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("gradient-text-primary font-black", className)}>
      {children}
    </span>
  );
};

const Subtitle = ({
  children,
  subtitleClassName,
}: {
  children: React.ReactNode;
  subtitleClassName?: string;
}) => {
  return (
    <p
      className={cn(
        "text-foreground/90 text-sm sm:text-base md:text-lg font-medium max-w-lg",
        subtitleClassName
      )}
    >
      {children}
    </p>
  );
};

export { SectionTitle, TitleGradient, Subtitle };
