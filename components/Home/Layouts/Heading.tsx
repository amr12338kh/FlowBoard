import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({
  children,
  style,
  containerClassName,
  titleClassName,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  containerClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={cn("sm:mb-8 mb-4", containerClassName)}>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-6xl font-bold sm:max-w-4xl ",
          titleClassName
        )}
        style={style}
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
    <span className={cn("gradient-text-primary font-bold", className)}>
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
        "max-w-xl mt-4 text-muted-foreground text-sm sm:text-base md:text-lg font-medium",
        subtitleClassName
      )}
    >
      {children}
    </p>
  );
};

export { SectionTitle, TitleGradient, Subtitle };
