"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
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
      id="contact"
      className="scroll-mt-[72px] border-b border-line bg-[#060608] text-ink"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Massive Editorial Heading */}
        <div className="flex flex-col justify-between border-b border-line px-5 py-12 md:px-10 md:py-20 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-24">
          <div>
            <motion.p
              className="editorial-label mb-8 text-accent"
              {...fadeIn(0.05)}
            >
              07 — Contact
            </motion.p>
            <motion.h2
              id="contact-heading"
              className="display-name text-[15vw] leading-[0.84] sm:text-8xl lg:text-[7.5rem] text-ink"
              {...fadeIn(0.12)}
            >
              Let&apos;s
              <br />
              Build
              <br />
              Something.
            </motion.h2>
          </div>

          <motion.div
            className="mt-12 max-w-md pt-8 border-t border-line/60"
            {...fadeIn(0.22)}
          >
            <p className="text-sm leading-relaxed text-dim">
              Whether you have an engineering opportunity, a web project, or
              want to connect on full-stack architecture — feel free to reach out.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Identity Avatar (avatar-glow.jpg), Details & CTAs */}
        <div className="flex flex-col justify-between gap-10 px-5 py-12 md:px-10 md:py-20 lg:col-span-5 lg:py-24">
          <div>
            {/* Identity Card featuring avatar-glow.jpg */}
            <motion.div
              className="flex items-center gap-5 border-b border-line/60 pb-8"
              {...fadeIn(0.18)}
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line bg-mist">
                <Image
                  src={site.avatarImage}
                  alt="Portrait of Ashutosh Anand"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-2xl font-medium tracking-tight uppercase text-ink">
                  {site.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-accent font-medium">
                  {site.role}
                </p>
                <p className="mt-1 text-xs text-mute">
                  Open for opportunities &amp; collaborative builds
                </p>
              </div>
            </motion.div>

            {/* Direct Contact Details */}
            <motion.address
              className="mt-8 not-italic text-sm leading-8 text-dim"
              {...fadeIn(0.26)}
            >
              <div className="flex items-center gap-2">
                <span className="editorial-label text-accent">Location:</span>
                <span className="text-ink">{site.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="editorial-label text-accent">Phone:</span>
                <a
                  href={site.phoneHref}
                  className="text-ink transition-colors hover:text-accent font-mono text-xs"
                >
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="editorial-label text-accent">Email:</span>
                <a
                  href={site.emailHref}
                  className="text-ink transition-colors hover:text-accent break-all"
                >
                  {site.email}
                </a>
              </div>
            </motion.address>
          </div>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-6 border-t border-line"
            {...fadeIn(0.34)}
          >
            <ButtonLink href={site.emailHref} variant="solid">
              Email Me &rarr;
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              Call Me
            </ButtonLink>
            <ButtonLink href={site.github} variant="outline" external>
              GitHub
            </ButtonLink>
            <ButtonLink href={site.linkedin} variant="outline" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href="/cv" variant="outline">
              View CV
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
