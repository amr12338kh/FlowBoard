import { useEffect, useState } from "react";

export const useThemeAwareColor = (
  cssVariableName: string,
  manipulationFn?: (color: string) => string
) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const updateColor = () => {
      const computedColor = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVariableName)
        .trim();

      if (computedColor) {
        const finalColor = manipulationFn
          ? manipulationFn(computedColor)
          : computedColor;
        setColor(finalColor);
      }
    };

    // Initial calculation
    updateColor();

    // Listen for theme changes
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, [cssVariableName, manipulationFn]);

  return color;
};
