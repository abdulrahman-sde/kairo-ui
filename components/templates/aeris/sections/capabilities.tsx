"use client";

import React from "react";
import Link from "next/link";
import {
  HighlightAnimatedText,
  MemoryIllustration,
  Icons3DGrid,
  RiveCard,
} from "@/components/templates/aeris/ui/animations";
import { BenchmarkCharts } from "@/components/templates/aeris/ui/benchmark-charts";
import { ChevronRightIcon } from "@/components/templates/aeris/ui/icons";

export function Capabilities() {
  return (
        <section id="synthesis" className="mx-auto w-full scroll-mt-16 border-b border-black/6">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="to-background bg-linear-to-b from-neutral-50">
              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 pb-6!">
                <div className="text-center">
                  <p className="mb-2 lg:mb-6">
                    <Link
                      className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                      href="#synthesis"
                    >
                      Unlimited synthesis
                      <ChevronRightIcon className="size-4" />
                    </Link>
                  </p>
                  <h2
                    data-slot="heading"
                    className="font-display! text-primary font-medium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12"
                  >
                    <span className="inline-block align-top text-balance">
                      Any scientific paper, dataset, or filing,
                      <br />
                      Aeris synthesizes with precision.
                    </span>
                  </h2>
                </div>
              </div>

              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 p-0!">
                <Icons3DGrid />
              </div>
            </div>

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 md:py-16 xl:px-66 py-24! md:px-24 lg:px-48">
              <p className="text-base xl:text-lg text-primary">
                Unlike shallow LLM summaries, Aeris executes deep multi-hop
                reasoning across thousands of primary sources, extracting
                verified data points, validating claims, and structuring
                publication-ready findings with full citation transparency.
              </p>
            </div>

            {/* 3 Animated Rive Use Case Cards */}
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 snap-x snap-mandatory scroll-pr-4 scroll-pl-4 scrollbar-none overflow-x-auto scroll-smooth p-0! pb-24! md:scroll-pr-6 md:scroll-pl-6 lg:overflow-visible">
              <div className="flex gap-4 pl-4 md:gap-6 md:pl-6 lg:grid lg:grid-cols-3 lg:px-6">
                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 h-72 lg:h-80 2xl:h-96">
                    <RiveCard
                      src="/aeris/usecases.riv"
                      artboard="usecase-1"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Cross-Analysis</span> Aeris reads, compares, and
                      reconciles findings across hundreds of research papers
                      simultaneously.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 h-72 lg:h-80 2xl:h-96">
                    <RiveCard
                      src="/aeris/usecases.riv"
                      artboard="usecase-2"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Evidence Synthesis</span> Aeris handles citation
                      mapping, claims extraction, and methodology comparisons
                      for you.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 h-72 lg:h-80 2xl:h-96">
                    <RiveCard
                      src="/aeris/usecases.riv"
                      artboard="usecase-3"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Local Datasets</span> Aeris indexes and queries
                      raw CSVs, PDFs, and notebooks directly on your computer.
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="-ml-4 w-4 shrink-0 snap-end md:-ml-6 md:w-6 lg:hidden"
                />
              </div>
            </div>

            <div className="border-b border-dashed border-black/6" />

            {/* SOTA Benchmark Charts */}
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 md:px-14 md:py-16 xl:px-66 pb-10" id="benchmarks">
              <div className="space-y-3">
                <h3
                  data-slot="heading"
                  className="font-display! text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10"
                >
                  The <HighlightAnimatedText>SOTA</HighlightAnimatedText>{" "}
                  research intelligence engine.
                </h3>
                <p className="text-muted-foreground text-base xl:text-lg">
                  Aeris ranked #1 on multi-hop scientific reasoning and citation
                  accuracy benchmarks, achieving 99.4% factual recall across
                  complex multidisciplinary corpora.{" "}
                  <a
                    className="text-brand-content decoration-brand/40 hover:decoration-brand inline-block font-medium underline decoration-dotted underline-offset-3"
                    href="#benchmarks"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 pt-0! max-md:px-0!">
              <BenchmarkCharts />
            </div>

            <div className="border-b border-dashed border-black/6" />

            {/* Memory Section */}
            <div className="bg-[linear-gradient(to_bottom,var(--color-background)_18%,var(--color-neutral-50)_100%)]">
              <div className="border-x border-black/6 px-6 py-12 sm:px-8 md:px-14 md:py-16 xl:px-66">
                <div className="space-y-3">
                  <h3
                    data-slot="heading"
                    className="font-display! text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10"
                  >
                    <span className="inline-block align-top text-balance">
                      <HighlightAnimatedText>Memory</HighlightAnimatedText> that
                      retains your research context.
                    </span>
                  </h3>
                  <p className="text-muted-foreground text-base xl:text-lg">
                    Aeris maps your project hypotheses, annotated literature,
                    and synthesis history into persistent local knowledge graphs.
                    All memory stays strictly local on your device and is never
                    shared with third parties.{" "}
                    <Link
                      className="text-brand-content decoration-brand/40 hover:decoration-brand inline-block font-medium underline decoration-dotted underline-offset-3"
                      href="#privacy"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <MemoryIllustration />
            </div>
          </div>
        </section>

  );
}
