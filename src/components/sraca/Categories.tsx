const NOMINATE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHGQOk1lfTxVEhd8Lk0Bk9vEqKjrqqVCK9v8OhXVie5Hle8g/viewform";

const categories = [
  {
    n: "01",
    title: "Volunteer Champion",
    desc: "For the individual whose time, energy and dedication as a volunteer has made a lasting difference in Stockport.",
  },
  {
    n: "02",
    title: "Helping Hand",
    desc: "Recognising someone who consistently steps up to support others in need — quietly, generously, without being asked.",
  },
  {
    n: "03",
    title: "Voluntary Organisation",
    desc: "For a group or charity whose collective work has strengthened communities and changed lives across the borough.",
  },
  {
    n: "04",
    title: "Health & Wellbeing",
    desc: "Celebrating those improving physical and mental health outcomes for diverse communities in Stockport.",
  },
  {
    n: "05",
    title: "Unsung Hero",
    desc: "For the person working behind the scenes whose impact is felt by many but recognised by few.",
  },
  {
    n: "06",
    title: "Corporate Social Responsibility",
    desc: "Honouring a business that puts inclusion and community at the heart of how it trades and gives back.",
  },
  {
    n: "07",
    title: "Distinguished Service",
    desc: "For sustained, outstanding service to race equality, diversity and culture in our town.",
  },
  {
    n: "08",
    title: "Lifetime Achievement",
    desc: "The highest honour — for a decades-long, unwavering commitment to a fairer, more united Stockport.",
  },
  {
    n: "09",
    title: "Special Award",
    desc: "Reserved for an exceptional, one-of-a-kind contribution that defies a single category.",
  },
  {
    n: "10",
    title: "Young Person",
    desc: "For an under-25 changemaker already shaping what's possible — organising, creating and leading.",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="reveal relative bg-brand-purple-deep px-4 py-24 text-stone-base sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-10 size-[420px] rounded-full bg-brand-orange/30 blur-3xl"
      />
      <div
        aria-hidden
        className="mark-watermark pointer-events-none absolute -bottom-10 -left-16 size-[360px] [background-size:contain]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow !text-brand-yellow">The awards</span>
            <h2 className="display mt-3 text-5xl text-stone-base sm:text-6xl lg:text-7xl">
              Ten categories.
              <br />
              <span className="text-shimmer">Countless stories.</span>
            </h2>
          </div>
          <p className="max-w-sm text-stone-base/70">
            Each category celebrates a distinct form of contribution. Nominate
            someone whose story belongs in the room.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.n}
              className="stagger-item group relative bg-brand-purple-deep p-8 transition-colors duration-500 hover:bg-white/[0.04]"
              style={{ animationDelay: `${(i % 3) * 90 + Math.floor(i / 3) * 60}ms` }}
            >
              <span className="display text-2xl text-brand-yellow/90">{c.n}</span>
              <h3 className="display mt-6 text-2xl text-stone-base sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-base/70">
                {c.desc}
              </p>
              <a
                href={NOMINATE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow/80 transition-colors group-hover:text-brand-yellow"
              >
                Nominate
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}

          {/* CTA fills the final row (10 categories + this = even grid) */}
          <a
            href={NOMINATE_URL}
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: "360ms" }}
            className="stagger-item group relative flex flex-col justify-center gap-3 bg-brand-orange p-8 text-brand-purple-deep transition-colors duration-500 hover:bg-brand-gold-soft sm:col-span-2 lg:col-span-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
              Nominations open
            </span>
            <h3 className="display text-2xl sm:text-3xl">
              Know someone who deserves recognition?
            </h3>
            <span className="mt-1 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              Start your nomination
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
