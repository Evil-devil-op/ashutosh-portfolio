import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
};

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  download,
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

  const styles = {
    solid: "bg-ink text-paper hover:bg-zinc-200 font-semibold shadow-sm",
    outline:
      "border border-line bg-paper/40 text-ink hover:border-accent hover:text-accent hover:bg-mist/80",
    ghost:
      "border-b border-line pb-1 px-0 py-0 rounded-none text-dim hover:text-accent hover:border-accent",
  } as const;

  const classNameValue = `${base} ${styles[variant]} ${className}`;
  const resolvedHref = href.includes(" ") ? encodeURI(href) : href;

  if (isInternalHref(href) && !download && !external) {
    return (
      <Link href={href} className={classNameValue}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={resolvedHref}
      className={classNameValue}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
