import { useEffect } from "react";
import { createPortal } from "react-dom";

export type LightboxImage = { src: string; alt: string; caption?: string };

export function ImageLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const count = images.length;
  const current = images[index];

  const goPrev = () => onNavigate((index - 1 + count) % count);
  const goNext = () => onNavigate((index + 1) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!current) return null;

  // Portalled to document.body: an ancestor section uses the `.reveal`
  // scroll-in class, which sets a CSS transform. Any ancestor transform
  // creates a new containing block for `position: fixed` descendants, so
  // without the portal this modal renders relative to that section's box
  // instead of the viewport (off-center, close button scrolled out of view).
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${count}`}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-brand-purple-deep/95 p-3 backdrop-blur-sm animate-fade-up sm:p-6"
      onClick={onClose}
    >
      <div className="flex w-full max-w-5xl items-center justify-between">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">
          {index + 1} / {count}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo"
          className="inline-flex items-center gap-2 rounded-full bg-stone-base px-4 py-2.5 text-sm font-semibold text-ink shadow-lift transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
          Close
        </button>
      </div>

      <div
        className="relative flex w-full max-w-5xl flex-1 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {count > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-1 z-10 grid size-11 shrink-0 place-items-center rounded-full bg-stone-base/90 text-ink shadow-lift transition hover:scale-105 sm:left-3 sm:size-12"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-lift ring-1 ring-stone-base/20"
        />

        {count > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-1 z-10 grid size-11 shrink-0 place-items-center rounded-full bg-stone-base/90 text-ink shadow-lift transition hover:scale-105 sm:right-3 sm:size-12"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {current.caption && (
        <p className="max-w-2xl text-center text-sm text-stone-base/85">{current.caption}</p>
      )}

      {/* Thumbnail strip for quick scroll-through */}
      {count > 1 && (
        <div className="scrollbar-none flex w-full max-w-5xl gap-2 overflow-x-auto px-1 pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(i);
              }}
              aria-label={`Go to photo ${i + 1}`}
              className={`size-14 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:size-16 ${
                i === index ? "ring-brand-yellow" : "ring-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt="" aria-hidden className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <p className="text-xs font-medium uppercase tracking-widest text-stone-base/70">
        Use arrow keys or tap outside to close
      </p>
    </div>,
    document.body
  );
}
