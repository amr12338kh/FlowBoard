"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Skeleton } from "../ui/skeleton";
import { ScrollTrigger, SplitText } from "gsap/all";
import { BotMessageSquare, Check, CheckCircle, User2 } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const DemoAnimation = () => {
  const containerRef = useRef(null);

  const resetStates = () => {
    gsap.set(".ai-container", {
      display: "none",
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotationY: -15,
    });
    gsap.set(".ai-loading", { display: "flex", opacity: 1 });
    gsap.set(".ai-active", { display: "none", opacity: 0 });
    gsap.set(".lunch-brief", {
      scale: 0.6,
      opacity: 0,
      y: 20,
      rotationZ: -5,
    });
    gsap.set(".ai-approved", {
      display: "none",
      opacity: 0,
      y: 50,
      scale: 0.9,
    });
    gsap.set(".check", { scale: 0, opacity: 0 });
    gsap.set(".ai-assigned", {
      display: "none",
      opacity: 0,
      y: 50,
      scale: 0.9,
    });
    gsap.set(".ai-lucas", { display: "none", opacity: 0, scale: 0.5 });
    gsap.set(".ai-deadline-text", {
      opacity: 0,
      x: 20,
    });
    gsap.set(".thinking-dots", { opacity: 1 });
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1, // Infinite repeat
      repeatDelay: 0.8,
      paused: true,
      onRepeat: () => {
        // Reset initial states on each loop
        resetStates();

        // Reset text back to 'Thinking...'
        const deadlineEl = document.querySelector(".ai-deadline-text");
        if (deadlineEl) {
          deadlineEl.innerHTML =
            'Thinking<span class="thinking-dots">...</span>';
        }

        // Reset dotsTimeline to start over
        dotsTimeline.pause(0);
      },
    });
    const dotsTimeline = gsap.timeline({ repeat: -1, paused: true });

    dotsTimeline
      .to(".thinking-dots", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".thinking-dots", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });

    const titleSplit = SplitText.create(".ai-text", {
      type: "words",
    });

    // Initial State
    resetStates();

    // Animation Timeline
    tl.to(".ai-container", {
      display: "block",
      opacity: 1,
      delay: 0.5,
      scale: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.out(1.4)",
      y: 0,
      rotationY: 0,
      transformOrigin: "center center",
    });

    tl.to(".ai-loading", {
      opacity: 0,
      ease: "elastic.in(1, 0.8)",
      y: -20,
      duration: 0.5,
      delay: 2, // simulate loading time
      onComplete: () => {
        gsap.set(".ai-loading", { display: "none" });
      },
    });

    tl.set(".ai-active", { display: "block" });
    tl.to(".ai-active", {
      opacity: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.8)",
      delay: 0.1,
      y: 0,
    });

    tl.from(
      titleSplit.words,
      {
        xPercent: 100,
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",
        autoAlpha: 0,
        stagger: 0.1,
      },
      "-=0.3"
    );

    tl.to(
      ".lunch-brief",
      {
        scale: 1,
        opacity: 1,
        y: 0,
        rotationZ: 0,
        duration: 0.8,
        ease: "elastic.out(1.2, 0.6)",
      },
      "-=0.4"
    );

    tl.to(".ai-approved", {
      display: "flex",
      opacity: 1,
      y: 0,
      duration: 0.5,
      scale: 1,
      delay: 1,
      ease: "back.out(1.3)",
      transformOrigin: "center bottom",
      stagger: 0.1,
    }).to(".check", {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "elastic.out(1.5, 0.7)",
      transformOrigin: "center center",
    });

    tl.to(".ai-assigned", {
      display: "flex",
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      delay: 0.8,
      ease: "back.out(1.3)",
      transformOrigin: "center bottom",
      stagger: 0.1,
    }).to(
      ".ai-lucas",
      {
        display: "flex",
        scale: 1,
        delay: 0.5,
        opacity: 1,
        duration: 0.3,
        ease: "elastic.out(1.5, 0.7)",
        transformOrigin: "center center",
      },
      "-=0.3"
    );

    tl.to(
      ".ai-deadline-text",
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          dotsTimeline.play();
        },
      },
      "-=0.2"
    );

    tl.to({}, { duration: 1.5 }); // wait while blinking dots

    tl.call(() => {
      dotsTimeline.pause(0); // Stop and reset to first frame
    });

    tl.to(".ai-deadline-text", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        document.querySelector(".ai-deadline-text")!.innerHTML =
          "Deadline: Wednesday";
      },
    });

    tl.to(".ai-deadline-text", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Pause before restart
    tl.to({}, { duration: 4 });

    // Reset animation with fade out effect before restart
    tl.to([".ai-approved", ".ai-assigned", ".ai-lucas", ".ai-deadline-text"], {
      opacity: 0,
      y: 10,
      scale: 0.9,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.in",
    })
      .to(
        ".ai-active",
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.2"
      )
      .to(
        ".ai-container",
        {
          opacity: 0,
          scale: 0.9,
          y: 10,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.2"
      );

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%", // Trigger when top of element hits 80% viewport height
      onEnter: () => tl.play(),
      onLeave: () => tl.pause(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.pause(),
    });
  }, []);

  const BotLogo = () => (
    <div className="p-1.5 sm:p-2 gradient-primary rounded-full">
      <BotMessageSquare className="size-6 sm:size-8 text-accent" />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative mt-10 md:mt-12 w-full max-w-5xl min-h-[300px] md:aspect-video rounded-2xl overflow-hidden md:bg-accent"
    >
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <div className="w-full md:w-[700px] bg-white h-fit rounded-md md:shadow-md mb-6 md:mb-0 md:p-8 text-start ai-container overflow-hidden">
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <div className="ai-active space-y-4 transition-transform duration-200">
                <div className="flex items-center gap-2">
                  {BotLogo()}
                  <h2 className="font-semibold text-lg sm:text-xl">
                    FlowBoard AI wrote brief
                  </h2>
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="text-sm sm:text-lg ai-text flex gap-1">
                    Here&apos;s a first draft based on your request:
                  </h3>
                  <div className="p-2 bg-muted flex items-center gap-2 lunch-brief text-sm sm:text-base rounded">
                    <CheckCircle className="size-4 sm:size-6" />{" "}
                    <span>Product lunch brief - Draft</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 ai-loading">
                <div className="flex items-center gap-2">
                  {BotLogo()}
                  <h3 className="text-lg sm:text-xl font-semibold w-full">
                    FlowBoard AI{" "}
                    <span className="text-muted-foreground font-medium animate-pulse text-base">
                      analyzing request...
                    </span>
                  </h3>
                </div>
                <div className="w-full space-y-3">
                  <Skeleton className="w-full h-3 sm:h-4 rounded-full" />
                  <Skeleton className="w-full h-3 sm:h-4 rounded-full" />
                  <Skeleton className="w-[70%] h-3 sm:h-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[700px] h-fit md:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-2 ai-approved">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center gradient-primary rounded-full">
                <User2 className="size-5 sm:size-6 text-accent" />
              </div>
              <div className="absolute bottom-0 right-0 p-1 bg-success rounded-full check">
                <Check className="size-2 text-white" />
              </div>
            </div>
            <span className="font-semibold text-sm sm:text-lg">
              Michelle{" "}
              <span className="text-muted-foreground">approved brief</span>
            </span>
          </div>

          <div className="flex flex-col gap-6 sm:gap-2 ai-assigned">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center gradient-primary rounded-full">
                  <BotMessageSquare className="size-5 sm:size-6 text-accent" />{" "}
                </div>
                <span className="font-semibold text-sm sm:text-lg">
                  FlowBoard AI{" "}
                  <span className="text-muted-foreground">assigned to</span>
                </span>
              </div>
              <div className="w-fit bg-primary/20 flex items-start sm:items-center gap-2 pr-2 rounded ai-lucas">
                <div className="p-0.5 gradient-primary rounded-l">
                  <User2 className="size-5 sm:size-6 text-accent" />
                </div>
                <span className="font-semibold text-sm sm:text-base">
                  Lucas
                </span>
              </div>
            </div>
            <span className="text-muted-foreground ai-deadline-text text-start sm:mt-2">
              Thinking
              <span className="thinking-dots">...</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoAnimation;
