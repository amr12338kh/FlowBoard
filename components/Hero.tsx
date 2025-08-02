"use client";

/* eslint-disable @next/next/no-img-element */
import { PageContainer } from "./Layouts/Container";
import Link from "next/link";
import { Button } from "./ui/button";
import SectionBackgroundWrapper from "./Layouts/SectionBackgroundWrapper";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Badge } from "./ui/badge";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        ".hero-title",
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <SectionBackgroundWrapper id="home">
      <PageContainer className="pt-28 pb-10 sm:py-32 space-y-14 min-h-fit">
        <div
          className="text-center space-y-6 sm:space-y-10 max-w-4xl mx-auto"
          ref={contentRef}
        >
          <div className="flex justify-center hero-badge">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Project Management
            </Badge>
          </div>

          <div className="hero-title">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Where your teams and{" "}
              <span className="gradient-text-primary">AI coordinate</span> work
              together
            </h1>
          </div>

          <div className="hero-description">
            <p className="max-w-3xl text-sm sm:text-lg text-muted-foreground mx-auto font-medium leading-relaxed">
              FlowBoard combines intuitive project management with AI-powered
              insights to help your team deliver exceptional results, faster
              than ever.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 hero-buttons">
            <Link href="/login">
              <Button className="p-6 sm:p-8 sm:text-lg rounded-full font-medium text-accent w-full">
                Get Started
              </Button>
            </Link>
            <Link href="/">
              <Button className="p-6 sm:p-8 sm:text-lg rounded-full bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium w-full">
                See how it works
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-1 sm:gap-3">
          <img
            src="/woman-working.jpg"
            alt="Woman Working Image"
            className="w-1/2 object-cover rounded-md sm:rounded-2xl"
            loading="lazy"
          />
          <img
            src="/man-working.jpg"
            alt="Man Working Image"
            className="w-1/2 object-cover rounded-md sm:rounded-2xl"
            loading="lazy"
          />
        </div>
      </PageContainer>
    </SectionBackgroundWrapper>
  );
};

export default Hero;
