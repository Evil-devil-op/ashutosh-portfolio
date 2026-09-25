"use client";

import { training } from "@/data/training";
import { ButtonLink } from "@/components/ButtonLink";
import { motion, useReducedMotion } from "framer-motion";

export function Training() {
  const reduceMotion = useReducedMotion();

  const fadeIn = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 24 },
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
      id="training"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="training-heading"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Headline and Overview */}
        <div className="flex flex-col justify-between border-b border-line px-5 py-12 md:px-10 md:py-16 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-20">
          <div>
            <motion.p className="editorial-label mb-6 text-accent" {...fadeIn(0.05)}>
              04 — Training
            </motion.p>
            <motion.div {...fadeIn(0.1)}>
              <p className="display-name text-7xl sm:text-8xl lg:text-[7.5rem] leading-[0.8] text-ink">
                50
                <span className="ml-3 text-3xl font-light tracking-[0.14em] text-accent sm:text-4xl">
                  Days
                </span>
              </p>
              <h2
                id="training-heading"
                className="mt-8 text-2xl font-medium tracking-tight uppercase text-ink sm:text-3xl"
              >
                {training.title}
              </h2>
            </motion.div>

            <motion.p
              className="mt-6 max-w-md text-sm leading-relaxed text-dim"
              {...fadeIn(0.2)}
            >
              {training.description}
            </motion.p>
          </div>

          <motion.div className="mt-10 pt-6" {...fadeIn(0.3)}>
            <ButtonLink href={training.certificatePath} variant="outline" external>
              View Training Certificate &rarr;
            </ButtonLink>
          </motion.div>
        </div>

        {/* Right Column: Polished Editorial Timeline */}
        <div className="px-5 py-12 md:px-10 md:py-16 lg:col-span-7 lg:py-20">
          <div className="relative border-l border-line pl-6 sm:pl-8 space-y-12">
            {/* Timeline Item 1: Institution & Context */}
            <motion.div className="relative" {...fadeIn(0.15)}>
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-accent bg-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="editorial-label text-accent">01 / Context &amp; Institution</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight uppercase text-ink">
                {training.organization}
              </h3>
              <p className="mt-1 text-sm text-dim">{training.context}</p>
            </motion.div>

            {/* Timeline Item 2: Core Stack & Focus */}
            <motion.div className="relative" {...fadeIn(0.25)}>
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line bg-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-line" />
              </span>
              <span className="editorial-label text-mute">02 / Technical Focus</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight uppercase text-ink">
                Algorithms &amp; Complexity Analysis
              </h3>
              <p className="mt-2 text-sm text-dim leading-relaxed">
                Intensive problem-solving in <span className="text-ink font-semibold">{training.language}</span>, covering linear and non-linear data structures, pointer mechanics, algorithmic optimization, and asymptotic time-space analysis.
              </p>
            </motion.div>

            {/* Timeline Item 3: Capstone Implementation */}
            <motion.div className="relative" {...fadeIn(0.35)}>
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-accent bg-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="editorial-label text-accent">03 / Capstone Project</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight uppercase text-ink">
                {training.project}
              </h3>
              <p className="mt-2 text-sm text-dim leading-relaxed">
                Applied queue-based data structures (FIFO queuing, dynamic prioritization, and event sequencing) to model real-world banking transaction pipelines.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xs border border-line bg-mist px-3 py-1 text-xs text-mute font-mono">
                <span>Stack: {training.language}</span>
                <span>&bull;</span>
                <span className="text-accent">Queue Data Structures</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
