"use client";

import * as motion from "motion/react-client";
import { Call, ClipboardCheck, CalendarCheck } from "reicon-react";

const steps = [
  {
    num: "01",
    icon: Call,
    title: "Patient calls or messages",
    desc: "Every inbound call, text, or WhatsApp message is handled instantly by AI — no hold times, no missed opportunities.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "AI qualifies & enrolls",
    desc: "Our AI asks the right questions, verifies insurance, collects forms, and completes enrollment in under 90 seconds.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "They show up. You get paid.",
    desc: "Automated reminders, payment collection, and follow-ups run on autopilot. Patients arrive prepared, practices get reimbursed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-10 mx-auto max-w-[1400px]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-center text-[12px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          From lead to appointment
        </motion.p>
        <motion.h2
          className="text-center text-[36px] md:text-[52px] font-medium tracking-[-0.03em] leading-[1.08] text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          The patient journey,
          <br />
          <span className="text-muted-foreground/40">fully autonomous.</span>
        </motion.h2>
      </div>

      <div className="relative mt-16 md:mt-20 max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border/60" />

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              className="relative flex items-start gap-6 md:gap-8 pb-14 md:pb-16 last:pb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.15,
              }}
            >
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-background border border-border/60">
                <Icon size={20} weight="Outline" className="text-accent" />
              </div>

              <div className="flex-1 min-w-0 pt-1.5">
                <span
                  className="text-[48px] md:text-[64px] font-bold leading-none select-none pointer-events-none absolute right-0 top-0 opacity-[0.025]"
                  aria-hidden
                >
                  {step.num}
                </span>
                <span className="text-[12px] font-semibold tracking-widest uppercase text-accent/70">
                  Step {step.num}
                </span>
                <h3 className="mt-1.5 text-[20px] md:text-[22px] font-medium tracking-[-0.02em] leading-[1.2] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.7] text-muted-foreground max-w-[480px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}

        <motion.p
          className="mt-6 text-center text-[13px] text-muted-foreground/60 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          No voicemail. No phone tag. No paperwork.
        </motion.p>
      </div>
    </section>
  );
}
