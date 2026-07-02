const sponsors = [
  {
    name: "Stockport Race Equality Partnership",
    src: "/sponsors/srep.avif",
    href: "https://srep.co.uk",
  },
  {
    name: "musicMagpie",
    src: "/sponsors/musicmagpie.avif",
    href: "https://www.musicmagpie.co.uk",
  },
  {
    name: "Together Trust",
    src: "/sponsors/togethertrust.avif",
    href: "https://www.togethertrust.org.uk",
  },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="reveal px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="stagger-item eyebrow inline-block">With thanks to</span>
          <h2 className="stagger-item display mt-3 text-4xl text-ink sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
            Our partners &amp; sponsors.
          </h2>
          <p className="stagger-item mt-4 max-w-xl text-ink-soft" style={{ animationDelay: "160ms" }}>
            SRACA is only possible because Stockport's businesses, charities and
            public bodies stand alongside us each year.
          </p>
        </div>

        <ul className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
          {sponsors.map((s, i) => (
            <li key={s.name} className="stagger-item" style={{ animationDelay: `${i * 110}ms` }}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group grid h-36 place-items-center rounded-2xl border border-ink/8 bg-white px-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                aria-label={s.name}
              >
                <img
                  src={s.src}
                  alt={`${s.name} logo`}
                  className="max-h-16 w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <p className="mx-auto mb-6 max-w-md text-sm text-ink-soft">
            Want your organisation alongside theirs? Sponsor a category and help
            celebrate the people shaping a more equitable Stockport.
          </p>
          <a
            href="mailto:email@srep.co.uk?subject=SRACA%20Sponsorship%20Enquiry&body=Hi%20SRACA%20team%2C%0A%0AWe'd%20like%20to%20explore%20sponsoring%20the%20Stockport%20Race%20%26%20Culture%20Awards.%0A%0AOrganisation%3A%0AContact%20name%3A%0APhone%3A%0A%0AThank%20you."
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple-deep px-7 py-4 text-sm font-semibold text-stone-base shadow-lift transition-transform hover:scale-[1.03]"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Email us to sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
