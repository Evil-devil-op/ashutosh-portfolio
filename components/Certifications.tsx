import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-[72px] border-b border-line"
      aria-labelledby="certs-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
          <p className="editorial-label mb-4">06 — Certifications</p>
          <h2
            id="certs-heading"
            className="display-name mb-16 text-5xl sm:text-7xl"
          >
            Certifications
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-t border-line md:grid-cols-2">
          {certifications.map((cert, index) => (
            <article
              key={cert.number}
              className={`px-5 py-14 md:px-10 ${
                index === 0 ? "border-b border-line md:border-b-0 md:border-r" : ""
              }`}
            >
              <p className="font-mono text-xs text-mute">{cert.number}</p>
              <h3 className="mt-8 text-4xl font-medium tracking-tight uppercase sm:text-5xl">
                {cert.title}
              </h3>
              <div className="mt-10 flex items-end justify-between border-t border-line pt-6">
                <p className="text-sm tracking-[0.18em] uppercase">
                  {cert.issuer}
                </p>
                <p className="font-mono text-xs text-mute">{cert.date}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
