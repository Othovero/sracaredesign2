import { FaInstagram } from "react-icons/fa6";

const NOMINATE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHGQOk1lfTxVEhd8Lk0Bk9vEqKjrqqVCK9v8OhXVie5Hle8g/viewform";

const INSTAGRAM_POST_URL =
  "https://www.instagram.com/p/DVOEE1FjXxO/?igsh=dm14NTlrdWl1eXd4";

// Nominations close 31 October 2026, 23:59 — keep in sync with NominateCTA.
const NOMINATIONS_DEADLINE = new Date("2026-10-31T23:59:00").getTime();

export function Hero() {
  const nominationsOpen = Date.now() < NOMINATIONS_DEADLINE;

  return (
    <section className="relative overflow-x-clip px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Living brand blobs */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-24 -left-32 size-[420px] rounded-full bg-brand-yellow/40 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob-2 pointer-events-none absolute top-40 -right-32 size-[460px] rounded-full bg-brand-purple/25 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob-3 pointer-events-none absolute -bottom-32 left-1/3 size-[380px] rounded-full bg-brand-orange/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <span
            className={`inline-flex items-center gap-2.5 rounded-lg border bg-stone-base/70 px-3.5 py-2 backdrop-blur ${
              nominationsOpen ? "border-brand-orange/30" : "border-ink/15"
            }`}
          >
            <span
              className={`grid size-5 shrink-0 place-items-center rounded-md ${
                nominationsOpen ? "bg-brand-orange/15 text-brand-orange" : "bg-ink/10 text-ink/50"
              }`}
              aria-hidden
            >
              {/* Bullhorn / announcement icon */}
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {/* Horn body */}
                <path d="M3 9.5v5a1 1 0 0 0 1 1h2.5" />
                <path d="M6.5 15.5V19a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.5" />
                {/* Cone of the megaphone */}
                <path d="M6 9a1 1 0 0 1 1-1l7-3.5v13L7 14a1 1 0 0 1-1-1V9Z" />
                {/* Sound waves */}
                <path d="M16 8.5a3.5 3.5 0 0 1 0 7" strokeWidth="1.6" />
                <path d="M17.5 6a6 6 0 0 1 0 12" strokeWidth="1.4" opacity="0.6" />
              </svg>
            </span>
            <span className="eyebrow !text-ink">
              {nominationsOpen
                ? "Nominations close: 31 Oct 2026"
                : "Nominations closed for 2026"}
            </span>
          </span>

          <h1 className="display mt-6 text-[clamp(2.75rem,8vw,6.5rem)] text-balance text-brand-purple-deep">
            <span className="reveal-line [animation-delay:120ms]">Celebrating the</span>
            <span className="reveal-line [animation-delay:260ms]">
              <span className="text-shimmer">heart</span> of
            </span>
            <span className="reveal-line [animation-delay:400ms]">Stockport.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
            The annual Stockport Race &amp; Culture Awards honour the people, groups and
            businesses driving race equality, diversity and culture across our town.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={NOMINATE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-stone-base shadow-lift transition-transform hover:scale-[1.03]"
            >
              Nominate someone
              <span aria-hidden>→</span>
            </a>
            <a
              href="#gala"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:bg-white"
            >
              Gala details
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
              <img
                src="/TEEMEDIAA-208.jpg"
                alt="Guests celebrating at the SRACA gala in Stockport Town Hall's Grand Hall"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <a
              href={INSTAGRAM_POST_URL}
              target="_blank"
              rel="noreferrer"
              className="glass-card animate-float group absolute -bottom-6 -left-6 block max-w-[270px] rounded-2xl p-5 shadow-lift transition-transform hover:scale-[1.03]"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white">
                  <FaInstagram className="size-4" aria-hidden />
                </span>
                <span className="eyebrow !text-ink-soft">@srep_gm</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                Relive the moments from our last SRACA gala.
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-purple-deep transition-colors group-hover:text-brand-orange">
                View post on Instagram
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 text-ink sm:grid-cols-4">
        {[
          { k: "The date", v: "TBA" },
          { k: "Venue", v: "TBA" },
          { k: "Doors", v: "TBA" },
          { k: "Dress code", v: "TBA" },
        ].map((item) => (
          <div key={item.k} className="bg-stone-base px-5 py-5">
            <dt className="eyebrow !text-ink-soft">{item.k}</dt>
            <dd className="mt-1 text-base font-semibold">
              {item.v === "TBA" ? (
                <span className="text-ink-soft">To be announced</span>
              ) : (
                item.v
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
