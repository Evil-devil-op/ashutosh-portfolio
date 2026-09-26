import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/ButtonLink";

export function Projects() {
  const featured = projects[0]; // Fitness & Diet Tracker
  const otherProjects = projects.slice(1); // Anand Education Center, BMI Calculator

  return (
    <section
      id="work"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="work-heading"
    >
      {/* 1. Refined Editorial Section Header */}
      <div className="mx-auto max-w-[1600px] border-b border-line px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              01 / SELECTED WORK
            </p>
            <h2
              id="work-heading"
              className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.9]"
            >
              Selected Work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            A selection of full-stack projects focused on practical products,
            thoughtful interfaces, and real functionality.
          </p>
        </div>
      </div>

      {/* 2. Dominant Editorial Featured Project (01 / Fitness & Diet Tracker) */}
      <article className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-16">
          {/* Featured Project Header */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.22em] uppercase text-accent">
                01 / FEATURED PROJECT
              </span>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-[-0.03em] leading-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[0.95]">
              {featured.title}
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg lg:text-xl">
              A full-stack fitness and nutrition platform focused on workout
              tracking, nutrition management, analytics, and AI-assisted
              recommendations.
            </p>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "JWT",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-xs border border-line bg-mist/90 px-3 py-1 text-[11px] font-medium tracking-wide text-dim transition-colors hover:border-accent/60 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Structured Information Grid (Role, Focus, Key Functionality, CTA) */}
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:pt-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Role, Focus, CTA */}
            <div className="space-y-6 sm:space-y-7 lg:col-span-5">
              <div>
                <p className="mb-1.5 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
                  ROLE
                </p>
                <p className="text-base font-medium text-white sm:text-lg">
                  Full Stack Developer
                </p>
              </div>

              <div>
                <p className="mb-1.5 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
                  FOCUS
                </p>
                <p className="text-sm font-medium leading-relaxed text-dim sm:text-base">
                  Fitness Tracking &middot; Nutrition &middot; Analytics &middot; AI-assisted Recommendations
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <ButtonLink href={`/projects/${featured.slug}`} variant="solid">
                  View Project Details &rarr;
                </ButtonLink>
              </div>
            </div>

            {/* Right Column: Key Functionality */}
            <div className="lg:col-span-7">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-6">
                KEY FUNCTIONALITY
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                {[
                  "Workout CRUD",
                  "BMR / TDEE calculation",
                  "Nutrition tracking",
                  "Water intake tracking",
                  "AI-assisted diet recommendations",
                  "Indian-focused diet planning",
                  "Weekly/monthly analytics",
                  "Authentication",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-sm border border-line/60 bg-mist/60 px-4 py-3 text-sm text-dim transition-colors hover:border-line hover:text-white"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* 3. Secondary Projects: Compact Editorial Rows */}
      <div className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-6 md:px-10 lg:px-14 xl:px-16">
          <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
            MORE SELECTED WORK
          </p>
        </div>

        {otherProjects.map((project) => (
          <article
            key={project.slug}
            className="group border-t border-line transition-colors duration-300 hover:bg-mist/30"
          >
            <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-14 lg:py-12 xl:px-16">
              {/* Number & Category */}
              <div className="flex items-center gap-4 lg:col-span-3">
                <span className="font-mono text-xl font-bold text-accent sm:text-2xl">
                  {project.number}
                </span>
                <span className="editorial-label text-mute">
                  {project.slug === "anand-education-center"
                    ? "Educational web application"
                    : "Utility web application"}
                </span>
              </div>

              {/* Title, Description & Technologies */}
              <div className="lg:col-span-6">
                <h4 className="text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-accent sm:text-2xl lg:text-3xl">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {project.summary}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xs border border-line/80 bg-mist/60 px-2 py-0.5 text-[10px] font-medium text-mute"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="text-xs font-mono text-mute lg:col-span-1">
                {project.date ? project.date : "Client Utility"}
              </div>

              {/* Action Link */}
              <div className="flex items-center lg:col-span-2 lg:justify-end">
                <ButtonLink
                  href={`/projects/${project.slug}`}
                  variant="outline"
                  className="px-4 py-2 text-[10px]"
                >
                  View Project &rarr;
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
