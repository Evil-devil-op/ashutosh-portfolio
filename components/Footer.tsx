import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase">
            {site.name}
          </p>
          <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-mute">
            {site.role}
          </p>
        </div>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          <a
            href={site.github}
            className="text-[11px] tracking-[0.18em] uppercase text-dim hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="text-[11px] tracking-[0.18em] uppercase text-dim hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.emailHref}
            className="text-[11px] tracking-[0.18em] uppercase text-dim hover:text-ink"
          >
            Email
          </a>
        </nav>
        <p className="text-[11px] tracking-[0.16em] uppercase text-mute">
          © 2026 Ashutosh Anand
        </p>
      </div>
    </footer>
  );
}
