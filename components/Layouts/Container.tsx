import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  as?: React.ElementType;
  centered?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      size = "2xl",
      padding = "md",
      as: Component = "div" as React.ElementType,
      centered = false,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "max-w-2xl", // 672px
      md: "max-w-4xl", // 896px
      lg: "max-w-6xl", // 1152px
      xl: "max-w-7xl", // 1280px
      "2xl": "max-w-[1536px]", // 1536px
      full: "max-w-none", // No max width
    };

    const paddingClasses = {
      none: "",
      sm: "px-4 py-2",
      md: "px-5 py-4",
      lg: "px-8 py-6",
      xl: "px-12 py-8",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "w-full",
          sizeClasses[size],
          paddingClasses[padding],
          centered && "mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

// Specialized Container variants
export const PageContainer = React.forwardRef<
  HTMLDivElement,
  Omit<ContainerProps, "size" | "padding">
>(({ children, className, ...props }, ref) => (
  <Container
    ref={ref}
    size="2xl"
    padding="md"
    centered
    className={cn("", className)}
    {...props}
  >
    {children}
  </Container>
));

PageContainer.displayName = "PageContainer";

export const ContentContainer = React.forwardRef<
  HTMLDivElement,
  Omit<ContainerProps, "size">
>(({ children, className, padding = "md", ...props }, ref) => (
  <Container
    ref={ref}
    size="lg"
    padding={padding}
    centered
    className={className}
    {...props}
  >
    {children}
  </Container>
));

ContentContainer.displayName = "ContentContainer";

export const SectionContainer = React.forwardRef<
  HTMLDivElement,
  Omit<ContainerProps, "size" | "padding">
>(({ children, className, ...props }, ref) => (
  <Container
    ref={ref}
    size="xl"
    padding="lg"
    centered
    className={cn("py-16 lg:py-24", className)}
    {...props}
  >
    {children}
  </Container>
));

SectionContainer.displayName = "SectionContainer";

export const CardContainer = React.forwardRef<
  HTMLDivElement,
  Omit<ContainerProps, "centered">
>(({ children, className, padding = "md", ...props }, ref) => (
  <Container
    ref={ref}
    padding={padding}
    className={cn(
      "bg-card text-card-foreground rounded-lg border shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </Container>
));

CardContainer.displayName = "CardContainer";
