"use client";

import React from "react";
import Link from "next/link";
import { TextScramble } from "@/components/templates/aeris/ui/animations";
import { ChevronRightIcon } from "@/components/templates/aeris/ui/icons";

export function Vault() {
  return (
        <section className="mx-auto w-full border-b border-black/6" id="vault">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36">
              <p className="mb-2 lg:mb-6">
                <Link
                  className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                  href="#vault"
                >
                  Private Knowledge Vault
                  <ChevronRightIcon className="size-4" />
                </Link>
              </p>
              <h2
                data-slot="heading"
                className="font-display! text-primary font-medium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12 mb-4"
              >
                Private vault that <br className="md:hidden" />
                <TextScramble>works with AI</TextScramble>.
              </h2>
              <p className="text-muted-foreground text-base xl:text-lg">
                Proprietary research shouldn’t leak to public models.{" "}
                <br className="hidden sm:block" /> Aeris isolates internal
                patents, confidential trial notes, and raw lab data with
                end-to-end local encryption.
              </p>
            </div>

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 snap-x snap-mandatory scroll-pr-4 scroll-pl-4 scrollbar-none overflow-x-auto scroll-smooth p-0! pb-24! md:scroll-pr-6 md:scroll-pl-6 lg:overflow-visible">
              <div className="flex gap-4 pl-4 md:gap-6 md:pl-6 lg:grid lg:grid-cols-3 lg:px-6">
                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 lg:h-80 2xl:h-96">
                    <img
                      alt="Data stays invisible to cloud LLMs"
                      loading="eager"
                      className="object-cover absolute inset-0 size-full"
                      src="/aeris/1.1d6n3khmb26p_.webp"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Data stays invisible to cloud LLMs</span> Citations
                      and document vectors are queried locally through
                      zero-knowledge embedding layers.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 lg:h-80 2xl:h-96">
                    <img
                      alt="Human verification at the edge"
                      loading="eager"
                      className="object-cover absolute inset-0 size-full"
                      src="/aeris/2.23cqtpb5x3dng.webp"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Human verification at the edge</span> Critical
                      synthesis outputs and external queries always await your
                      explicit confirmation.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 snap-start w-80 lg:w-auto">
                  <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg bg-neutral-100 select-none md:h-64 lg:h-80 2xl:h-96">
                    <img
                      alt="Full provenance audit log"
                      loading="eager"
                      className="object-cover absolute inset-0 size-full"
                      src="/aeris/3.2t8whzu_s0tv6.webp"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                      <span>Full provenance audit log</span> Every retrieved
                      conclusion links back to the exact paragraph, table, and
                      data source.
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

            <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 flex flex-col gap-6 p-0! md:flex-row">
              <div className="flex grow flex-col px-6 py-8 sm:px-8 sm:py-10 xl:px-16 xl:py-12">
                <h3
                  data-slot="heading"
                  className="font-display! text-primary text-2xl leading-8 font-medium xl:text-3xl xl:leading-10 leading-8! sm:leading-9!"
                >
                  Aeris Vault
                  <br className="hidden sm:block" />{" "}
                  <span className="inline-block align-top text-balance">
                    <span className="text-muted-foreground/60">
                      The zero-knowledge research vault built for teams.
                    </span>
                  </span>
                </h3>
                <div className="min-h-32 py-4 md:grow">
                  <Link
                    data-slot="button"
                    className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] h-9 gap-1.5 px-2.5 md:h-10 md:px-3 md:text-base"
                    href="#vault"
                  >
                    Learn more
                  </Link>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="text-sm xl:text-base text-primary font-medium">
                      Hardware-backed E2E encryption
                    </p>
                    <p className="text-muted-foreground text-sm xl:text-base">
                      Your research library is fully encrypted on-device and
                      protected by Apple Silicon Secure Enclave.
                    </p>
                  </li>
                  <li>
                    <p className="text-sm xl:text-base text-primary font-medium">
                      Scoped permissions and source provenance
                    </p>
                    <p className="text-muted-foreground text-sm xl:text-base">
                      Grant synthesis agents access only to selected project
                      folders. Verify what was accessed and when.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative flex aspect-4/3 w-full items-center justify-center bg-mist-800 sm:max-lg:hidden md:aspect-square md:h-full lg:aspect-auto lg:h-auto lg:w-[42%] lg:shrink-0 lg:self-stretch xl:w-140">
                <img
                  alt="Password Manager"
                  loading="eager"
                  className="object-cover absolute inset-0 size-full"
                  src="/aeris/banner.1c099t9pt7-1c.webp"
                />
              </div>
            </div>
          </div>
        </section>

  );
}
