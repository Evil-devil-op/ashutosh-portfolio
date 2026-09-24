"use client";

import { site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 1,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      className="relative border-b border-line"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-line px-5 py-16 md:px-10 md:py-24 lg:col-span-8 lg:border-b-0 lg:border-r lg:py-28">
          <motion.p
            className="editorial-label mb-8"
            {...fade(0.05)}
          >
            Portfolio / {site.location}
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="display-name text-[18vw] leading-[0.82] sm:text-[14vw] lg:text-[9.4vw] xl:text-[8.4rem]"
            {...fade(0.12)}
          >
            {site.firstName}
            <br />
            {site.lastName}
          </motion.h1>
        </div>

        <div className="flex flex-col justify-between gap-12 px-5 py-12 md:px-10 lg:col-span-4 lg:py-28">
          <motion.div {...fade(0.2)}>
            <p className="editorial-label mb-6">Role</p>
            <p className="text-4xl font-medium leading-[0.95] tracking-tight uppercase md:text-5xl">
              Full Stack
              <br />
              Web Developer
            </p>
          </motion.div>
          <motion.p
            className="max-w-sm text-sm leading-7 text-dim"
            {...fade(0.32)}
          >
            {site.tagline}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 border-t border-line px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <motion.div
          className="flex flex-wrap gap-3"
          {...fade(0.4)}
        >
          <ButtonLink href="/#work">View Work</ButtonLink>
          <ButtonLink href="/#contact" variant="outline">
            Contact Me
          </ButtonLink>
          <ButtonLink href="/cv" variant="outline">
            View CV
          </ButtonLink>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-8"
          {...fade(0.48)}
        >
          <a
            href={site.github}
            className="text-[11px] tracking-[0.22em] uppercase text-dim transition-colors hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="text-[11px] tracking-[0.22em] uppercase text-dim transition-colors hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
