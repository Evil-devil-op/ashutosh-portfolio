import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="about-heading"
    >
      <Reveal>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-line px-5 py-16 md:px-10 md:py-24 lg:col-span-5 lg:border-b-0 lg:border-r">
            <p className="editorial-label mb-8">01 — About</p>
            <h2
              id="about-heading"
              className="display-name text-[18vw] leading-[0.82] sm:text-8xl lg:text-[7.5rem]"
            >
              About
              <br />
              Me
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-10 px-5 py-16 md:px-10 md:py-24 lg:col-span-7">
            <p className="max-w-2xl text-lg leading-8 text-dim md:text-xl md:leading-9">
              I am a Full Stack Web Developer currently pursuing B.Tech in
              Computer Science and Engineering at Lovely Professional
              University, Phagwara. I build web applications across frontend,
              backend, and database layers — from React.js interfaces to
              Node.js and Express.js REST APIs, with MongoDB, MySQL, and
              PostgreSQL for persistence.
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <dt className="editorial-label mb-2">Location</dt>
                <dd className="text-sm">{site.location}</dd>
              </div>
              <div>
                <dt className="editorial-label mb-2">Focus</dt>
                <dd className="text-sm">Full-stack web applications</dd>
              </div>
              <div>
                <dt className="editorial-label mb-2">Education</dt>
                <dd className="text-sm">
                  B.Tech, Computer Science and Engineering
                  <br />
                  2024–2028
                </dd>
              </div>
              <div>
                <dt className="editorial-label mb-2">Status</dt>
                <dd className="text-sm">
                  Currently pursuing B.Tech in Computer Science and
                  Engineering.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
