"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-state={mobileMenuOpen ? "active" : "inactive"} data-scrolled={scrolled ? "true" : undefined}>
      <header role="banner" data-state="inactive" className="has-data-[state=open]:h-screen has-data-[state=open]:backdrop-blur has-data-[state=open]:bg-background/50 fixed inset-x-0 top-0 z-50">
        <div className="border-border-illustration absolute inset-x-0 top-0 z-50 h-14 border-b ring-1 ring-transparent transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-200 in-data-scrolled:ring-border-illustration in-data-scrolled:border-transparent in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur lg:has-data-[state=open]:h-[calc(var(--nav-viewport-height,0px)+3.4rem)] lg:has-data-[state=open]:border-b lg:has-data-[state=open]:border-transparent lg:has-data-[state=open]:bg-card/75 lg:has-data-[state=open]:shadow-lg lg:has-data-[state=open]:shadow-black/10 lg:has-data-[state=open]:ring-foreground/5 lg:has-data-[state=open]:backdrop-blur max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur max-lg:h-14 max-lg:overflow-hidden max-lg:border-b">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative flex flex-wrap items-center justify-between lg:py-3">
              <div aria-hidden="true" className="in-has-data-[state=open]:block bg-size-[4px_1px] absolute inset-x-0 bottom-0 hidden h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-repeat-x opacity-20" />
              <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                <Link aria-label="Aether home" className="flex items-center gap-2.5 font-medium text-foreground tracking-tight" href="/">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-600/30">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold tracking-tight">Aether</span>
                </Link>
                <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex text-sm text-muted-foreground">
                  <a className="hover:text-foreground transition-colors" href="#features">Platform</a>
                  <a className="hover:text-foreground transition-colors" href="#edge">Edge Mesh</a>
                  <a className="hover:text-foreground transition-colors" href="#benchmarks">Telemetry</a>
                  <a className="hover:text-foreground transition-colors" href="#docs">Docs</a>
                </nav>
                <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" onClick={() => setMobileMenuOpen((prev) => !prev)} className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 transition-opacity duration-200">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 transition-opacity duration-200">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <nav id="mobile-menu" aria-label="Mobile" className="flex w-full flex-col gap-4 text-base text-muted-foreground lg:hidden">
                  <a className="hover:text-foreground transition-colors" href="#features" onClick={() => setMobileMenuOpen(false)}>Platform</a>
                  <a className="hover:text-foreground transition-colors" href="#edge" onClick={() => setMobileMenuOpen(false)}>Edge Mesh</a>
                  <a className="hover:text-foreground transition-colors" href="#benchmarks" onClick={() => setMobileMenuOpen(false)}>Telemetry</a>
                  <a className="hover:text-foreground transition-colors" href="#docs" onClick={() => setMobileMenuOpen(false)}>Docs</a>
                </nav>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm shadow-black/15 border border-transparent bg-card ring ring-foreground/10 text-foreground duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-8 rounded-md px-3 text-xs" href="#">Sign In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
