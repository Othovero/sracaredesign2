const placeholders = [
  { k: "Date", v: "TBA" },
  { k: "Venue", v: "TBA" },
  { k: "Doors", v: "TBA" },
  { k: "Dress code", v: "TBA" },
  { k: "Programme", v: "TBA" },
  { k: "Tickets", v: "On sale soon" },
];

export function Gala() {
  return (
    <section id="gala" className="reveal relative overflow-x-clip px-4 py-24 sm:py-32">
      {/* Living dark-purple hue bridging the gala + roll of honour */}
      <div
        aria-hidden
        className="animate-blob-2 pointer-events-none absolute -bottom-24 -right-16 size-[440px] rounded-full bg-brand-purple-deep/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] ring-1 ring-ink/8">
        <img
          src="/TEEMEDIAA-192.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="relative grid gap-10 p-6 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:p-16">
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-purple-deep ring-1 ring-brand-yellow/50">
             
              Coming soon
            </span>
            <h2 className="display mt-4 text-4xl text-ink sm:text-5xl text-balance">
              An evening of recognition.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              The 2027 gala details: date, venue, programme and ticketing are
              being finalised and will be announced shortly. Nominate now so your
              champion is in the room when names are called.
            </p>

            <dl className="mt-8 divide-y divide-ink/10 rounded-2xl bg-stone-base/60 ring-1 ring-ink/5">
              {placeholders.map((d) => (
                <div
                  key={d.k}
                  className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-3 text-sm sm:grid-cols-[9rem_1fr]"
                >
                  <dt className="self-center text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
                    {d.k}
                  </dt>
                  <dd className="font-medium text-ink">
                    {d.v === "TBA" ? (
                      <span className="inline-flex items-center gap-2 text-ink-soft">
                        <span className="inline-block h-2 w-16 rounded-full bg-ink/10" />
                        To be announced
                      </span>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                id="tickets"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeHGQOk1lfTxVEhd8Lk0Bk9vEqKjrqqVCK9v8OhXVie5Hle8g/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-purple-deep px-7 py-4 text-sm font-semibold text-stone-base shadow-lift transition-transform hover:scale-[1.03]"
              >
                Nominate while you wait
                <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink hover:bg-accent"
              >
                Get notified
              </a>
            </div>
          </div>

          {/* Photo collage — distinct shots from last year's gala */}
          <div className="grid h-[24rem] grid-cols-2 grid-rows-2 gap-3 sm:h-[30rem] sm:gap-4 lg:h-auto">
            <div className="hover-zoom row-span-2 rounded-3xl shadow-lift ring-1 ring-white/20">
              <img
                src="/TEEMEDIAA-180.jpg"
                alt="The Grand Hall of Stockport Town Hall filled with SRACA guests"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hover-zoom rounded-3xl shadow-lift ring-1 ring-white/20">
              <img
                src="/africanstore.jpg"
                alt="Guests browsing a community craft and culture stall at the gala"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hover-zoom rounded-3xl shadow-lift ring-1 ring-white/20">
              <img
                src="/IMG-20251002-WA0005.jpg"
                alt="An award presented on stage at the SRACA ceremony"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
