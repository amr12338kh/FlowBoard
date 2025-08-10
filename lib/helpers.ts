export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// Convert HEX to RGBA
export const hexToRGBA = (hex: string, opacity: number, lighten = 20) => {
  // Check if we're in a browser environment
  if (typeof window === "undefined" || typeof document === "undefined") {
    // Return a default color or the original hex if it's not a css variable
    if (hex.startsWith("var(")) {
      return "#000000"; // Fallback color
    }
    // If it's already a hex color process it normally
  } else {
    if (hex.startsWith("var(")) {
      const computedValue = getComputedStyle(document.documentElement)
        .getPropertyValue(hex.slice(4, -1)) // Remove 'var(' and ')'
        .trim();
      hex = computedValue || hex;
    }
  }

  let sanitizedHex = hex.replace("#", "");
  if (sanitizedHex.length === 3) {
    sanitizedHex = sanitizedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const bigint = parseInt(sanitizedHex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Lighten the color by increasing RGB values
  r = Math.min(255, r + lighten);
  g = Math.min(255, g + lighten);
  b = Math.min(255, b + lighten);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const darkenHexColor = (hex: string, amount = 20) => {
  // Check if we're in a browser environment
  if (typeof window === "undefined" || typeof document === "undefined") {
    // Return a default color or the original hex if it's not a css variable
    if (hex.startsWith("var(")) {
      return "#000000"; // Fallback color
    }
    // If it's already a hex color process it normally
  } else {
    if (hex.startsWith("var(")) {
      const computedValue = getComputedStyle(document.documentElement)
        .getPropertyValue(hex.slice(4, -1)) // Remove 'var(' and ')'
        .trim();
      hex = computedValue || hex;
    }
  }

  let sanitizedHex = hex.replace("#", "");
  if (sanitizedHex.length === 3) {
    sanitizedHex = sanitizedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const bigint = parseInt(sanitizedHex, 16);
  if (isNaN(bigint)) {
    console.warn(`Invalid hex color: ${hex}`);
    return "#000000"; // Fallback
  }

  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Subtract to darken, clamp at 0
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
