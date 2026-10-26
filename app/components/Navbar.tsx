"use client";

import { useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#notre-carte", label: "Notre carte" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="anim-slide-down fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-1 ring-black/10">
            <Image
              src="/logo.jpg"
              alt="Logo LA DIDIE"
              width={48}
              height={48}
              className="h-full w-full scale-[1.28] object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl tracking-wide uppercase">
            La Didie
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-didie-orange"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#notre-carte"
            className="rounded-full bg-didie-orange px-5 py-2 text-sm font-semibold uppercase tracking-widest text-didie-black transition-transform hover:scale-105"

          >
            Commander
          </a>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-neutral-900 transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-neutral-900 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-neutral-900 transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-black/10 bg-white/95 px-6 py-4 text-lg uppercase tracking-widest md:hidden">
          {LINKS.map((l) => (
            <li key={l.href} className="py-2">
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
