"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { CarouselProps } from "@/types/types";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import { useDebouncedCallback } from "use-debounce";
import React from "react";

const Carousel = ({
  children,
  itemWidth = 320,
  gap = 16,
  showNavigation = true,
  containerPadding = "max(1.25rem, calc((100vw - 1450px) / 2))",
  containerClassName,
  carouselClassName,
  buttonsContainerClassName,
  buttonVariant,
  autoPlay = false,
  autoPlayInterval = 3000,
  fullWidthPerItem = false,
  instantSnap = false,
  activeIndex,
  onNext,
  onPrev,
}: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(activeIndex || 0);

  const childrenCount = React.Children.count(children);

  // Get actual item width including gap for mobile calculations
  const getActualItemWidth = useCallback(() => {
    if (!scrollRef.current) return itemWidth + gap;

    // For full width per item use the container's client width
    if (fullWidthPerItem) {
      return scrollRef.current.clientWidth;
    }

    // On mobile use the actual rendered item width if available
    const firstChild = scrollRef.current.firstElementChild as HTMLElement;
    if (firstChild) {
      const rect = firstChild.getBoundingClientRect();
      return rect.width + gap;
    }

    return itemWidth + gap;
  }, [itemWidth, gap, fullWidthPerItem]);

  const checkScrollability = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const threshold = 5; // Add small threshold for floating point precision

    setCanScrollLeft(scrollLeft > threshold);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - threshold);
    setCurrentScrollPosition(scrollLeft);
  }, []);

  // Debounced scroll check for better performance
  const debouncedScrollCheck = useDebouncedCallback(checkScrollability, 16);
  const debouncedSetActiveDot = useDebouncedCallback((index: number) => {
    setActiveDotIndex(index);
  }, 50);

  const containerPaddingValue = useMemo(() => {
    if (typeof window === "undefined") return 20;
    return Math.max(20, (window.innerWidth - 1450) / 2);
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (!scrollRef.current || isScrollingRef.current) return;

      const container = scrollRef.current;
      const actualItemWidth = getActualItemWidth();

      // Set scrolling flag to prevent multiple rapid scrolls
      isScrollingRef.current = true;
      setIsUserInteracting(true);

      // Clear any existing scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Calculate target scroll position based on current position
      let targetScrollLeft: number;

      if (direction === "left") {
        // Trigger animations or state updates
        onPrev?.();

        // Update active dot index
        setActiveDotIndex((prev) =>
          prev === 0 ? childrenCount - 1 : prev - 1
        );

        // Scroll left by one item width
        targetScrollLeft = Math.max(0, currentScrollPosition - actualItemWidth);
      } else {
        // Trigger animations or state updates
        onNext?.();
        // Update active dot index
        setActiveDotIndex((prev) => (prev + 1) % childrenCount);

        // Scroll right by one item width
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        targetScrollLeft = Math.min(
          maxScrollLeft,
          currentScrollPosition + actualItemWidth
        );

        // Handle end of scroll alignment
        if (targetScrollLeft >= maxScrollLeft - containerPaddingValue) {
          targetScrollLeft = maxScrollLeft;
        }
      }

      // Use scrollTo for more precise positioning
      container.scrollTo({
        left: targetScrollLeft,
        behavior: instantSnap ? "auto" : "smooth",
      });

      // Reset flags after animation completes
      scrollTimeoutRef.current = setTimeout(
        () => {
          isScrollingRef.current = false;
          setIsUserInteracting(false);
          checkScrollability(); // Force check after scroll completes
        },
        instantSnap ? 100 : 600
      ); // Slightly longer timeout for mobile
    },
    [
      getActualItemWidth,
      instantSnap,
      onPrev,
      currentScrollPosition,
      childrenCount,
      onNext,
      containerPaddingValue,
      checkScrollability,
    ]
  );

  // Sync active dot index
  useEffect(() => {
    if (typeof activeIndex === "number") {
      setActiveDotIndex(activeIndex);
      const container = scrollRef.current;
      if (!container) return;

      const actualItemWidth = getActualItemWidth();
      const targetScrollLeft = actualItemWidth * activeIndex;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: instantSnap ? "auto" : "smooth",
      });

      setCurrentScrollPosition(targetScrollLeft);
      checkScrollability();
    }
  }, [activeIndex, getActualItemWidth, instantSnap, checkScrollability]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || isUserInteracting || isScrollingRef.current) return;

    autoPlayRef.current = setInterval(() => {
      if (canScrollRight) {
        scroll("right");
      } else if (canScrollLeft) {
        // Reset to beginning when reaching the end
        if (scrollRef.current && !isScrollingRef.current) {
          isScrollingRef.current = true;
          scrollRef.current.scrollTo({
            left: 0,
            behavior: instantSnap ? "auto" : "smooth",
          });
          setTimeout(
            () => {
              isScrollingRef.current = false;
              checkScrollability();
            },
            instantSnap ? 100 : 600
          );
        }
      }
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [
    autoPlay,
    canScrollRight,
    canScrollLeft,
    scroll,
    autoPlayInterval,
    isUserInteracting,
    checkScrollability,
    instantSnap,
  ]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scroll("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scroll("right");
      }
    },
    [scroll]
  );

  // Swipe gesture handlers with debouncing
  const swipeHandlers = useSwipeGesture(
    () => {
      if (!isScrollingRef.current) {
        scroll("right");
      }
    },
    () => {
      if (!isScrollingRef.current) {
        scroll("left");
      }
    },
    75 // Slightly higher threshold for mobile
  );

  // Scroll event handler
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const actualItemWidth = getActualItemWidth();
    const newScrollPosition = container.scrollLeft;

    // Calculate the active index based on scroll position
    const index = Math.round(newScrollPosition / actualItemWidth);

    debouncedSetActiveDot(index); // Update the active dot index
    setCurrentScrollPosition(newScrollPosition); // Update scroll position state

    // Check if you can scroll left/right to enable/disable buttons
    debouncedScrollCheck();
  }, [getActualItemWidth, debouncedSetActiveDot, debouncedScrollCheck]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initial check
    checkScrollability();

    // Event listeners
    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener(
      "resize",
      () => {
        // Debounce resize events and recalculate on orientation change
        setTimeout(checkScrollability, 100);
      },
      { passive: true }
    );

    // Handle orientation change on mobile
    const handleOrientationChange = () => {
      setTimeout(() => {
        checkScrollability();
      }, 200); // Wait for orientation change to complete
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollability);
      window.removeEventListener("orientationchange", handleOrientationChange);

      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [checkScrollability, handleScroll, activeDotIndex]);

  const handleDotClick = (index: number) => {
    setActiveDotIndex(index);

    const container = scrollRef.current;
    if (!container) return;

    const actualItemWidth = getActualItemWidth();
    const targetScrollLeft = actualItemWidth * index;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: instantSnap ? "auto" : "smooth",
    });

    setCurrentScrollPosition(targetScrollLeft);
    checkScrollability();
  };

  return (
    <div
      className={cn("w-full relative py-4", containerClassName)}
      role="region"
      aria-label="carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Navigation buttons */}
      {showNavigation && (
        <div
          className={cn(
            "hidden sm:flex gap-3 justify-end mb-5",
            fullWidthPerItem
              ? "px-10"
              : "px-[max(1.25rem,calc((100vw-1450px)/2))]",
            buttonsContainerClassName
          )}
          role="group"
          aria-label="Carousel navigation"
        >
          <Button
            variant={
              buttonVariant || canScrollLeft ? "basic" : "basicSecondary"
            }
            size="icon"
            className="p-5 rounded-full"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous items"
          >
            <ArrowLeft className="size-6" />
          </Button>
          <Button
            variant={
              buttonVariant || canScrollRight ? "basic" : "basicSecondary"
            }
            size="icon"
            className="p-5 rounded-full"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next items"
          >
            <ArrowRight className="size-6" />
          </Button>
        </div>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex p-2 overflow-x-auto scroll-smooth scrollbar-hide rounded-lg [webkit-overflow-scrolling:touch]",
          fullWidthPerItem
            ? "snap-x snap-mandatory"
            : "focus:outline-none focus:ring-2 focus:ring-primary/10",
          instantSnap ? "scroll-auto" : "scroll-smooth",
          "overflow-x-scroll", // Add momentum scrolling for ios
          carouselClassName
        )}
        style={{
          paddingLeft: fullWidthPerItem ? "0" : containerPadding,
          paddingRight: fullWidthPerItem ? "0" : containerPadding,
          gap: fullWidthPerItem ? "0px" : `${gap}px`,
        }}
        role="group"
        aria-label="Carousel items"
        tabIndex={-1}
        {...swipeHandlers}
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
        onTouchStart={() => setIsUserInteracting(true)}
        onTouchEnd={() => {
          // Delay resetting interaction to prevent conflicts
          setTimeout(() => setIsUserInteracting(false), 300);
        }}
      >
        {fullWidthPerItem
          ? React.Children.map(children, (child, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-start"
                style={{ minWidth: "100%" }}
              >
                {child}
              </div>
            ))
          : children}
      </div>

      <div className="flex justify-center gap-1 mt-4 sm:hidden">
        {Array.from({ length: childrenCount }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              activeDotIndex === index ? "bg-primary" : "bg-muted-foreground/20"
            )}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Screen reader instructions */}
      <div className="sr-only" aria-live="polite">
        Use arrow keys or swipe to navigate through carousel items.
        {autoPlay && "Carousel auto-advances. Hover to pause."}
      </div>
    </div>
  );
};

export default Carousel;
