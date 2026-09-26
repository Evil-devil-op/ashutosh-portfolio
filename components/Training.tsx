import { training } from "@/data/training";
import { ButtonLink } from "@/components/ButtonLink";

export function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="training-heading"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-[1600px] border-b border-line px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              04 / TRAINING
            </p>
            <h2
              id="training-heading"
              className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.9]"
            >
              Technical Training
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            An intensive academic program focused on data structures, algorithmic
            problem-solving, and practical system logic in C++.
          </p>
        </div>
      </div>

      {/* Balanced 2-Column Editorial Structure */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-line lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
        {/* Left Column: Program Overview & Certificate (5/12) */}
        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:col-span-5 lg:p-14 xl:p-16">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-accent mb-3">
              PROGRAM OVERVIEW
            </p>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-[2rem] leading-tight">
              {training.title}
            </h3>

            {/* Institution & Duration Metadata */}
            <div className="mt-4 space-y-1 border-b border-line/60 pb-6">
              <p className="text-base font-medium text-white/90 sm:text-lg">
                {training.organization}
              </p>
              <p className="text-xs font-mono tracking-wider uppercase text-mute sm:text-sm">
                {training.duration} &middot; {training.context}
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-dim sm:text-base sm:leading-7">
              {training.description}
            </p>
          </div>

          {/* Certificate Action */}
          <div className="mt-8 pt-4 sm:mt-10">
            <ButtonLink href={training.certificatePath} variant="outline" external>
              View Official Certificate &rarr;
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Technical Breakdown (7/12) */}
        <div className="divide-y divide-line p-6 sm:p-8 md:p-12 lg:col-span-7 lg:p-14 xl:p-16">
          {/* Subsection 01: Core Curriculum */}
          <div className="pb-8 sm:pb-10">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              01 / CORE CURRICULUM
            </span>
            <h4 className="mt-2 text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
              Data Structures &amp; Algorithm Design
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-dim sm:text-base sm:leading-7">
              Intensive coursework and problem-solving in <span className="font-medium text-white">{training.language}</span>, covering foundational data structures and algorithm design principles to build strong programming and logic-building skills.
            </p>
          </div>

          {/* Subsection 02: Capstone Implementation */}
          <div className="pt-8 sm:pt-10">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              02 / CAPSTONE IMPLEMENTATION
            </span>
            <h4 className="mt-2 text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
              {training.project}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-dim sm:text-base sm:leading-7">
              Developed a practical application in <span className="font-medium text-white">{training.language}</span> using queue-based logic to model banking customer queues and transaction workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
