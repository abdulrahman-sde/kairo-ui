import {
  ArrowDottedRotateAnticlockwise,
  Box,
  Headphones,
  Ruler,
  ShieldCheck,
  TruckFast,
} from "reicon-react";

const reasons = [
  {
    icon: TruckFast,
    title: "Free tracked delivery",
    body: "Every order ships free with live tracking — at your door in 2–4 days.",
  },
  {
    icon: ArrowDottedRotateAnticlockwise,
    title: "Easy 14-day returns",
    body: "Swap sizes or send it back within two weeks, no questions asked.",
  },
  {
    icon: ShieldCheck,
    title: "Verified quality",
    body: "Every unit is hand-checked for fit, fabric, and stitching before dispatch.",
  },
  {
    icon: Box,
    title: "Careful packaging",
    body: "Plastic-free, recyclable packaging that keeps every order pristine.",
  },
  {
    icon: Headphones,
    title: "Real human support",
    body: "Message us any day, 10am–8pm. We reply in minutes, not tickets.",
  },
  {
    icon: Ruler,
    title: "30-day size promise",
    body: "Ordered the wrong fit? Swap any size within a month, free of charge.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="mx-auto max-w-7xl scroll-mt-24 space-y-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mb-6">
        <h2 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-medium tracking-tight text-foreground">
          Why choose us
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Bought once, worn always.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col gap-2 rounded-xl border border-border p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <reason.icon size={16} weight="Filled" />
              </span>
              <h3 className="text-sm font-medium tracking-tight text-foreground">
                {reason.title}
              </h3>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              {reason.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}