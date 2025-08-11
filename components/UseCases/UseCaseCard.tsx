import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { UseCasesProps } from "@/types/types";
import Link from "next/link";
import { Button } from "../ui/button";

const UseCaseCard = ({ useCase }: { useCase: UseCasesProps }) => {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] group">
      <Card className="rounded-md shadow-none p-0 group-hover:border-primary transition-colors duration-200 h-full">
        <CardContent className="flex flex-col space-y-5 aspect-square p-8">
          <div className="flex justify-between">
            <div className="p-3 rounded-md bg-accent/90">
              {useCase.icon && (
                <useCase.icon className="size-10 text-primary" />
              )}
            </div>

            <div className="hidden sm:block">
              <Badge className="bg-accent/90 backdrop-blur-sm text-foreground border-0 font-medium">
                <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                {useCase.stats}
              </Badge>
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold text-xl sm:text-2xl mb-1 sm:mb-2">
              {useCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {useCase.description}
            </p>
          </div>

          <div className="space-y-2">
            {useCase.features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm"
              >
                <CheckCircle className="h-3 w-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
            {useCase.features.length > 2 && (
              <div className="text-xs sm:text-sm text-primary font-medium">
                +{useCase.features.length - 2} more features
              </div>
            )}
          </div>

          <Link href={useCase.href}>
            <p className="w-full flex items-center gap-4 hover:bg-transparent group hover:opacity-85 sm:text-lg font-semibold">
              {useCase.cta}
              <span className="p-1 rounded-full bg-primary-basic text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight className="size-3.5 sm:size-4" />
              </span>
            </p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCaseCard;
