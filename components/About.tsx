"use client";

import Image from "next/image";
import { site } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Heading & Primary Portrait (portrait-editorial.jpg) */}
        <div className="flex flex-col justify-between border-b border-line px-5 py-8 sm:py-12 md:px-10 md:py-16 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-20">
          <div>
            <p className="editorial-label mb-4 sm:mb-6 text-accent">
              01 — About
            </p>
            <h2
              id="about-heading"
              className="display-name text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.84] text-ink"
            >
              About
              <br />
              Me
            </h2>
          </div>

          {/* Primary Portrait Card */}
          <div className="group relative mt-8 sm:mt-10 overflow-hidden border border-line bg-mist shadow-lg transition-all duration-500 hover:border-accent/40">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={site.aboutImage}
                alt="Portrait of Ashutosh Anand"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-paper/80 to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-center justify-between border-t border-line bg-mist/95 px-4 py-3">
              <span className="editorial-label text-ink">Ashutosh Anand</span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-mute">
                {site.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Content, Fact Grid, and Secondary Workspace Visual (workspace-dev.jpg) */}
        <div className="flex flex-col justify-between gap-6 sm:gap-10 px-5 pt-8 pb-6 sm:py-12 md:px-10 md:py-16 lg:col-span-7 lg:py-20">
          <div>
            {/* Bio Paragraph */}
            <p className="max-w-2xl text-lg leading-relaxed text-dim md:text-xl md:leading-9">
              I am a Full Stack Web Developer currently pursuing B.Tech in
              Computer Science and Engineering at Lovely Professional
              University, Phagwara. I build web applications across frontend,
              backend, and database layers — from React.js interfaces to
              Node.js and Express.js REST APIs, with MongoDB, MySQL, and
              PostgreSQL for persistence.
            </p>

            {/* Structured Facts Matrix */}
            <dl className="mt-8 sm:mt-10 grid max-w-2xl grid-cols-1 gap-5 border-t border-line pt-6 sm:pt-8 sm:grid-cols-2">
              <div className="border-b border-line pb-4 sm:border-b-0">
                <dt className="editorial-label mb-2 text-accent">Location</dt>
                <dd className="text-sm font-medium text-ink">{site.location}</dd>
              </div>
              <div className="border-b border-line pb-4 sm:border-b-0">
                <dt className="editorial-label mb-2 text-accent">Focus</dt>
                <dd className="text-sm font-medium text-ink">Full-stack web applications</dd>
              </div>
              <div className="border-b border-line pb-4 sm:border-b-0">
                <dt className="editorial-label mb-2 text-accent">Education</dt>
                <dd className="text-sm text-dim">
                  B.Tech, Computer Science and Engineering
                  <br />
                  <span className="font-mono text-xs text-mute">2024–2028</span>
                </dd>
              </div>
              <div>
                <dt className="editorial-label mb-2 text-accent">Status</dt>
                <dd className="text-sm text-dim">
                  Currently pursuing B.Tech in Computer Science and Engineering.
                </dd>
              </div>
            </dl>
          </div>

          {/* Secondary Visual: Workspace (workspace-dev.jpg) */}
          <div className="mt-6 border-t border-line pt-6 sm:pt-8">
            <div className="group relative overflow-hidden border border-line bg-mist transition-all duration-500 hover:border-accent/40">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={site.workspaceImage}
                  alt="Ashutosh Anand working at a developer workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-between gap-1 border-t border-line bg-mist/95 px-4 py-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="editorial-label text-ink">
                    Developer Workspace / In The Zone
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.16em] uppercase text-mute">
                  Engineering Setup &amp; Code Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
