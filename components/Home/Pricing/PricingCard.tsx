import { Check, Plus } from "lucide-react";
import { Button } from "../../ui/button";
import { PricingCardProps } from "@/types/types";
import { cn } from "@/lib/utils";

const PricingCard = ({
  pricing,
  prevPlan,
  isOpen,
  onClick,
}: PricingCardProps) => {
  return (
    <div
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "h-full flex flex-col border border-primary-basic rounded-md bg-background px-6 transition-all duration-500 ease-in-out overflow-hidden transform",
        !isOpen
          ? "max-h-[84px] py-6 sm:py-6 relative cursor-pointer"
          : "max-h-[1000px] py-10 scale-[1.01]"
      )}
    >
      {/* Compact view for mobile when closed */}
      {!isOpen && (
        <div className="md:hidden flex justify-between items-center absolute inset-0 px-6 py-6 bg-background z-10">
          <h3 className="text-2xl font-bold">{pricing.name}</h3>
          <Plus
            className={cn(
              "size-5 transition-transform duration-300",
              isOpen && "rotate-45"
            )}
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={cn(
          "transition-opacity duration-500 ease-in-out flex flex-col flex-grow",
          isOpen ? "opacity-100" : "opacity-0  md:opacity-100"
        )}
      >
        <div className="grid grid-rows-3 space-y-8 w-full flex-grow">
          <div className="relative space-y-2 2xl:space-y-3">
            <h3 className="text-3xl xl:text-2xl 2xl:text-3xl font-bold">
              {pricing.name}
            </h3>
            <p className="font-medium text-xs">{pricing.description}</p>
            {isOpen && (
              <Plus className="size-5 absolute top-0 right-0 rotate-45 cursor-pointer md:hidden" />
            )}
          </div>

          <div className="space-y-2 2xl:space-y-3">
            <h3 className="text-3xl xl:text-2xl 2xl:text-4xl font-medium">
              {pricing.price != null ? `US$ ${pricing.price}` : "Contact Sales"}
            </h3>
            <p className="font-medium text-sm xl:text-xs 2xl:text-sm text-muted-foreground">
              {pricing.priceDescription}
            </p>
          </div>

          <div className="flex justify-center w-full">
            <Button
              variant={pricing.mostPopular ? "basic" : "outline"}
              size="lg"
              className={cn(
                "w-full rounded-none p-6 xl:p-4 2xl:p-6 text-lg xl:text-base 2xl:text-lg",
                !pricing.mostPopular &&
                  "border-primary-basic hover:bg-[var(--primary-basic)] hover:opacity-70 hover:text-background border-2"
              )}
            >
              {pricing.cta}
            </Button>
          </div>
        </div>

        {/* Features List */}
        <div className="transition-all duration-500 ease-in-out">
          {pricing.name === "Personal" ? (
            <p className="font-medium mb-5 text-base xl:text-sm 2xl:text-base">
              Manage tasks and personal to-dos:
            </p>
          ) : (
            <p className="font-medium mb-5 text-base xl:text-sm 2xl:text-base">
              Everything in {prevPlan?.name}, plus:
            </p>
          )}
          <ul className="space-y-2">
            {pricing.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm xl:text-xs 2xl:text-sm font-medium text-muted-foreground transition-opacity duration-300 ease-in delay-75"
              >
                <Check className="size-3 xl:size-2 2xl:size-3 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
