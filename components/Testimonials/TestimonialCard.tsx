"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../ui/button";
import { darkenHexColor, hexToRGBA } from "@/lib/helpers";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Separator } from "../ui/separator";
import { useRef, useState } from "react";
import { TestimonialsProps } from "@/types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: TestimonialsProps;
  isActive: boolean;
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const textColor = darkenHexColor(testimonial.companyColor, 100);

  useGSAP(() => {
    if (!isActive) return; // Only animate when card becomes active

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".testimonial-logo",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "sine.out" }
      )
        .fromTo(
          ".testimonial-text",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "sine.out" },
          "-=0.8"
        )
        .fromTo(
          ".testimonial-paragraph",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .fromTo(
          ".testimonial-button",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.7"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row border border-muted-foreground/20 flex-shrink-0 w-full sm:min-h-[560px] rounded-2xl overflow-hidden testimonial-card"
    >
      {/* Left side */}
      <div className="lg:w-[30%] lg:px-10 sm:py-4 lg:py-16 flex flex-col items-center lg:items-start lg:justify-between">
        {/* Top */}
        <div className="h-36 w-36 testimonial-logo flex items-center">
          <img src={testimonial.logo} alt={testimonial.company} />
        </div>

        {/* Bottom */}
        <div className="space-y-8 hidden lg:block w-full">
          <Separator />

          <div>
            <p className="font-bold text-muted-foreground text-xs uppercase tracking-tight mb-1">
              company size
            </p>
            <h3 className="text-xl font-[600] testimonial-text">
              {testimonial.companySize}
            </h3>
          </div>

          <div>
            <p className="font-bold text-muted-foreground text-xs uppercase tracking-tight mb-1">
              industry
            </p>
            <h3 className="text-xl font-[600] testimonial-text">
              {testimonial.industry}
            </h3>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div
        className="lg:w-[70%] h-full"
        style={{
          backgroundColor: `${hexToRGBA(testimonial.companyColor, 0.2, 50)}`,
        }}
      >
        <div className="p-5 sm:p-16 space-y-8 flex flex-col justify-between sm:h-[560px]">
          <div className="flex items-start gap-2 sm:gap-4 testimonial-paragraph">
            <div>
              <BiSolidQuoteAltLeft
                className="size-5 sm:size-8"
                style={{ color: textColor }}
              />
            </div>
            <div className="space-y-10">
              <p
                className="text-base sm:text-4xl italic"
                style={{ color: textColor }}
              >
                {testimonial.testimonial}
              </p>

              <div>
                <p
                  className="font-bold tracking-tight text-xs sm:text-base"
                  style={{
                    color: textColor,
                  }}
                >
                  {testimonial.name}
                </p>
                <p
                  className=" font-medium tracking-tight text-xs sm:text-base"
                  style={{
                    color: textColor,
                  }}
                >
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end testimonial-button">
            <Link href="#">
              <Button
                variant="transparent"
                size="wide"
                className="text-xs sm:text-lg"
                style={{
                  color: textColor,
                  borderColor: textColor,
                  backgroundColor: isHovered
                    ? hexToRGBA(testimonial.companyColor, 0.2, 40)
                    : "transparent",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Read case study
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
