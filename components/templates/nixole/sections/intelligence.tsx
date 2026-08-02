"use client";

import * as motion from "motion/react-client";
import { Call, Message, ShieldCheck, Wallet, Bell, ChartBar } from "reicon-react";

const capabilities = [
  { label: "Inbound Call Handling", icon: Call },
  { label: "WhatsApp & SMS", icon: Message },
  { label: "Insurance Verification", icon: ShieldCheck },
  { label: "Payment Collection", icon: Wallet },
  { label: "Follow-up Automation", icon: Bell },
  { label: "Analytics Dashboard", icon: ChartBar },
];

export default function Intelligence() {
  return (
    <section className="py-24 md:py-28 mesh-intelligence overflow-hidden">
      <div className="px-6 md:px-10 mx-auto max-w-[1400px]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-center text-[12px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Built for healthcare
          </motion.p>
          <motion.h2
            className="text-center text-[36px] md:text-[52px] font-medium tracking-[-0.03em] leading-[1.08] text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Intelligence that
            <br />
            <span className="text-foreground/25">never sleeps.</span>
          </motion.h2>
        </div>

        <motion.div
          className="mt-12 md:mt-16 max-w-4xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.span
                key={cap.label}
                className={`inline-flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2 rounded-full text-[13px] md:text-[14px] font-medium border ${
                  i === 0
                    ? "text-accent border-accent/25"
                    : "text-foreground border-black/6"
                }`}
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(164deg, rgba(55,60,90,0.20) 14.62%, rgba(55,60,90,0.06) 85.2%)"
                      : "linear-gradient(164deg, rgba(0,0,0,0.02) 14.62%, rgba(0,0,0,0.04) 85.2%)",
                  backdropFilter: "blur(80px)",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.08 + i * 0.06,
                }}
              >
                <Icon size={16} weight="Outline" />
                {cap.label}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.p
          className="mt-8 text-center text-[13px] md:text-[14px] leading-relaxed max-w-xl mx-auto text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          Every capability runs 24/7 in parallel — handling calls, messages, payments, and follow-ups
          across every patient touchpoint without a single human in the loop.
        </motion.p>
      </div>
    </section>
  );
}
