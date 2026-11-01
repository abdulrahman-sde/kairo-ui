"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useMedia } from "@/hooks/use-media";
import { useTheme } from "next-themes";
import { ChevronRight, Menu, Sun, X } from "reicon-react";
import { Moon } from "lucide-react";
import { REPO_URL } from "@/constants/site";

type MenuItem = { name: string; href: string };
const menuItems: MenuItem[] = [];

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="size-9" />;
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
};

const GithubButton = ({ className }: { className?: string }) => (
  <Button
    variant="ghost"
    size="icon"
    className={className}
    asChild
  >
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub repository"
    >
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    </a>
  </Button>
);

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const isLarge = useMedia("(min-width: 64rem)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 75);
  });

  return (
    <header>
      <nav className="fixed top-3 z-20 w-full">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className={cn(
              "relative flex items-center justify-between py-5 duration-300",
              isScrolled &&
                "border-border bg-background/85 border-b backdrop-blur-xl lg:border-transparent lg:bg-transparent lg:backdrop-blur-none",
            )}
          >
            {/* Left: logo (fades out on scroll, replaced by floating pill) */}
            <Link
              href="/"
              aria-label="home"
              className={cn(
                "flex items-center duration-200 max-lg:hidden",
                isScrolled && "opacity-0 blur-xs pointer-events-none",
              )}
            >
              <Logo />
            </Link>

            {/* Mobile logo */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center lg:hidden"
            >
              <Logo />
            </Link>

            {/* Center nav (fades out on scroll) */}
            <ul
              className={cn(
                "hidden items-center gap-1 lg:flex duration-200",
                isScrolled && "opacity-0 blur-xs pointer-events-none",
              )}
            >
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={item.href} className="text-sm">
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>

            {/* Right: icon links + CTA (fades out on scroll) */}
            <div
              className={cn(
                "hidden items-center gap-1 lg:flex duration-200",
                isScrolled && "opacity-0 blur-xs pointer-events-none",
              )}
            >
              <GithubButton />
              <ThemeToggle />

              <div className="bg-border -ms-1 me-2 h-5 w-px" />
              <Button size="sm" className="pr-1.5" asChild>
                <Link href="/templates">
                  Browse Templates <ChevronRight className="opacity-50" />
                </Link>
              </Button>
            </div>

            {/* Floating pill (appears on scroll, desktop only) */}
            {isLarge && (
              <motion.div
                animate={{
                  gap: isScrolled ? "1rem" : "0rem",
                }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
                className={cn(
                  "absolute inset-0 z-50 m-auto flex size-fit h-11 items-center rounded-[10px] transition-colors duration-500",
                  isScrolled
                    ? "bg-card ring-border shadow-foreground/6.5 shadow-lg ring-1 backdrop-blur"
                    : "bg-transparent pointer-events-none",
                )}
              >
                <Link
                  href="/"
                  aria-label="home"
                  className={cn("px-3.5", !isScrolled && "invisible")}
                >
                  <Logo />
                </Link>
                <AnimatePresence initial={false}>
                  {isScrolled && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -156,
                        scale: 0.8,
                        filter: "blur(4px)",
                        width: 0,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        width: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        x: -156,
                        scale: 0.8,
                        filter: "blur(4px)",
                        width: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.1,
                      }}
                      className="flex origin-left items-center overflow-hidden rounded-full gap-30"
                    >
                      <ul className="flex gap-1">
                        {menuItems.map((item) => (
                          <li key={item.name}>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={item.href} className="text-sm">
                                {item.name}
                              </Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 mx-2">
                        <GithubButton />
                        <ThemeToggle />
                        <Button size="sm" className="gap-1 pr-1" asChild>
                          <Link href="/templates">
                            Browse Templates{" "}
                            <ChevronRight className="opacity-50" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
            >
              {menuState ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuState && (
          <div className="px-3 lg:hidden">
            <div className="bg-background border-border shadow-foreground/6.5 mx-auto max-w-5xl rounded-2xl border p-2 shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuState(false)}
                  className="text-muted-foreground hover:text-foreground block rounded-lg px-3 py-2 text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-1 p-1">
                <GithubButton />
                <ThemeToggle />
                <div className="flex-1" />
                <Button size="sm" asChild>
                  <Link href="/templates" onClick={() => setMenuState(false)}>
                    Browse Templates
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
