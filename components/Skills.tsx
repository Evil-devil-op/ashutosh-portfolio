import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="skills-heading"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-[1600px] border-b border-line px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              03 / SKILLS
            </p>
            <h2
              id="skills-heading"
              className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.9]"
            >
              Technical Skills
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            A focused stack across frontend architecture, backend services, databases,
            and core engineering fundamentals.
          </p>
        </div>
      </div>

      {/* 4-Column Balanced Technical Architecture */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => {
          const isLastMobile = index === skillGroups.length - 1;
          const isRightTablet = index % 2 === 1;
          const isBottomTablet = index >= 2;
          const isLastDesktop = index === skillGroups.length - 1;

          return (
            <article
              key={group.number}
              className={`border-line px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 ${
                !isLastMobile ? "border-b" : ""
              } ${
                !isRightTablet ? "sm:border-r" : "sm:border-r-0"
              } ${
                !isBottomTablet ? "sm:border-b" : "sm:border-b-0"
              } ${
                !isLastDesktop ? "lg:border-r" : "lg:border-r-0"
              } lg:border-b-0`}
            >
              {/* Category Header */}
              <div className="mb-6 border-b border-line/60 pb-4">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  {group.number}
                </span>
                <h3 className="mt-2 text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
                  {group.title}
                </h3>
              </div>

              {/* Clean Editorial Rows */}
              <ul className="divide-y divide-line/40">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-sm font-medium tracking-wide text-white/90 transition-colors duration-200 hover:text-accent sm:text-[15px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
