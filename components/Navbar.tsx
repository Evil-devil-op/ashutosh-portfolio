"use client";

import Link from "next/link";
import { navItems, site } from "@/data/site";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm ${
        scrolled ? "shadow-[0_1px_0_0_#E5E5E5]" : ""
      }`}
    >
      <div className="mx-auto grid h-[72px] max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[1fr_auto_1fr] md:px-10">
        <Link
          href="/"
          className="text-[11px] font-medium tracking-[0.22em] uppercase"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.22em] uppercase text-dim transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-6">
          <a
            href={site.github}
            className="hidden text-[11px] tracking-[0.22em] uppercase text-dim transition-colors duration-300 hover:text-ink sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="hidden text-[11px] tracking-[0.22em] uppercase text-dim transition-colors duration-300 hover:text-ink sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 top-[72px] z-40 bg-paper md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="flex h-full flex-col justify-between px-6 py-10"
              aria-label="Mobile"
            >
              <ul className="space-y-0 border-t border-line">
                {navItems.map((link) => (
                  <li key={link.href} className="border-b border-line">
                    <Link
                      href={link.href}
                      className="block py-5 text-3xl font-medium tracking-tight uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 pb-6">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.22em] uppercase"
                >
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.22em] uppercase"
                >
                  LinkedIn
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
