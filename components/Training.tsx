import { training } from "@/data/training";
import { Reveal } from "@/components/Reveal";

export function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="training-heading"
    >
      <Reveal>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-line px-5 py-16 md:px-10 md:py-24 lg:col-span-6 lg:border-b-0 lg:border-r">
            <p className="editorial-label mb-8">04 — Training</p>
            <p className="display-name text-[18vw] leading-[0.8] sm:text-8xl lg:text-[9rem]">
              50
              <span className="ml-3 text-4xl tracking-[0.12em] sm:text-5xl">
                Days
              </span>
            </p>
            <h2
              id="training-heading"
              className="mt-10 max-w-md text-3xl font-medium leading-tight tracking-tight uppercase sm:text-4xl"
            >
              Data Structures
              <br />
              &amp; Algorithms
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-10 px-5 py-16 md:px-10 md:py-24 lg:col-span-6">
            <dl className="space-y-8">
              <div className="border-b border-line pb-6">
                <dt className="editorial-label mb-2">Institution</dt>
                <dd className="text-xl font-medium tracking-tight uppercase">
                  Lovely Professional
                  <br />
                  University
                </dd>
              </div>
              <div className="border-b border-line pb-6">
                <dt className="editorial-label mb-2">Context</dt>
                <dd className="text-sm text-dim">{training.context}</dd>
              </div>
              <div className="grid grid-cols-2 gap-8 border-b border-line pb-6">
                <div>
                  <dt className="editorial-label mb-2">Language</dt>
                  <dd className="text-2xl font-medium tracking-tight">
                    {training.language}
                  </dd>
                </div>
                <div>
                  <dt className="editorial-label mb-2">Project</dt>
                  <dd className="text-lg font-medium leading-snug tracking-tight uppercase">
                    Bank Queue
                    <br />
                    Management System
                  </dd>
                </div>
              </div>
            </dl>
            <p className="max-w-lg text-sm leading-7 text-dim">
              {training.description}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
