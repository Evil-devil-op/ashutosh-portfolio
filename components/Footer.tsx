import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-[11px] font-medium tracking-[0.24em] uppercase text-ink">
            {site.name}
          </p>
          <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-mute">
            {site.role} &bull; {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer Navigation">
          <a
            href={site.github}
            className="text-[11px] tracking-[0.2em] uppercase text-dim transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="text-[11px] tracking-[0.2em] uppercase text-dim transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.emailHref}
            className="text-[11px] tracking-[0.2em] uppercase text-dim transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href="/cv"
            className="text-[11px] tracking-[0.2em] uppercase text-dim transition-colors hover:text-accent"
          >
            CV
          </a>
        </nav>

        <div className="flex flex-col gap-1 text-[10px] tracking-[0.16em] uppercase text-mute md:text-right">
          <p>&copy; {new Date().getFullYear()} Ashutosh Anand</p>
          <p className="text-[9px] text-mute/80">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
