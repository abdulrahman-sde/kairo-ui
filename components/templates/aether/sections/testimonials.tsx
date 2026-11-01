"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Migrating our compute workloads to Aether cut our P99 edge latency by 68%. The serverless microVM model gives us instant cold starts without any complex cluster management, saving our team dozens of hours every sprint.",
    name: "Méschac Irung",
    role: "VP of Infrastructure",
    company: "Northwind",
    avatar: "/aether/avatar-47919550.png",
    stat: "68% lower P99 edge latency",
  },
  {
    quote:
      "Multi-region failover used to be a quarterly project. With Aether it is a single config line, and we have not dropped a connection since the switch.",
    name: "Glodie Lukose",
    role: "Head of Platform",
    company: "Brightline",
    avatar: "/aether/avatar-99137927.png",
    stat: "25% increase in total user engagement",
  },
  {
    quote:
      "Continuous profiling with almost no overhead means we find regressions before customers do. Our on-call load dropped noticeably within the first month.",
    name: "Bernard Ngandu",
    role: "Staff SRE",
    company: "Halcyon",
    avatar: "/aether/avatar-31113941.png",
    stat: "30% higher retention rate for subscribers",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const navButton =
    "bg-card text-foreground ring-foreground/10 hover:bg-muted/50 absolute right-0 z-20 inline-flex size-8 cursor-pointer items-center justify-center rounded-md shadow-sm shadow-black/15 ring-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id="customers" aria-labelledby="customers-heading" className="scroll-mt-14 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mx-auto mb-16 max-w-2xl space-y-6 text-center">
          <span className="text-primary font-mono text-sm uppercase">Testimonials</span>
          <h2
            id="customers-heading"
            className="text-foreground mt-8 text-balance text-4xl font-medium md:text-5xl"
          >
            Trusted by engineering leaders at global scale
          </h2>
          <p className="text-muted-foreground text-balance text-lg">
            See how mission-critical applications rely on Aether for instant cold starts, edge failover, and zero-maintenance infrastructure.
          </p>
        </div>

        <div className="relative mx-auto max-w-xl" role="group" aria-roledescription="carousel" aria-label="Customer testimonials">
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className={`${navButton} top-1/2 -translate-y-9 max-sm:hidden sm:-right-12`}>
            <ChevronUp className="size-4" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className={`${navButton} top-1/2 translate-y-1 max-sm:hidden sm:-right-12`}>
            <ChevronDown className="size-4" aria-hidden="true" />
          </button>

          <div aria-hidden="true" className="ring-foreground/10 bg-card absolute inset-0 origin-bottom translate-y-6 scale-90 rounded-2xl border border-transparent shadow-md ring-1" />
          <div aria-hidden="true" className="ring-foreground/10 bg-card absolute inset-0 origin-bottom translate-y-3 scale-95 rounded-2xl border border-transparent shadow-md ring-1" />

          <figure
            key={index}
            aria-live="polite"
            className="bg-card text-card-foreground ring-foreground/10 animate-in fade-in-0 slide-in-from-bottom-2 relative z-10 space-y-8 rounded-2xl p-10 shadow-lg shadow-black/10 ring-1 duration-300"
          >
            <p className="text-foreground text-sm font-semibold uppercase tracking-wide">{current.company}</p>
            <blockquote className="text-lg before:mr-1 before:font-serif before:content-['\201C'] after:ml-1 after:font-serif after:content-['\201D']">
              {current.quote}
            </blockquote>
            <figcaption className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
              <div className="ring-foreground/10 aspect-square size-12 overflow-hidden rounded-xl border border-transparent shadow-md shadow-black/15 ring-1">
                <img src={current.avatar} alt={`Portrait of ${current.name}`} width={48} height={48} loading="lazy" />
              </div>
              <div className="space-y-0.5 text-base *:block">
                <span className="text-foreground font-medium">{current.name}</span>
                <span className="text-muted-foreground text-sm">{current.role}</span>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-20 max-w-xl space-y-4 px-6 text-center">
          <div aria-hidden="true" className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-primary stroke-primary size-5" />
            ))}
          </div>
          <p className="text-muted-foreground text-balance text-sm font-medium">{current.stat}</p>
          <div className="flex justify-center gap-2 pt-2" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                className={`size-2 cursor-pointer rounded-full transition-colors ${i === index ? "bg-foreground" : "bg-foreground/20 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
        </div>

        <a
          href="#customers"
          className="text-primary mx-auto mt-10 flex w-fit items-center gap-1 text-sm hover:underline"
        >
          Read more customer stories
          <ChevronRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
