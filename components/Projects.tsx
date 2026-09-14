import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-[72px]"
      aria-labelledby="work-heading"
    >
      <Reveal>
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 border-b border-line px-5 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-24">
          <div>
            <p className="editorial-label mb-4">03 — Selected work</p>
            <h2
              id="work-heading"
              className="display-name text-5xl sm:text-7xl"
            >
              Selected
              <br />
              Work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-dim">
            Three projects spanning full-stack APIs, an institute website, and
            a client-side calculator. Each layout is editorial, not a card grid.
          </p>
        </div>
      </Reveal>
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.05}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </section>
  );
}
