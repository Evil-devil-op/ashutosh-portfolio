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
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300";

  const styles = {
    solid: "bg-ink text-paper hover:bg-dim",
    outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
    ghost:
      "border-b border-ink pb-1 px-0 py-0 rounded-none hover:opacity-60",
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
