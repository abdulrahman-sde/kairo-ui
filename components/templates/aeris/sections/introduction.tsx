import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/templates/aeris/ui/icons";

export function Introduction() {
  return (
        <div className="mx-auto w-full border-b border-black/6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 gap-16 pt-24! md:pt-36! lg:flex!">
              <div className="mb-8 w-64 shrink-0">
                <Link
                  className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                  href="#synthesis"
                >
                  Introducing Aeris
                  <ChevronRightIcon className="size-4" />
                </Link>
              </div>
              <div className="space-y-8">
                <p
                  data-slot="heading"
                  className="font-display! text-muted-foreground text-base font-medium sm:text-lg xl:text-xl block"
                >
                  <span className="font-semimedium text-primary">
                    Today’s research workflows are broken.
                  </span>{" "}
                  Traditional AI assistants hallucinate citations, lose context
                  across dense multi-page documents, and fail when tasks require
                  deep primary-source verification and multi-step synthesis.
                </p>
                <p
                  data-slot="heading"
                  className="font-display! text-muted-foreground text-base font-medium sm:text-lg xl:text-xl block"
                >
                  <span className="font-semimedium text-primary">
                    Aeris is an autonomous workspace built for deep inquiry.
                  </span>{" "}
                  It orchestrates specialized research agents in parallel across
                  scientific repositories, financial filings, and internal
                  databases—delivering verified conclusions with transparent
                  provenance.
                </p>
              </div>
            </div>
          </div>
        </div>

  );
}
