import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="education-heading"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-[1600px] border-b border-line px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              05 / EDUCATION
            </p>
            <h2
              id="education-heading"
              className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.9]"
            >
              Academic Background
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Formal academic foundation in computer science and engineering,
            complemented by continuous technical study.
          </p>
        </div>
      </div>

      {/* Editorial Academic Records */}
      <div className="mx-auto max-w-[1600px] divide-y divide-line">
        {education.map((item) => (
          <article
            key={item.years}
            className="grid grid-cols-1 gap-4 px-5 py-8 transition-colors duration-150 hover:bg-white/[0.015] sm:px-6 sm:py-10 md:grid-cols-12 md:items-center md:gap-8 md:px-10 md:py-12 lg:px-14 xl:px-16"
          >
            {/* Period */}
            <div className="md:col-span-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-accent sm:text-sm">
                {item.years}
              </span>
            </div>

            {/* Degree, Institution & Location */}
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-dim sm:text-base">
                {item.institution}
              </p>
              <p className="mt-0.5 font-mono text-xs text-mute">
                {item.location}
              </p>
            </div>

            {/* Academic Result */}
            <div className="md:col-span-3 md:text-right">
              <span className="font-mono text-sm font-semibold tracking-wide text-white/90 sm:text-base">
                {item.detail.startsWith("CGPA") ? item.detail : `Score: ${item.detail}`}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
