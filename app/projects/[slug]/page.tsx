import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { ButtonLink } from "@/components/ButtonLink";
import {
  BmiCalculatorMockup,
  EducationCenterMockup,
  FitnessDietMockup,
} from "@/components/ProjectVisuals";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} | Ashutosh Anand`,
    description: project.summary,
  };
}

function Visual({ slug }: { slug: string }) {
  if (slug === "fitness-diet-tracker") return <FitnessDietMockup />;
  if (slug === "anand-education-center") return <EducationCenterMockup />;
  return <BmiCalculatorMockup />;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="border-b border-line">
      <header className="mx-auto max-w-[1600px] border-b border-line px-5 py-16 md:px-10 md:py-24">
        <p className="editorial-label mb-6">
          Project {project.number}
          {project.date ? ` / ${project.date}` : ""}
        </p>
        <h1 className="display-name text-5xl sm:text-7xl lg:text-8xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-dim">
          {project.overview}
        </p>
      </header>

      {project.slug === "fitness-diet-tracker" ? (
        <section aria-label="Project screenshots" className="border-b border-line bg-paper">
          <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-16">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="editorial-label text-accent">Application Screenshots</h2>
              <span className="font-mono text-xs text-mute">03 VIEWS</span>
            </div>

            {/* 1. Full Nutrition + AI Diet Tracker screenshot */}
            <div className="mb-10 overflow-hidden rounded-[20px] border border-white/10 bg-mist shadow-xl">
              <div className="border-b border-line/80 bg-paper/95 px-5 py-3">
                <p className="text-xs font-mono text-mute">
                  01 &bull; Nutrition Calculator + AI Diet Tracker (Full View)
                </p>
              </div>
              <div className="flex justify-center bg-[#070b14] p-4 sm:p-8">
                <div className="mx-auto w-full max-w-[620px]">
                  <Image
                    src="/images/projects/fitness-diet-tracker-nutrition-final.png"
                    alt="Fitness and Diet Tracker nutrition and AI diet dashboard"
                    width={755}
                    height={1945}
                    priority
                    className="block h-auto w-full select-none"
                  />
                </div>
              </div>
            </div>

            {/* 2 & 3. Dashboard and Workout Tracker screenshots */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-[16px] border border-white/10 bg-mist shadow-lg">
                <div className="border-b border-line/80 bg-paper/95 px-4 py-2.5">
                  <p className="text-xs font-mono text-mute">02 &bull; Fitness Dashboard</p>
                </div>
                <div className="bg-[#070b14]">
                  <Image
                    src="/images/projects/fitness-diet-tracker-dashboard-clean.png"
                    alt="Fitness and Diet Tracker fitness dashboard"
                    width={1901}
                    height={968}
                    className="block h-auto w-full select-none"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[16px] border border-white/10 bg-mist shadow-lg">
                <div className="border-b border-line/80 bg-paper/95 px-4 py-2.5">
                  <p className="text-xs font-mono text-mute">03 &bull; Workout Tracker</p>
                </div>
                <div className="bg-[#070b14]">
                  <Image
                    src="/images/projects/fitness-diet-tracker-workouts-clean.png"
                    alt="Fitness and Diet Tracker workout tracker"
                    width={1920}
                    height={968}
                    className="block h-auto w-full select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section aria-label="Project visualization" className="border-b border-line">
          <div className="mx-auto max-w-[1600px]">
            <Visual slug={project.slug} />
            <p className="mock-caption border-t border-line px-5 py-4 md:px-10">
              Editorial UI visualization — not a product screenshot
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-line px-5 py-16 md:px-10 lg:col-span-7 lg:border-b-0 lg:border-r">
          <h2 className="editorial-label mb-8">Features</h2>
          <ul className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="border-b border-line py-4 text-sm text-dim"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-16 md:px-10 lg:col-span-5">
          <h2 className="editorial-label mb-8">Technology</h2>
          <ul className="space-y-0">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border-b border-line py-4 text-sm uppercase tracking-[0.12em]"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            {project.githubUrl ? (
              <ButtonLink href={project.githubUrl} external>
                GitHub
              </ButtonLink>
            ) : null}
            {project.liveUrl ? (
              <ButtonLink href={project.liveUrl} variant="outline" external>
                Live demo
              </ButtonLink>
            ) : null}
            <ButtonLink href="/#work" variant="outline">
              Back to Work
            </ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
