"use client";

import { education } from "@/data/education";
import { motion, useReducedMotion } from "framer-motion";

export function Education() {
  const reduceMotion = useReducedMotion();

  const fadeIn = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0, margin: "100px 0px" },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="education"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-20">
        <motion.p className="editorial-label mb-4 text-accent" {...fadeIn(0.05)}>
          05 — Education
        </motion.p>
        <motion.h2
          id="education-heading"
          className="display-name mb-14 text-5xl sm:text-7xl text-ink"
          {...fadeIn(0.1)}
        >
          Academic
          <br />
          Background
        </motion.h2>

        <ol className="relative border-l border-line pl-6 sm:pl-8 space-y-10">
          {education.map((item, index) => (
            <motion.li
              key={item.years}
              className="relative group"
              {...fadeIn(0.15 + index * 0.08)}
            >
              {/* Timeline Dot Marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line bg-paper group-hover:border-accent transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="grid grid-cols-1 gap-4 rounded-sm border border-line/60 bg-mist/40 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-mist sm:p-6 sm:grid-cols-12 sm:items-center sm:gap-6">
                <div className="sm:col-span-3">
                  <p className="font-mono text-xs font-semibold text-accent">
                    {item.years}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-mute">
                    Academic Cycle
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <p className="text-xl font-medium tracking-tight uppercase text-ink sm:text-2xl">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-normal text-dim">
                    {item.institution}
                  </p>
                  <p className="text-xs text-mute">{item.location}</p>
                </div>

                <div className="sm:col-span-3 sm:text-right">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 font-mono text-xs font-medium text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item.detail}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
