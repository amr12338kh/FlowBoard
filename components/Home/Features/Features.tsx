"use client";

import { features } from "@/data/data";
import { Container } from "../Layouts/Container";
import { SectionTitle, Subtitle } from "../Layouts/Heading";
import Carousel from "../../ui/carousel";
import FeatureCard from "./FeatureCard";
import { darkenHexColor } from "@/lib/helpers";
import { useThemeAwareColor } from "@/hooks/use-theme-aware-color";
import SectionBackgroundWrapper from "../Layouts/SectionBackgroundWrapper";

const Features = () => {
  const textColor = useThemeAwareColor("--color-primary", (color) =>
    darkenHexColor(color, 100)
  );

  return (
    <SectionBackgroundWrapper variant="secondary">
      <Container>
        <SectionTitle containerClassName="mb-2!">
          <span style={{ color: textColor }}>
            Work smarter, not harder with AI Features
          </span>
        </SectionTitle>
        <Subtitle>
          <span style={{ color: textColor }}>
            Use AI-powered features to advise you on where to focus, automate
            routine work, and accelerate decision-making.
          </span>
        </Subtitle>
      </Container>
      <Carousel containerPadding="max(1.25rem, calc((100vw - 1785px) / 2))">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </Carousel>
    </SectionBackgroundWrapper>
  );
};

export default Features;
