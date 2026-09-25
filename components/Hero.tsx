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
  const portraitX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const portraitY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig);

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
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      className="relative overflow-hidden border-b border-line bg-paper"
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

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[55%_45%]">
        {/* Left Column (55% on Desktop): Typography, Description, and CTAs */}
        <div className="flex flex-col justify-center px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-8 md:px-12 lg:border-r lg:border-line lg:px-14 lg:py-20 xl:px-20 xl:py-24">
          <div className="lg:-translate-y-7 xl:-translate-y-8">
            {/* Small Label */}
            <motion.div className="mb-5 sm:mb-6" {...fade(0.05)}>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-accent sm:text-xs">
                FULL STACK WEB DEVELOPER
              </p>
            </motion.div>

            {/* Large Heading: ASHUTOSH ANAND */}
            <motion.h1
              id="hero-heading"
              className="text-5xl font-black uppercase tracking-[-0.04em] leading-[0.88] text-white sm:text-6xl md:text-7xl lg:text-[5vw] xl:text-[6.4rem] 2xl:text-[7.2rem]"
              {...fade(0.12)}
            >
              <span className="block">ASHUTOSH</span>
              <span className="block">ANAND</span>
            </motion.h1>

            {/* Description (2 lines max on desktop, ~70% white) */}
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:mt-7 sm:text-lg lg:text-[1.125rem]"
              {...fade(0.2)}
            >
              I build scalable full-stack web applications with React, Next.js, Node.js and MongoDB.
            </motion.p>

            {/* CTA Buttons & CV link underneath */}
            <motion.div className="mt-8 sm:mt-10" {...fade(0.28)}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <ButtonLink href="/#work" variant="solid">
                  View Projects &rarr;
                </ButtonLink>
                <ButtonLink href="/#contact" variant="outline">
                  Contact Me &rarr;
                </ButtonLink>
              </div>
              <div className="mt-4 sm:mt-5">
                <Link
                  href="/cv"
                  className="group inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.2em] uppercase text-white/60 transition-colors duration-200 hover:text-accent focus-visible:outline-accent"
                  aria-label="View Curriculum Vitae"
                >
                  <span>View CV</span>
                  <span
                    className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    &#8599;
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (45% on Desktop): Portrait (headshot-hero.jpg) */}
        <div className="relative flex flex-col items-center justify-center px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 md:px-12 lg:px-10 lg:py-20 xl:px-14">
          <motion.div
            style={reduceMotion ? undefined : { x: portraitX, y: portraitY }}
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[535px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.0,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Subtle amber radial glow behind image */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18),transparent_70%)] blur-2xl"
              aria-hidden="true"
            />

            {/* Framed Image Container: 24px border radius, subtle border, no text, no excessive shadow */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-mist shadow-lg shadow-black/40 transition-colors duration-500 hover:border-accent/40">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={site.heroImage}
                  alt="Ashutosh Anand — Full Stack Web Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 480px, 540px"
                  className="object-cover object-[center_top] transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
