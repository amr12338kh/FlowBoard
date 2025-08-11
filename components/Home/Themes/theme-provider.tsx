"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="sky"
      themes={["sky", "teal"]}
      enableSystem={false}
      disableTransitionOnChange={false}
      {...props}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
