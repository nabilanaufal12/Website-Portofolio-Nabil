"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Reset any stale dark mode preference so the new studio theme displays immediately
    if (typeof window !== "undefined") {
      const current = localStorage.getItem("theme");
      if (current === "dark" && !localStorage.getItem("theme_studio_v2")) {
        localStorage.setItem("theme", "light");
        localStorage.setItem("theme_studio_v2", "true");
        document.documentElement.classList.remove("dark");
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
