import { useEffect, useRef, useState } from "react";

const slides = [
  {
    eyebrow: "The room",
    title: "Stockport, all in one place",
    caption: "A packed Grand Hall of community leaders, artists, sponsors and changemakers.",
    img: "/TEEMEDIAA-208.jpg",
    alt: "Guests seated beneath the arches of Stockport Town Hall's Grand Hall",
  },
  {
    eyebrow: "On stage",
    title: "A night of recognition",
    caption: "Speeches, tributes and standing ovations under the SRACA banner.",
    img: "/TEEMEDIAA-189.jpg",
    alt: "Host addressing the SRACA gala audience from the stage",
  },
  {
    eyebrow: "Award moment",
    title: "Names called. Tears earned.",
    caption: "Young Person winner Paula Aga with her award and certificate.",
    img: "/TEEMEDIAA-179.jpg",
    alt: "A young winner holding her SRACA award and certificate",
  },
  {
    eyebrow: "Live culture",
    title: "Culture, live and loud",
    caption: "Performers bringing Stockport's communities to the stage.",
    img: "/TEEMEDIAA-253.jpg",
    alt: "Dancers in traditional dress performing at the SRACA gala",
  },
  {
    eyebrow: "Celebration",
    title: "The dancefloor stayed full",
    caption: "Music, joy and community well past midnight.",
    img: "/TEEMEDIAA-268.jpg",
    alt: "SRACA guests celebrating together on the dancefloor",
  },
  {
    eyebrow: "Together",
    title: "Behind every nominee",
    caption: "The volunteers, families and friends who got them there.",
    img: "/IMG-20251002-WA0003.jpg",
    alt: "Guests sharing a joyful moment at a SRACA gala table",
  },
];

const recaps = [
  {
    id: "2025-highlights",
    year: "2025",
    tag: "Highlights",
    src: "/recap-2025.mp4",
    poster: "/TEEMEDIAA-208.jpg",
    blurb: "The full evening — awards, performances and the room on its feet.",
  },
  {
    id: "2025-recap",
    year: "2025",
    tag: "Recap",
    src: "/Srep recap.mp4",
    poster: "/TEEMEDIAA-268.jpg",
    blurb: "A short recap of the night, from red carpet to dancefloor.",
  },
  {
    id: "2024-highlights",
    year: "2024",
    tag: "Highlights",
    src: "/recap-2024.mp4",
    poster: "/IMG-20251002-WA0008.jpg",
    blurb: "Where it all built from — celebration, culture and community.",
  },
];

export function Highlights() {
  const [active, setActive] = useState(0);
  const [videoId, setVideoId] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const activeRecap = recaps.find((r) => r.id === videoId) ?? null;

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 4200);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!videoId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoId(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoId]);

  return (
    <section id="highlights" className="reveal px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Highlights</span>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl lg:text-6xl text-balance">
              Last year, in
              <br />
              <span className="text-shimmer">moments.</span>
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            A glimpse of the 2026 ceremony. The energy, the people, the wins worth
            celebrating all over again.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_1fr]">
          {/* Slideshow stage */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/8">
            {slides.map((s, i) => (
              <div
                key={i}
                aria-hidden={i !== active}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-6 sm:p-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
                    {s.eyebrow}
                  </span>
                  <h3 className="display mt-2 text-2xl text-stone-base sm:text-4xl text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-stone-base/85 sm:text-base">
                    {s.caption}
                  </p>
                </div>
              </div>
            ))}

            {/* Progress dots */}
            <div className="absolute right-5 top-5 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show highlight ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-stone-base"
                      : "w-1.5 bg-stone-base/50 hover:bg-stone-base/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail mosaic */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {slides.slice(0, 4).map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                style={{ animationDelay: `${i * 90}ms` }}
                className={`stagger-item group relative aspect-square overflow-hidden rounded-2xl ring-1 transition-all duration-500 ${
                  i === active
                    ? "ring-brand-orange ring-2 shadow-lift -translate-y-0.5"
                    : "ring-ink/8 hover:-translate-y-0.5 hover:shadow-soft"
                }`}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute bottom-2 left-2 right-2 text-left text-[10px] font-bold uppercase tracking-widest text-stone-base drop-shadow">
                  {s.eyebrow}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Watch the highlights — pick a year */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-brand-purple-deep p-6 text-stone-base shadow-soft sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
              Watch the highlights
            </span>
            <p className="display text-xl sm:text-2xl">
              Relive the moments — pick a film.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recaps.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setVideoId(r.id)}
                aria-label={`Play the SRACA ${r.year} ${r.tag}`}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl p-4 text-left ring-1 ring-white/15 transition-all duration-500 hover:ring-brand-yellow/60"
              >
                <img
                  src={r.poster}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-deep via-brand-purple-deep/80 to-brand-purple-deep/40" />
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-purple-deep transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div className="relative min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="display text-2xl">SRACA {r.year}</p>
                    <span className="rounded-full bg-brand-yellow/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-yellow">
                      {r.tag}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-stone-base/75">{r.blurb}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video lightbox */}
      {activeRecap && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`SRACA ${activeRecap.year} ${activeRecap.tag} video`}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-brand-purple-deep/95 p-3 backdrop-blur-sm animate-fade-up sm:p-6"
          onClick={() => setVideoId(null)}
        >
          <div className="flex w-full max-w-5xl items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">
              SRACA {activeRecap.year} · {activeRecap.tag}
            </span>
            <button
              type="button"
              onClick={() => setVideoId(null)}
              aria-label="Close video"
              className="inline-flex items-center gap-2 rounded-full bg-stone-base px-4 py-2.5 text-sm font-semibold text-ink shadow-lift transition hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
              Close
            </button>
          </div>

          {/* object-contain + max dims on both axes = always fits the screen.
              Stop propagation so the controls work; tapping the backdrop closes. */}
          <video
            key={activeRecap.src}
            src={activeRecap.src}
            poster={activeRecap.poster}
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-xs font-medium uppercase tracking-widest text-stone-base/70">
            Tap outside the video or press Esc to close
          </p>
        </div>
      )}
    </section>
  );
}
