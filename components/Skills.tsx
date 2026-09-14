import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-label mb-4">02 — Capabilities</p>
              <h2
                id="skills-heading"
                className="display-name text-5xl sm:text-7xl"
              >
                Technical
                <br />
                Skills
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-dim">
              A working stack across frontend, backend, databases, programming
              languages, and development tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <article
              key={group.number}
              className={`border-b border-line px-5 py-10 md:px-8 lg:border-b-0 ${
                index < skillGroups.length - 1 ? "lg:border-r" : ""
              }`}
            >
              <p className="font-mono text-xs text-mute">{group.number}</p>
              <h3 className="mt-6 text-xl font-medium tracking-tight uppercase">
                {group.title}
              </h3>
              <ul className="mt-8 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line pb-3 text-sm text-dim last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
