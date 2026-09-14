import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="education-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <p className="editorial-label mb-4">05 — Education</p>
          <h2
            id="education-heading"
            className="display-name mb-16 text-5xl sm:text-7xl"
          >
            Education
          </h2>
          <ol className="border-t border-line">
            {education.map((item) => (
              <li
                key={item.years}
                className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <p className="font-mono text-xs text-mute md:col-span-3">
                  {item.years}
                </p>
                <div className="md:col-span-5">
                  <p className="text-2xl font-medium tracking-tight uppercase md:text-3xl">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-dim">{item.institution}</p>
                  <p className="text-sm text-mute">{item.location}</p>
                </div>
                <p className="text-sm tracking-[0.12em] uppercase md:col-span-4 md:text-right">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
