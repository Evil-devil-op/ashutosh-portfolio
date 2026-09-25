"use client";

import { certifications } from "@/data/certifications";
import { ButtonLink } from "@/components/ButtonLink";
import { motion, useReducedMotion } from "framer-motion";

export function Certifications() {
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
      id="certifications"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="certs-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-20">
        <motion.p className="editorial-label mb-4 text-accent" {...fadeIn(0.05)}>
          06 — Certifications
        </motion.p>
        <motion.h2
          id="certs-heading"
          className="display-name mb-14 text-5xl sm:text-7xl text-ink"
          {...fadeIn(0.1)}
        >
          Professional
          <br />
          Credentials
        </motion.h2>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-t border-line md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.number}
            className={`group flex flex-col justify-between p-6 sm:p-10 md:p-12 transition-colors duration-300 hover:bg-mist/30 ${
              index === 0 ? "border-b border-line md:border-b-0 md:border-r" : ""
            }`}
            {...fadeIn(0.15 + index * 0.1)}
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs font-semibold text-accent">
                  {cert.number}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mist px-2.5 py-0.5 text-[10px] tracking-wider uppercase text-mute">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Verified Credential
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-medium tracking-tight uppercase text-ink sm:text-4xl">
                {cert.title}
              </h3>

              <div className="mt-8 flex items-baseline justify-between border-t border-line/60 pt-6">
                <div>
                  <p className="editorial-label mb-1 text-accent">Issuer</p>
                  <p className="text-base font-medium tracking-wide uppercase text-ink">
                    {cert.issuer}
                  </p>
                </div>
                <div className="text-right">
                  <p className="editorial-label mb-1">Issued Date</p>
                  <p className="font-mono text-xs text-mute">{cert.date}</p>
                </div>
              </div>
            </div>

            {cert.href ? (
              <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
                <ButtonLink href={cert.href} variant="solid" external>
                  Open Certificate &rarr;
                </ButtonLink>
                <ButtonLink href={cert.href} variant="outline" download>
                  Download PDF
                </ButtonLink>
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
