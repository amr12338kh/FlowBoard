import { features } from "@/data/data";
import Section from "./Layouts/Section";
import { Container } from "./Layouts/Container";
import { SectionTitle, TitleGradient } from "./Layouts/Heading";
import SectionBackgroundWrapper from "./Layouts/SectionBackgroundWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeatureProps } from "@/types/types";
import Carousel from "./ui/carousel";
import { Button } from "./ui/button";

const Features = () => {
  return (
    <Section>
      <SectionBackgroundWrapper isTop>
        <Section>
          <Container>
            <SectionTitle>
              Supercharge your team&apos;s workflow with{" "}
              <TitleGradient>AI-powered features</TitleGradient>
            </SectionTitle>
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>

            <Carousel containerPadding="" containerClassName="sm:hidden">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </Carousel>
          </Container>
        </Section>
      </SectionBackgroundWrapper>
    </Section>
  );
};

const FeatureCard = ({ feature }: { feature: FeatureProps }) => (
  <div
    key={feature.id}
    className="flex-shrink-0 max-w-[320px] sm:w-full group p-8 bg-accent hover:bg-primary/10 rounded-md border border-muted-foreground/40 transition-all duration-200 flex flex-col"
  >
    <div className="flex">
      <div className="p-3 rounded-full bg-primary/80 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-200">
        <feature.icon className="h-7 w-7 text-accent group-hover:rotate-12 transition-transform duration-200" />
      </div>
    </div>

    <div className="flex-1 flex flex-col space-y-8">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
          {feature.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed flex-1">
          {feature.description}
        </p>
      </div>

      <div className="flex">
        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
        >
          See {feature.title}{" "}
          <span className="rounded-full bg-primary-basic text-secondary-basic p-1 flex items-center group-hover:translate-x-1 transition-transform duration-200">
            <ArrowRight className="w-3 h-3" />
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default Features;
