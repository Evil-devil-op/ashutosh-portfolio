import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-center px-5 py-24 md:px-10">
      <p className="font-mono text-xs text-mute">404</p>
      <h1 className="display-name mt-6 text-6xl sm:text-8xl">Page not found</h1>
      <p className="mt-6 max-w-md text-sm leading-7 text-dim">
        The page you requested does not exist. Return to selected work or the
        home page.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/#work" variant="outline">
          View work
        </ButtonLink>
      </div>
    </section>
  );
}
