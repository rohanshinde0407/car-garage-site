"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, PRIMARY_NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-ink/5">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-ink">
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#booking"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
          >
            Book Service
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/5 bg-white px-5 pb-6 pt-4 md:hidden">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink/80 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#booking"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Service
          </Link>
        </nav>
      )}
    </header>
  );
}
