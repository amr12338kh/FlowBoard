import { useEffect, useState } from "react";

export const useCarouselCardDetection = (totalCards: number) => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const carousel = document.querySelector('[data-carousel="testimonials"]');
    if (!carousel) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScrollEnd = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.clientWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);

      if (newIndex !== currentCard && newIndex >= 0 && newIndex < totalCards) {
        setCurrentCard(newIndex);
      }
    };

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        handleScrollEnd();
      }, 150); // Wait for scroll to finish
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentCard, totalCards]);

  return currentCard;
};
