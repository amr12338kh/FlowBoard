"use client";

import Section from "../Layouts/Section";
import { Container } from "../Layouts/Container";
import { TitleGradient, SectionTitle } from "../Layouts/Heading";
import { testimonials } from "@/data/data";
import Carousel from "../ui/carousel";
import TestimonialCard from "./TestimonialCard";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <Section>
      <Container>
        <SectionTitle containerClassName="mb-0!">
          The world&apos;s top companies trust{" "}
          <TitleGradient>FlowBoard</TitleGradient>
        </SectionTitle>
        <div className="hidden sm:block">
          <Carousel
            // autoPlay
            // autoPlayInterval={5000}
            fullWidthPerItem
            instantSnap={true}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                testimonial={testimonial}
                isActive={i === activeIndex}
              />
            ))}
          </Carousel>
        </div>
      </Container>
      <div className="sm:hidden">
        <Carousel onNext={handleNext} onPrev={handlePrev} itemWidth={500}>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              isActive={i === activeIndex}
            />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;
