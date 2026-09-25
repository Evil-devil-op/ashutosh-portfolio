"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems, site } from "@/data/site";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for indicator
  useEffect(() => {
    const sections = ["work", "about", "skills", "training", "education", "certifications", "contact"];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`/#${sectionId}`);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Handle escape key and body overflow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-paper/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "border-b border-line/40 bg-paper/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid h-[72px] max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[auto_1fr_auto] md:gap-10 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors"
          aria-label={`${site.name} — Home`}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-line bg-mist transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
            <Image
              src={site.avatarImage}
              alt="Ashutosh Anand small avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="transition-colors group-hover:text-accent">
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navItems.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[11px] tracking-[0.22em] uppercase transition-colors duration-200 ${
                  isActive ? "text-ink font-semibold" : "text-dim hover:text-ink"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-6">
          <a
            href={site.github}
            className="hidden text-[11px] tracking-[0.22em] uppercase text-dim transition-colors duration-300 hover:text-accent sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="hidden text-[11px] tracking-[0.22em] uppercase text-dim transition-colors duration-300 hover:text-accent sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
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
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 top-[72px] z-40 bg-paper/98 backdrop-blur-xl md:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <nav
              className="flex h-[calc(100vh-72px)] flex-col justify-between px-6 py-10"
              aria-label="Mobile Menu"
            >
              <ul className="space-y-0 border-t border-line">
                {navItems.map((link) => (
                  <li key={link.href} className="border-b border-line">
                    <Link
                      href={link.href}
                      className="block py-5 text-2xl font-medium tracking-tight uppercase transition-colors hover:text-accent"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line">
                  <Link
                    href="/cv"
                    className="block py-5 text-2xl font-medium tracking-tight uppercase text-accent"
                    onClick={() => setOpen(false)}
                  >
                    View CV
                  </Link>
                </li>
              </ul>
              <div className="flex gap-8 border-t border-line pt-6">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.22em] uppercase text-dim hover:text-ink"
                >
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.22em] uppercase text-dim hover:text-ink"
                >
                  LinkedIn
                </a>
                <a
                  href={site.emailHref}
                  className="text-[11px] tracking-[0.22em] uppercase text-dim hover:text-ink"
                >
                  Email
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
