"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-ink/10 bg-cream/85 px-3 py-2 pl-5 backdrop-blur-md transition-shadow duration-300",
            scrolled ? "shadow-[0_8px_30px_rgba(14,20,17,0.08)]" : "shadow-none",
          )}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <Logo />
            <span className="font-display text-lg font-semibold tracking-tightest leading-none">
              {site.short}
              <span className="text-clay">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-ink/70 hover:text-ink hover:bg-bone transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:bg-clay transition-colors"
            >
              Mulai proyek
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-ink/10 bg-cream/95 p-4 backdrop-blur-md shadow-lg animate-fade-up">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/5 py-3 text-sm font-medium text-ink/80 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-cream"
              >
                Mulai proyek →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M4 7l8-3 8 3M4 7v10l8 3 8-3V7M4 7l8 3m0 0l8-3m-8 3v10" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-clay" />
    </span>
  );
}
