import { skillGroups } from "@/data/skills";
import React from "react";

function TechIcon({ name }: { name: string }) {
  // Minimal, crisp SVG icons matching the dark editorial aesthetic
  switch (name) {
    case "HTML5":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5v14l9 3 9-3V5l-9-3zm6 5.5l-.8 9.3-5.2 1.7-5.2-1.7-.8-9.3h12z" />
        </svg>
      );
    case "CSS3":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 3h16l-2 15-6 3-6-3L4 3z" />
          <path d="M7 8h10M7.5 12h8.5M8 16l4 1 4-1" />
        </svg>
      );
    case "JavaScript":
      return (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] bg-accent/20 font-mono text-[10px] font-bold text-accent">
          JS
        </span>
      );
    case "React.js":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.7-1-2.5-1.8-1.3-1.3-2.8-2.8-6.7-2.8zm-7 7c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.7-1-2.5-1.8-1.3-1.3-2.8-2.8-6.7-2.8z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "Express.js":
      return (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border border-accent/40 font-mono text-[9px] font-bold text-ink">
          EX
        </span>
      );
    case "REST APIs":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="9" cy="7" r="1.5" fill="currentColor" />
          <circle cx="15" cy="12" r="1.5" fill="currentColor" />
          <circle cx="7" cy="17" r="1.5" fill="currentColor" />
        </svg>
      );
    case "MongoDB":
    case "MongoDB Compass":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2C12 2 7 8 7 13c0 3 2 6 5 8 3-2 5-5 5-8 0-5-5-11-5-11z" />
          <path d="M12 2v19" />
        </svg>
      );
    case "MySQL":
    case "PostgreSQL":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "C":
      return (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border border-line font-mono text-[10px] font-bold text-accent">
          C
        </span>
      );
    case "C++":
      return (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border border-line font-mono text-[9px] font-bold text-accent">
          C++
        </span>
      );
    case "Python":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-3.3 0-4 1.4-4 2.8v2.2h8v1H6c-2 0-3.5 1.5-3.5 3.5S4 15 6 15h1.5v-2c0-1.4 1.1-2.5 2.5-2.5h6c1.1 0 2-.9 2-2V4.8C18 3.4 15.3 2 12 2zm-1.5 2a.8.8 0 110 1.6.8.8 0 010-1.6zM18 9h-1.5v2c0 1.4-1.1 2.5-2.5 2.5h-6c-1.1 0-2 .9-2 2v3.7c0 1.4 2.7 2.8 6 2.8 3.3 0 4-1.4 4-2.8v-2.2H8v-1h10c2 0 3.5-1.5 3.5-3.5S20 9 18 9zm-4.5 11.4a.8.8 0 110-1.6.8.8 0 010 1.6z" />
        </svg>
      );
    case "Java":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 19c4 2 8 2 12 0M5 15c4.5 1.5 9.5 1.5 14 0M10 2c1 2-1 3 0 5M14 3c1 1.5-1 2.5 0 4" />
        </svg>
      );
    case "Git":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="9" r="2.5" />
          <path d="M6 8.5v7M8 7.5l7.5 3" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "VS Code":
      return (
        <svg className="h-[18px] w-[18px] shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 18l5 3V3l-5 3L8 12l8 6z" />
          <path d="M8 12L3 8l3-2 10 6-10 6-3-2 5-4z" />
        </svg>
      );
    case "npm":
      return (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2px] bg-accent/20 font-mono text-[9px] font-bold text-accent">
          npm
        </span>
      );
    default:
      return <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />;
  }
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 pt-6 pb-6 sm:py-12 md:px-10 md:py-20">
        <div className="mb-6 sm:mb-12 md:mb-14 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-label mb-4 text-accent">
              02 — Capabilities
            </p>
            <h2
              id="skills-heading"
              className="display-name text-5xl sm:text-7xl text-ink"
            >
              Technical
              <br />
              Skills
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-dim sm:text-base">
            A cohesive stack across frontend, backend, databases, core languages,
            and engineering tools built through practical full-stack projects.
          </p>
        </div>
      </div>

      {/* 5-Column Technical Matrix — ALWAYS rendered and visible on page load */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => (
          <article
            key={group.number}
            className={`border-b border-line px-4 py-6 sm:px-5 sm:py-8 md:px-8 lg:border-b-0 ${
              index < skillGroups.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs font-semibold text-mute">{group.number}</span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-accent font-semibold">
                {group.items.length} Techs
              </span>
            </div>

            <h3 className="mt-5 text-xl font-medium tracking-tight uppercase text-ink">
              {group.title}
            </h3>

            {/* Interactive Technology Tiles Matrix */}
            <div className="mt-6 flex flex-col gap-2.5 sm:gap-3">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="group flex items-center justify-between rounded-sm border border-line/80 bg-mist/70 px-3.5 py-2.5 sm:px-4 sm:py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-mist hover:shadow-[0_2px_14px_rgba(245,158,11,0.09)]"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <TechIcon name={item} />
                    <span className="text-[13px] sm:text-sm font-medium tracking-wide text-ink transition-colors group-hover:text-accent truncate">
                      {item}
                    </span>
                  </div>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-line/80 transition-colors group-hover:bg-accent ml-2" />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
