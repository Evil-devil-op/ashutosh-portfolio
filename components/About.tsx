import Image from "next/image";

function AboutMetadata() {
  return (
    <dl className="grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-3 sm:gap-6 sm:pt-8">
      <div>
        <dt className="mb-1.5 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
          LOCATION
        </dt>
        <dd className="text-sm font-medium text-white">
          Bidupur, Bihar
        </dd>
      </div>
      <div>
        <dt className="mb-1.5 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
          FOCUS
        </dt>
        <dd className="text-sm font-medium text-white">
          Full Stack Web Development
        </dd>
      </div>
      <div>
        <dt className="mb-1.5 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
          EDUCATION
        </dt>
        <dd className="text-sm font-medium text-white">
          B.Tech CSE
          <span className="mt-0.5 block text-xs font-normal text-dim">
            Lovely Professional University
            <span className="block font-mono text-[11px] text-mute">Phagwara, Punjab</span>
          </span>
        </dd>
      </div>
    </dl>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-center xl:gap-20">
          {/* Left Column: Heading, Bio, Metadata (Desktop) */}
          <div className="lg:col-span-7">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              02 / ABOUT
            </p>

            <h2
              id="about-heading"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1]"
            >
              Building useful products with code, curiosity, and attention to detail.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
              I am a Full Stack Web Developer based in Bidupur, Bihar, currently
              pursuing B.Tech in Computer Science and Engineering at Lovely
              Professional University, Phagwara.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-dim sm:text-base sm:leading-7">
              I build full-stack web applications with a focus on responsive
              interfaces, dependable backend APIs, and clean data architecture.
              My hands-on work spans React and Next.js on the frontend, Node.js
              and Express.js on the server, and MongoDB, MySQL, and PostgreSQL
              for data persistence.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-dim sm:text-base sm:leading-7">
              Rather than chasing unnecessary complexity, I enjoy turning
              practical ideas into well-crafted, functional products with clean
              code, intuitive workflows, and disciplined attention to performance.
            </p>

            {/* Desktop Metadata */}
            <div className="hidden mt-8 sm:mt-10 lg:block">
              <AboutMetadata />
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Mobile Metadata */}
          <div className="lg:col-span-5">
            <div className="mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-white/10 bg-mist shadow-2xl transition-all duration-500 hover:border-accent/40">
                <Image
                  src="/images/portrait-editorial.jpg"
                  alt="Portrait of Ashutosh Anand"
                  fill
                  priority={false}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 500px"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Mobile Metadata (Below Portrait) */}
            <div className="mt-8 block lg:hidden">
              <AboutMetadata />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
