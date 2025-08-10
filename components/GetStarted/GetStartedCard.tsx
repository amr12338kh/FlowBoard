import { GetStartedCardProps } from "@/types/types";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const GetStartedCard = ({
  getStarted,
}: {
  getStarted: GetStartedCardProps;
}) => (
  <Link
    href={getStarted.href}
    className=" p-5 sm:p-7 lg:p-10 bg-background rounded-lg w-full flex items-center justify-between hover:bg-[var(--primary-basic)]/5 transition-colors duration-300"
  >
    <div className="space-y-1 sm:space-y-2 lg:space-y-4">
      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-[600]">
        {getStarted.title}
      </h3>
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        {getStarted.subtitle}
      </p>
    </div>

    <Button
      variant="basic"
      className="h-9 w-9 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:w-15 xl:h-15 p-0 rounded-full"
    >
      <ArrowRight className="size-4 sm:size-6 lg:size-8" />
    </Button>
  </Link>
);

export default GetStartedCard;
