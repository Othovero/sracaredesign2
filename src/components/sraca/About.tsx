export function About() {
  return (
    <section id="about" className="reveal relative px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <span className="eyebrow">About SRACA</span>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Presented by
            <br />
            <span className="text-brand-purple-deep">S-REP.</span>
          </h2>
          <div className="mt-8 aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-ink/5 shadow-lift">
            <img
              src="/IMG-20251002-WA0003.jpg"
              alt="Guests sharing a joyful moment at the SRACA gala"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-2xl leading-tight text-ink text-pretty sm:text-3xl">
            SRACA is the annual moment Stockport pauses to honour the individuals,
            groups and businesses whose work makes our town more equitable, more
            connected, more itself.
          </p>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-ink-soft sm:text-lg">
            The awards are presented by{" "}
            <strong className="text-ink">Stockport Race Equality Partnership (S-REP)</strong>
            , a community organisation working to integrate communities, influence
            decision-makers and improve outcomes for diverse groups across Stockport.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-3">
            {[
              { k: "12+", v: "Years honouring excellence" },
              { k: "60+", v: "Past winners celebrated" },
              { k: "1,000s", v: "Of lives shaped" },
            ].map((s) => (
              <div key={s.v} className="bg-stone-base p-6">
                <span className="display block text-3xl text-brand-orange">{s.k}</span>
                <span className="mt-1 block text-sm text-ink-soft">{s.v}</span>
              </div>
            ))}
          </div>

          <a
            href="https://srep.co.uk"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-2 border-b-2 border-brand-orange/30 pb-1 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
          >
            Visit srep.co.uk
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
