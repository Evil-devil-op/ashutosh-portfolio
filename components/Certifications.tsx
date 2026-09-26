import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-[72px] border-b border-line bg-paper"
      aria-labelledby="certs-heading"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-[1600px] border-b border-line px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-accent sm:mb-5">
              06 / CERTIFICATIONS
            </p>
            <h2
              id="certs-heading"
              className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.9]"
            >
              Professional Credentials
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Professional certifications in database technologies and artificial
            intelligence.
          </p>
        </div>
      </div>

      {/* Editorial Certification Records */}
      <div className="mx-auto max-w-[1600px] divide-y divide-line">
        {certifications.map((cert) => (
          <article
            key={cert.number}
            className="grid grid-cols-1 gap-4 px-5 py-8 transition-colors duration-150 hover:bg-white/[0.015] sm:px-6 sm:py-10 md:px-10 md:py-12 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-14 xl:px-16"
          >
            {/* Left: Index & Issuer */}
            <div className="lg:col-span-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-accent sm:text-sm">
                {cert.number} / {cert.issuer.toUpperCase()}
              </span>
            </div>

            {/* Center: Certification Title */}
            <div className="lg:col-span-4 xl:col-span-5">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                {cert.title}
              </h3>
            </div>

            {/* Date: Issue Date */}
            <div className="lg:col-span-3 xl:col-span-2">
              <p className="font-mono text-xs text-mute sm:text-sm">
                Issued &middot; {cert.date}
              </p>
            </div>

            {/* Right: Action */}
            <div className="lg:col-span-2 xl:col-span-2 lg:text-right">
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-accent transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                View Certificate ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
