import { Container } from "./Layouts/Container";
import Section from "./Layouts/Section";
import { Card, CardContent } from "./ui/card";
import { useCases } from "@/data/data";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import Carousel from "./ui/carousel";
import { UseCasesProps } from "@/types/types";

const UseCases = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-[600] tracking-tight">
            See how{" "}
            <span className="gradient-text-primary font-black">FlowBoard</span>{" "}
            keeps work moving across use cases
          </h1>
        </div>
      </Container>

      <div className="py-8 sm:py-4">
        <Carousel
          itemWidth={320}
          gap={16}
          showNavigation={true}
          containerPadding="max(1.25rem, calc((100vw - 1450px) / 2))"
        >
          {useCases.map((useCase, i) => (
            <UseCaseCard key={i} useCase={useCase} />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

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
            <Button
              variant="ghost"
              className="w-full justify-between group-hover:bg-primary/5 transition-colors group"
            >
              {useCase.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCases;
