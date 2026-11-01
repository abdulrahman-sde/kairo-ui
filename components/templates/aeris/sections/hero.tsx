"use client";

import React from "react";
import Link from "next/link";
import { HeroNavigation, StickyNavigation } from "@/components/templates/aeris/ui/navigation";
import { HeroIllustration } from "@/components/templates/aeris/ui/hero-illustration";
import { ChevronRightIcon } from "@/components/templates/aeris/ui/icons";

export function Hero() {
  return (
    <>
      <div className="p-2 pb-0! md:p-4">
          <div
            className="bg-muted relative overflow-hidden rounded-xl bg-[url(/aeris/background.2tnr0c16bt-fz.webp)] bg-cover bg-center shadow-xl md:rounded-2xl lg:rounded-3xl"
          >
            <HeroNavigation />

            <header className="relative z-1 py-16 text-center max-sm:px-8 max-sm:text-left">
              <a
                className="font-display text-primary/70 border-primary/20 hover:bg-foreground/5 mb-4 inline-flex h-6 items-center gap-0.5 rounded-full border px-2.5 text-xs font-[550] tracking-[0.01em]"
                href="#synthesis"
              >
                <span>Next-Gen AI Research Workspace</span>
                <ChevronRightIcon className="-mr-1.5 size-3 opacity-50" />
              </a>

              <h1
                data-slot="heading"
                className="font-display! text-primary font-medium tracking-display md:text-display-md text-4xl leading-10 md:leading-12 xl:text-5xl xl:leading-13 mb-8"
              >
                <span className="inline-block align-top text-balance">
                  The autonomous workspace <br />
                  for deep research & inquiry.
                </span>
              </h1>

              <Link
                href="#download"
                data-slot="button"
                className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:scale-95 bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 md:h-10 md:px-3 md:text-base rounded-full! px-3! max-sm:h-11! max-sm:px-4! max-sm:text-base! [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  data-icon="inline-start"
                >
                  <path
                    d="M19 20C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20H19ZM12 2C12.5523 2 13 2.44772 13 3V15.0859L15.543 12.543C15.9335 12.1525 16.5665 12.1525 16.957 12.543C17.3475 12.9335 17.3475 13.5665 16.957 13.957L13.7676 17.1465C12.7913 18.1226 11.2087 18.1227 10.2324 17.1465L7.04297 13.957C6.65247 13.5665 6.65246 12.9335 7.04297 12.543C7.43348 12.1525 8.06651 12.1525 8.45703 12.543L11 15.0859V3C11 2.44772 11.4477 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-[450] max-sm:hidden">
                  Launch Aeris for macOS
                </span>
                <span className="sm:hidden">Download Aeris</span>
              </Link>
            </header>

            <div className="relative z-1 -mb-32 w-full">
              <HeroIllustration />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] md:rounded-2xl lg:rounded-3xl"
            />
          </div>
        </div>

        {/* Sticky Navigation (Reveals on Scroll) */}
        <StickyNavigation transparentOnHero={false} revealOnScroll={true} />
        <div className="-mb-24" />
    </>
  );
}
