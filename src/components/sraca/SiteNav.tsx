import { useEffect, useState } from "react";
import { SracaLockup } from "./Logo";

const NOMINATE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHGQOk1lfTxVEhd8Lk0Bk9vEqKjrqqVCK9v8OhXVie5Hle8g/viewform";

const links = [
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#highlights", label: "Highlights" },
  { href: "#gala", label: "The Gala" },
  { href: "#winners", label: "Past Winners" },
  { href: "#sponsors", label: "Sponsors" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#main" aria-label="SRACA home" className="flex items-center pl-2">
          <SracaLockup variant="dark" className="h-8 w-auto sm:h-9" />
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-soft transition-colors hover:text-brand-orange"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#gala"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand-orange sm:inline-flex"
          >
            The Gala
          </a>
          <a
            href={NOMINATE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple-deep px-4 py-2.5 text-sm font-semibold text-stone-base shadow-soft transition-transform hover:scale-[1.03]"
          >
            Nominate
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 grid size-10 place-items-center rounded-full border border-border md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className={`block h-0.5 w-4 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-4 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-4 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-3xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
