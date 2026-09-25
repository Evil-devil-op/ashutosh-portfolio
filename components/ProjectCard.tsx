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

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const isVisualLeft = index % 2 === 1;

  const visual = (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-mist/30 transition-all duration-500">
      <div className="p-2 transition-transform duration-500 ease-out group-hover:scale-[1.015] sm:p-4">
        <ProjectVisual slug={project.slug} />
      </div>
      <div className="flex items-center justify-between border-t border-line/60 bg-mist/60 px-5 py-3">
        <span className="mock-caption text-[10px] text-mute">
          Editorial UI Architecture &bull; {project.category}
        </span>
        <span className="font-mono text-[10px] text-accent font-medium">
          {project.slug}
        </span>
      </div>
    </div>
  );

  const meta = (
    <div className="flex h-full flex-col justify-between gap-10">
      <div>
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <span className="font-mono text-xs font-semibold text-accent">
            {project.number}
          </span>
          <span className="editorial-label text-mute">
            {project.category}
            {project.date ? ` / ${project.date}` : ""}
          </span>
        </div>

        <h3 className="display-name text-4xl leading-[0.9] text-ink sm:text-5xl lg:text-6xl">
          {project.displayTitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-dim sm:text-base">
          {project.summary}
        </p>
      </div>

      <div>
        {/* Technologies List */}
        <p className="editorial-label mb-3 text-accent">Technologies</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-xs border border-line bg-mist/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <p className="editorial-label mb-3 text-accent">Key Architectural Features</p>
        <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {project.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-dim"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <ButtonLink href={`/projects/${project.slug}`} variant="solid">
            View Project Details &rarr;
          </ButtonLink>
          {project.githubUrl && (
            <ButtonLink href={project.githubUrl} variant="outline" external>
              GitHub Repo
            </ButtonLink>
          )}
          {project.liveUrl && (
            <ButtonLink href={project.liveUrl} variant="outline" external>
              Live Demo
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <article className="group border-b border-line transition-colors duration-300 hover:bg-mist/20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {isVisualLeft ? (
          <>
            <div className="border-b border-line lg:col-span-6 lg:border-b-0 lg:border-r">
              {visual}
            </div>
            <div className="px-5 py-12 md:px-10 lg:col-span-6 lg:py-16">
              {meta}
            </div>
          </>
        ) : (
          <>
            <div className="border-b border-line px-5 py-12 md:px-10 lg:col-span-6 lg:border-b-0 lg:border-r lg:py-16">
              {meta}
            </div>
            <div className="lg:col-span-6">{visual}</div>
          </>
        )}
      </div>
    </article>
  );
}
