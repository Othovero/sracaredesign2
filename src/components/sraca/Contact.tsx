export function Contact() {
  return (
    <section id="contact" className="reveal relative overflow-x-clip px-4 py-24 sm:py-32">
      {/* Living brand hue — bridges the sponsors section above */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-20 right-0 size-[460px] rounded-full bg-brand-yellow/35 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob-2 pointer-events-none absolute bottom-0 -left-24 size-[400px] rounded-full bg-brand-purple/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="stagger-item eyebrow inline-block">Get in touch</span>
          <h2 className="stagger-item display mt-3 text-4xl text-ink sm:text-5xl lg:text-6xl text-balance" style={{ animationDelay: "80ms" }}>
            Talk to the SRACA team.
          </h2>
          <p className="stagger-item mt-6 max-w-md text-ink-soft" style={{ animationDelay: "160ms" }}>
            Questions about a nomination, sponsorship, press or tickets — drop
            us a line and we'll come back to you within two working days.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow !text-ink-soft">Email</dt>
              <dd className="mt-1 text-lg font-semibold text-ink">
                <a href="mailto:email@srep.co.uk" className="hover:text-brand-orange">
                  email@srep.co.uk
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow !text-ink-soft">Office</dt>
              <dd className="mt-1 text-lg font-semibold text-ink">
                The Space, 26 St. Petersgate, Stockport SK1 1HD
              </dd>
            </div>
            <div>
              <dt className="eyebrow !text-ink-soft">Parent organisation</dt>
              <dd className="mt-1 text-lg font-semibold text-ink">
                <a
                  href="https://srep.co.uk"
                  className="border-b-2 border-brand-orange/30 pb-0.5 hover:border-brand-orange hover:text-brand-orange"
                >
                  srep.co.uk ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          className="glass-card rounded-3xl p-6 shadow-soft sm:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="display text-2xl text-ink">Send a message</h3>
          <div className="mt-6 grid gap-4">
            <label className="block text-sm">
              <span className="font-medium text-ink">Your name</span>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-ink outline-none ring-brand-orange/40 focus:ring-2"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-ink">Email</span>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-ink outline-none ring-brand-orange/40 focus:ring-2"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-ink">Reason</span>
              <select className="mt-2 w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-ink outline-none ring-brand-orange/40 focus:ring-2">
                <option>Nomination question</option>
                <option>Sponsorship enquiry</option>
                <option>Tickets &amp; tables</option>
                <option>Press</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="font-medium text-ink">Message</span>
              <textarea
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-ink outline-none ring-brand-orange/40 focus:ring-2"
                placeholder="Tell us more…"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-stone-base shadow-lift transition-transform hover:scale-[1.02]"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
