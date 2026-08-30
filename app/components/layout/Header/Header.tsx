"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const preferredTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          VMRS Travel
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            Services
          </Link>
          <Link href="/terms" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            Terms
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-lg text-foreground transition hover:bg-surface"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            href="/#cars"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover md:inline-flex"
          >
            View cars
          </Link>
        </div>
      </div>
    </header>
  );
}
