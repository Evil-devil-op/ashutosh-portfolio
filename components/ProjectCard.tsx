import type { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ButtonLink";
import {
  BmiCalculatorMockup,
  EducationCenterMockup,
  FitnessDietMockup,
} from "@/components/ProjectVisuals";

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "fitness-diet-tracker") return <FitnessDietMockup />;
  if (slug === "anand-education-center") return <EducationCenterMockup />;
  return <BmiCalculatorMockup />;
}

export function ProjectCard({ project }: { project: Project }) {
  const visual = (
    <div className="relative h-full min-h-[280px] overflow-hidden transition-opacity duration-500 group-hover:opacity-95">
      <ProjectVisual slug={project.slug} />
      <p className="mock-caption px-5 py-3">
        Editorial UI visualization — not a product screenshot
      </p>
    </div>
  );

  const meta = (
    <div className="flex h-full flex-col justify-between gap-10">
      <div>
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs text-mute">{project.number}</p>
          <p className="editorial-label">
            {project.category}
            {project.date ? ` / ${project.date}` : ""}
          </p>
        </div>
        <h3 className="display-name text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
          {project.displayTitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-8 max-w-md text-sm leading-7 text-dim">
          {project.summary}
        </p>
      </div>
      <div>
        <p className="editorial-label mb-4">Technology</p>
        <ul className="mb-8 flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="text-xs tracking-[0.12em] uppercase text-dim">
              {tech}
            </li>
          ))}
        </ul>
        <p className="editorial-label mb-4">Key features</p>
        <ul className="mb-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {project.features.slice(0, 6).map((feature) => (
            <li key={feature} className="text-sm text-dim">
              {feature}
            </li>
          ))}
        </ul>
        <ButtonLink href={`/projects/${project.slug}`} variant="ghost">
          View Project →
        </ButtonLink>
      </div>
    </div>
  );

  if (project.layout === "compact") {
    return (
      <article className="group border-b border-line">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-line px-5 py-12 md:px-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-16">
            {meta}
          </div>
          <div className="lg:col-span-7">{visual}</div>
        </div>
      </article>
    );
  }

  if (project.layout === "visual-left") {
    return (
      <article className="group border-b border-line bg-mist">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-line lg:col-span-6 lg:border-b-0 lg:border-r">
            {visual}
          </div>
          <div className="px-5 py-12 md:px-10 lg:col-span-6 lg:py-16">
            {meta}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group border-b border-line">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-line px-5 py-12 md:px-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-16">
          {meta}
        </div>
        <div className="lg:col-span-7">{visual}</div>
      </div>
    </article>
  );
}
