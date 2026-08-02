"use client";

import * as motion from "motion/react-client";

const testimonials = [
  {
    quote:
      "We went from missing 3 out of 10 calls to capturing every single lead. Nixole books more appointments in a night than our front desk did in a week.",
    name: "Dr. Sarah Chen",
    role: "Orthopedic Surgeon",
    practice: "Bay Area Sports Medicine",
    rating: 5,
  },
  {
    quote:
      "The enrollment automation alone saved us 40 hours a week. Our staff actually enjoy their jobs now — they're not stuck on the phone chasing paperwork.",
    name: "Michael Torres",
    role: "Practice Administrator",
    practice: "Premier Dental Group",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          className="star"
        >
          <path d="M12 2.5l2.95 6.2 6.8.78-5.05 4.66 1.4 6.66L12 17.6l-6.1 3.2 1.4-6.66L2.25 9.48l6.8-.78L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-10 mx-auto max-w-[1400px] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-center text-[12px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Trusted by providers
        </motion.p>
        <motion.h2
          className="text-center text-[36px] md:text-[52px] font-medium tracking-[-0.03em] leading-[1.08] text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          What practices are saying.
        </motion.h2>
      </div>

      <div className="mt-12 md:mt-16 max-w-3xl mx-auto space-y-12 md:space-y-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15 + i * 0.2,
            }}
          >
            <svg
              width="28"
              height="22"
              viewBox="0 0 36 28"
              fill="currentColor"
              className="text-muted-foreground/15 mb-3"
              aria-hidden
            >
              <path d="M13.5 0C9.75 0 6.375 1.3125 3.375 3.9375C0.75 6.1875 0 9 0 12.375C0 16.125 1.5 19.3125 4.5 21.9375C7.5 24.5625 10.875 27.375 14.625 28.125V22.5C12.75 21.75 10.875 20.4375 10.125 18.375C9.5625 16.6875 9.5625 15 9.5625 13.5C9.5625 13.125 9.5625 12.75 9.75 12.375H13.5V0ZM34.875 0C31.125 0 27.75 1.3125 24.75 3.9375C22.125 6.1875 21.375 9 21.375 12.375C21.375 16.125 22.875 19.3125 25.875 21.9375C28.875 24.5625 32.25 27.375 36 28.125V22.5C34.125 21.75 32.25 20.4375 31.5 18.375C30.9375 16.6875 30.9375 15 30.9375 13.5C30.9375 13.125 30.9375 12.75 31.125 12.375H34.875V0Z" />
            </svg>

            <blockquote className="text-[20px] md:text-[24px] font-medium leading-[1.3] tracking-[-0.01em] text-foreground max-w-[680px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4 mt-3">
              <StarRating count={t.rating} />
              <span className="w-px h-3 bg-border" />
              <div>
                <span className="text-[13px] font-semibold text-foreground">
                  {t.name}
                </span>
                <span className="text-[13px] text-muted-foreground mx-1.5">
                  ·
                </span>
                <span className="text-[13px] text-muted-foreground">
                  {t.role}, {t.practice}
                </span>
              </div>
            </div>

            {i < testimonials.length - 1 && (
              <div className="mt-12 md:mt-16 border-t border-border/40" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
