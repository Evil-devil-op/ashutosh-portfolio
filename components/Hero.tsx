"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import React from "react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  // Mouse interaction values for subtle cinematic parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 140 };
  const portraitX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const portraitY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const fade = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      className="relative overflow-hidden border-b border-line"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background ambient lighting */}
      <motion.div
        style={reduceMotion ? undefined : { x: glowX, y: glowY }}
        className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Typography, Status, Details, and CTAs */}
        <div className="flex flex-col justify-between border-b border-line px-5 py-12 md:px-10 md:py-16 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-20 xl:py-24">
          <div>
            {/* 1. Status Indicator Badge */}
            <motion.div className="mb-8 flex items-center gap-3" {...fade(0.05)}>
              <div className="inline-flex items-center gap-2.5 border border-line bg-mist/60 px-3 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-ink">
                  Open to Opportunities
                </span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-mute">
                  / {site.location}
                </span>
              </div>
            </motion.div>

            {/* 2. Main Name - Strongest Visual Element */}
            <motion.h1
              id="hero-heading"
              className="display-name text-[16vw] leading-[0.84] sm:text-[13vw] lg:text-[7.2vw] xl:text-[7.4rem] text-ink"
              {...fade(0.12)}
            >
              {site.firstName}
              <br />
              {site.lastName}
            </motion.h1>

            {/* 3. Role */}
            <motion.div className="mt-8 md:mt-10" {...fade(0.2)}>
              <p className="editorial-label mb-2 text-accent">Role</p>
              <p className="text-3xl font-medium tracking-tight uppercase text-ink sm:text-4xl md:text-5xl">
                {site.role}
              </p>
            </motion.div>

            {/* 4. Description */}
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
              {...fade(0.28)}
            >
              {site.tagline}
            </motion.p>
          </div>

          {/* 5. CTA Buttons - Simplified to 2 prominent buttons + secondary text link */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4 pt-6 lg:mt-12"
            {...fade(0.36)}
          >
            <ButtonLink href="/#work" variant="solid">
              View Projects &rarr;
            </ButtonLink>
            <ButtonLink href="/#contact" variant="outline">
              Contact Me &rarr;
            </ButtonLink>
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-xs font-medium tracking-[0.18em] uppercase text-dim transition-colors hover:text-accent focus-visible:outline-accent"
              aria-label="View Curriculum Vitae"
            >
              <span>View CV</span>
              <span className="text-sm leading-none" aria-hidden="true">&#8599;</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Large Cinematic Portrait (enlarged ~12-14%) */}
        <div className="relative flex flex-col justify-center overflow-hidden px-5 py-12 md:px-10 md:py-16 lg:col-span-5 lg:p-8 xl:p-10">
          <motion.div
            style={reduceMotion ? undefined : { x: portraitX, y: portraitY }}
            className="relative mx-auto w-full max-w-[560px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Ambient gold glow behind portrait */}
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-accent/15 blur-2xl transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Editorial Framed Container */}
            <div className="group relative overflow-hidden rounded-sm border border-line bg-mist shadow-2xl transition-all duration-500 hover:border-accent/40">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/5] lg:aspect-[4/5]">
                <Image
                  src={site.heroImage}
                  alt="Professional portrait of Ashutosh Anand"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  className="object-cover object-[center_16%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {/* Subtle gradient overlay at bottom edge for integration */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper/80 via-paper/20 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Editorial bottom caption strip */}
              <div className="flex items-center justify-between border-t border-line bg-mist/95 px-4 py-3 backdrop-blur-sm">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink">
                    Ashutosh Anand
                  </p>
                  <p className="text-[9px] tracking-[0.16em] uppercase text-mute">
                    Full Stack Developer
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[9px] tracking-wider text-mute">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 6. Social Links and Secondary Bar */}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 border-t border-line px-5 py-6 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <motion.p
          className="text-[11px] tracking-[0.2em] uppercase text-mute"
          {...fade(0.44)}
        >
          Frontend / Backend / Database Architecture
        </motion.p>
        <motion.div className="flex flex-wrap gap-8" {...fade(0.48)}>
          <a
            href={site.github}
            className="text-[11px] tracking-[0.22em] uppercase text-dim transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="text-[11px] tracking-[0.22em] uppercase text-dim transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.emailHref}
            className="text-[11px] tracking-[0.22em] uppercase text-dim transition-colors hover:text-accent"
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
