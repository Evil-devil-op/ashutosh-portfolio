import { site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="contact-heading"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-[1600px] border-b border-line px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              07 / CONTACT
            </p>
            <h2
              id="contact-heading"
              className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.9]"
            >
              Let&apos;s Build Together
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Available for full-stack engineering opportunities, web projects,
            and technical collaboration.
          </p>
        </div>
      </div>

      {/* Balanced 2-Column Editorial Structure */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-line lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
        {/* Left Column: Editorial Statement & Primary CTA (6/12) */}
        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:col-span-6 lg:p-14 xl:p-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-4">
              START A DIALOGUE
            </p>
            <h3 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[0.95]">
              Have an opportunity
              <br />
              or project in mind?
            </h3>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-dim sm:text-base sm:leading-7">
              Whether you are hiring for a full-stack engineering role, exploring
              a web application build, or looking to discuss modern systems
              architecture, feel free to reach out directly.
            </p>
          </div>

          <div className="mt-10 border-t border-line/60 pt-8">
            <ButtonLink href={site.emailHref} variant="solid">
              Start a Conversation &rarr;
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Structured Editorial Channels (6/12) */}
        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:col-span-6 lg:p-14 xl:p-16">
          <div className="divide-y divide-line/60">
            {/* Email */}
            <div className="py-6 first:pt-0 sm:py-8">
              <p className="mb-2 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
                EMAIL
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <a
                  href={site.emailHref}
                  className="text-base font-medium text-white transition-colors hover:text-accent sm:text-lg break-all"
                >
                  {site.email}
                </a>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wider uppercase text-accent transition-colors hover:text-white shrink-0"
                >
                  Send Email ↗
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="py-6 sm:py-8">
              <p className="mb-2 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
                PHONE
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <a
                  href={site.phoneHref}
                  className="font-mono text-base font-medium text-white transition-colors hover:text-accent sm:text-lg"
                >
                  +91 {site.phone}
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wider uppercase text-accent transition-colors hover:text-white shrink-0"
                >
                  Call ↗
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="py-6 sm:py-8">
              <p className="mb-2 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
                LOCATION
              </p>
              <p className="text-base font-medium text-white sm:text-lg">
                {site.location}
              </p>
            </div>

            {/* Networks */}
            <div className="py-6 last:pb-0 sm:py-8">
              <p className="mb-3 text-[10px] font-semibold tracking-[0.24em] uppercase text-accent">
                NETWORKS
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wider uppercase text-dim transition-colors hover:text-accent"
                >
                  GitHub ↗
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wider uppercase text-dim transition-colors hover:text-accent"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="/cv"
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wider uppercase text-dim transition-colors hover:text-accent"
                >
                  CV ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
