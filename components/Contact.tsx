import { site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] border-b border-line bg-ink text-paper"
      aria-labelledby="contact-heading"
    >
      <Reveal>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-dim px-5 py-16 md:px-10 md:py-24 lg:col-span-7 lg:border-b-0 lg:border-r">
            <p className="mb-8 text-[11px] tracking-[0.28em] uppercase text-mute">
              07 — Contact
            </p>
            <h2
              id="contact-heading"
              className="display-name text-[16vw] leading-[0.84] sm:text-8xl lg:text-[7.5rem]"
            >
              Let&apos;s
              <br />
              Build
              <br />
              Something.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-12 px-5 py-16 md:px-10 md:py-24 lg:col-span-5">
            <div>
              <p className="text-2xl font-medium tracking-tight uppercase">
                {site.name}
              </p>
              <address className="mt-8 not-italic text-sm leading-8 text-mute">
                {site.location}
                <br />
                <a href={site.phoneHref} className="hover:text-paper">
                  {site.phone}
                </a>
                <br />
                <a href={site.emailHref} className="hover:text-paper">
                  {site.email}
                </a>
              </address>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.emailHref}
                className="inline-flex items-center bg-paper px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase text-ink transition-colors hover:bg-mist"
              >
                Email Me
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center border border-paper px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Call Me
              </a>
              <ButtonLink
                href={site.github}
                variant="outline"
                external
                className="border-paper text-paper hover:bg-paper hover:text-ink"
              >
                GitHub
              </ButtonLink>
              <ButtonLink
                href={site.linkedin}
                variant="outline"
                external
                className="border-paper text-paper hover:bg-paper hover:text-ink"
              >
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href="/cv"
                variant="outline"
                className="border-paper text-paper hover:bg-paper hover:text-ink"
              >
                View CV
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
