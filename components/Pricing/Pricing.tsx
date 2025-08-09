"use client";

import { useCallback, useState } from "react";
import Section from "../Layouts/Section";
import { SectionTitle } from "../Layouts/Heading";
import { Container } from "../Layouts/Container";
import { pricingPlans } from "@/data/data";
import PricingCard from "./PricingCard";
import { useMediaQuery } from "react-responsive";

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const handleCardToggle = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <Section>
      <Container>
        <SectionTitle containerClassName="text-center max-w-[100%]">
          Organize your team&apos;s work in one spot
        </SectionTitle>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10 md:mt-16 items-stretch">
          {pricingPlans.map((pricing, i) => {
            const prevPlan = pricingPlans[i - 1];

            return (
              <PricingCard
                key={i}
                pricing={pricing}
                prevPlan={prevPlan}
                isOpen={isLargeScreen ? true : openIndex === i}
                onClick={() => handleCardToggle(i)}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
