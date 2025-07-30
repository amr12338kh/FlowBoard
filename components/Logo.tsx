import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "primary" | "lightning" | "target" | "icon-only";
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  variant = "primary",
  size = "md",
  showText = true,
  className,
  iconClassName,
  textClassName,
  animated = true,
}) => {
  const sizeClasses = {
    sm: {
      icon: "w-8 h-8 text-sm",
      text: "text-lg",
    },
    md: {
      icon: "w-12 h-12 text-xl",
      text: "text-2xl",
    },
    lg: {
      icon: "w-16 h-16 text-2xl",
      text: "text-3xl",
    },
    xl: {
      icon: "w-20 h-20 text-3xl",
      text: "text-4xl",
    },
  };

  const getIcon = () => {
    switch (variant) {
      case "lightning":
        return "⚡";
      case "target":
        return "🎯";
      case "primary":
      case "icon-only":
      default:
        return "F";
    }
  };

  const iconContent = getIcon();

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2",
        !showText && variant === "icon-only" && "gap-0",
        className
      )}
    >
      {/* Logo Icon */}
      <div
        className={cn(
          "gradient-primary rounded-md flex items-center justify-center text-white font-black shadow-md relative overflow-hidden",
          sizeClasses[size].icon,
          animated && "logo-shine",
          iconClassName
        )}
      >
        {iconContent}

        {/* Shine Animation */}
        {animated && (
          <div className="absolute top-0 left-0 w-full h-full opacity-0 animate-shine">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 translate-x-[-100%] translate-y-[-100%]" />
          </div>
        )}
      </div>

      {/* Logo Text */}
      {showText && variant !== "icon-only" && (
        <span
          className={cn(
            "font-black text-foreground tracking-tight",
            sizeClasses[size].text,
            textClassName
          )}
        >
          FlowBoard
        </span>
      )}
    </div>
  );
};

// Specialized Logo Components
export const HeaderLogo: React.FC<Omit<LogoProps, "size" | "variant">> = (
  props
) => <Logo variant="primary" size="sm" {...props} />;

export const SidebarLogo: React.FC<Omit<LogoProps, "size" | "variant">> = (
  props
) => <Logo variant="primary" size="sm" {...props} />;

export const FaviconLogo: React.FC<
  Omit<LogoProps, "size" | "variant" | "showText">
> = (props) => (
  <Logo variant="icon-only" size="sm" showText={false} {...props} />
);

export const HeroLogo: React.FC<Omit<LogoProps, "size" | "variant">> = (
  props
) => <Logo variant="primary" size="xl" {...props} />;

export const LoadingLogo: React.FC<Omit<LogoProps, "animated">> = (props) => (
  <div className="animate-pulse">
    <Logo animated={false} {...props} />
  </div>
);
