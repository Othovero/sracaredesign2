import { useEffect, useState } from "react";

const POSTER_URL = "/2026winners.jpg";

export function PastWinners() {
  const [open, setOpen] = useState(false);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="winners" className="reveal px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="stagger-item eyebrow inline-block">Roll of honour</span>
            <h2 className="stagger-item display mt-3 text-4xl text-ink sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
              The 2026 winners.
            </h2>
            <p className="stagger-item mt-4 max-w-lg text-ink-soft" style={{ animationDelay: "160ms" }}>
              Ten extraordinary individuals and organisations whose work has already
              left Stockport better than they found it.
            </p>
          </div>
          <a
            href="#"
            className="hidden w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink hover:text-brand-gold sm:inline-flex"
          >
            View full archive <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Desktop / tablet: full poster inline */}
        <figure className="hover-zoom mt-12 hidden rounded-[2rem] shadow-lift ring-1 ring-ink/8 sm:block">
          <img
            src={POSTER_URL}
            alt="Winners of the Stockport Race and Culture Awards 2026 — ten laurel portraits including Volunteer Champion Nadine Travers, Helping Hand Sadia Akbar, Voluntary Organisation Chelwood Foodbank Plus, Health & Wellbeing Tasmilah Ahmed, Unsung Hero Nadia Khan, Corporate Social Responsibility The Goodness Collective, Distinguished Service Jules Palfreyman, Lifetime Achievement Prof. Dawn Edge, Special Award Yvonne Shelton, Young Person Paula Aga."
            className="block h-auto w-full"
            loading="lazy"
          />
        </figure>

        {/* Mobile: CTA → opens lightbox with poster */}
        <div className="mt-10 sm:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block w-full overflow-hidden rounded-3xl bg-brand-purple-deep p-6 text-left text-stone-base shadow-lift"
          >
            <span className="eyebrow !text-brand-yellow">2026 winners poster</span>
            <p className="display mt-2 text-2xl text-balance">
              View the full <span className="text-brand-gold-soft">roll of honour.</span>
            </p>
            <p className="mt-3 text-sm text-stone-base/75">
              Tap to view all ten 2026 winners.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
              Open poster
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-brand-gold/30 blur-2xl"
            />
          </button>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink hover:text-brand-gold"
          >
            View full archive <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="2026 winners poster"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-purple-deep/95 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close poster"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-stone-base text-ink shadow-lift hover:scale-105 transition"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={POSTER_URL}
            alt="Winners of the Stockport Race and Culture Awards 2026"
            className="max-h-[92vh] w-auto max-w-full rounded-2xl shadow-lift ring-1 ring-stone-base/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
