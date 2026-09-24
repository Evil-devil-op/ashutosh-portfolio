import type { Metadata } from "next";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: `CV | ${site.name}`,
  description: `View and download ${site.name}'s general and specialized CVs.`,
};

const cvs = [
  {
    number: "01",
    title: "General CV",
    href: site.generalCvPath,
  },
  {
    number: "02",
    title: "Specialized CV",
    href: site.specializedCvPath,
  },
] as const;

export default function CvPage() {
  return (
    <article className="border-b border-line">
      <header className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <p className="editorial-label mb-4">CV</p>
        <h1 className="display-name text-5xl sm:text-7xl lg:text-8xl">CV</h1>
      </header>

      <section
        aria-label="Curriculum vitae"
        className="mx-auto grid max-w-[1600px] grid-cols-1 border-t border-line md:grid-cols-2"
      >
        {cvs.map((cv, index) => (
          <article
            key={cv.number}
            className={`px-5 py-14 md:px-10 ${
              index === 0
                ? "border-b border-line md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <p className="font-mono text-xs text-mute">{cv.number}</p>
            <h2 className="mt-8 text-4xl font-medium tracking-tight uppercase sm:text-5xl">
              {cv.title}
            </h2>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
              <ButtonLink href={cv.href} variant="outline" external>
                Open CV
              </ButtonLink>
              <ButtonLink href={cv.href} variant="outline" download>
                Download CV
              </ButtonLink>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
