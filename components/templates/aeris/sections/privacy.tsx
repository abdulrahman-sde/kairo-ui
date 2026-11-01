"use client";

import React from "react";
import Link from "next/link";
import { BYOKIllustration, TextScramble } from "@/components/templates/aeris/ui/animations";
import { ChevronRightIcon } from "@/components/templates/aeris/ui/icons";

export function Privacy() {
  return (
    <div className="mx-auto w-full border-b border-black/6" id="privacy">
          <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
            <div className="bg-neutral-50">
              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 text-center">
                <div className="mx-auto w-full">
                  <p className="mb-2 lg:mb-6">
                    <Link
                      className="text-brand-content decoration-brand/50 inline-flex items-center gap-0.5 text-sm font-medium decoration-dotted decoration-2 underline-offset-4 hover:underline md:text-base"
                      href="#privacy"
                    >
                      Privacy & Architecture
                      <ChevronRightIcon className="size-4" />
                    </Link>
                  </p>
                  <h2
                    data-slot="heading"
                    className="font-display! text-primary font-medium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12 mb-4"
                  >
                    <span className="inline-block align-top text-balance">
                      <TextScramble>Private</TextScramble> enough for confidential
                      research.
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-base xl:text-lg mx-auto max-w-(--breakpoint-sm)">
                    Aeris processes your research locally, enforces
                    zero-data-retention, and guarantees your proprietary discoveries
                    never train third-party models.
                  </p>
                </div>
              </div>

              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 snap-x snap-mandatory scroll-pr-6 scroll-pl-6 scrollbar-none overflow-x-auto scroll-smooth p-0! lg:overflow-visible">
                <div className="flex gap-6 pl-6 lg:grid lg:grid-cols-4 lg:px-6">
                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <img
                        alt="Local by default"
                        loading="eager"
                        className="object-cover absolute inset-0 size-full"
                        src="/aeris/1.3-b62prl6in98.png"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Local by default</span> Notes, literature embeddings,
                        and synthesis artifacts stay strictly on your device.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <img
                        alt="Encrypted by your password"
                        loading="eager"
                        className="object-cover absolute inset-0 size-full"
                        src="/aeris/2.3ukhkerkzdgq8.png"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Encrypted by your key</span> Everything is secured
                        at rest using AES-256 and Apple Secure Enclave encryption.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <img
                        alt="Sandboxed agent runtime"
                        loading="eager"
                        className="object-cover absolute inset-0 size-full"
                        src="/aeris/3.3tb2mnvz7y2i6.png"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Sandboxed runtime</span> Aeris isolates memory
                        and file access with kernel sandboxing to protect your
                        intellectual property.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 snap-start w-80 lg:w-auto">
                    <div className="pointer-events-none relative h-80 w-full overflow-hidden rounded-lg select-none md:h-64 lg:h-80 2xl:h-96 bg-background">
                      <BYOKIllustration />
                    </div>
                    <div className="px-4 py-5">
                      <p className="text-muted-foreground text-sm xl:text-base [&_span]:text-primary [&_span]:font-medium">
                        <span>Bring your own models</span> Connect local Ollama /
                        LM Studio models or route securely via your own Anthropic
                        and OpenAI enterprise keys.
                      </p>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="-ml-6 w-6 shrink-0 snap-end lg:hidden"
                  />
                </div>
              </div>

              <div className="border-x border-black/6 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36 pt-4 pb-16 xl:pb-24" />
            </div>
          </div>
        </div>
  );
}
