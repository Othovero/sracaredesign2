import { useEffect, useState } from "react";

const NOMINATE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHGQOk1lfTxVEhd8Lk0Bk9vEqKjrqqVCK9v8OhXVie5Hle8g/viewform";

const SHARE_TEXT =
  "Nominations are OPEN for the Stockport Race & Culture Awards 2027. Know someone shaping a more equitable Stockport? Nominate them now:";

// Nominations close 31 October 2026, 23:59
const DEADLINE = new Date("2026-10-31T23:59:00").getTime();

type TimeLeft = { days: number; hours: number; mins: number; secs: number; done: boolean };

function calcTimeLeft(): TimeLeft {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    mins: Math.floor((diff / 60000) % 60),
    secs: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

function getShareUrl() {
  if (typeof window === "undefined") return "https://sraca.co.uk";
  return window.location.origin + window.location.pathname;
}

export function NominateCTA() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calcTimeLeft());
    const id = window.setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const shareUrl = getShareUrl();
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(SHARE_TEXT);

  const onShare = async () => {
    const data = { title: "SRACA Nominations", text: SHARE_TEXT, url: shareUrl };
    if (typeof navigator !== "undefined" && (navigator as Navigator).share) {
      try {
        await (navigator as Navigator).share(data);
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(`${SHARE_TEXT} ${shareUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="nominate" className="reveal px-4 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-stone-base p-8 ring-1 ring-ink/8 sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full bg-brand-yellow/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 size-[420px] rounded-full bg-brand-orange/20 blur-3xl"
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow">Nominations open now</span>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl lg:text-6xl text-balance">
              Whose story
              <br />
              needs telling?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Nominations take less than ten minutes. You can nominate anyone in
              Stockport! Gala details will be announced soon,
              but nominations close{" "}
              <strong className="text-ink">31 October 2026, 23:59</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={NOMINATE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-sm font-semibold text-stone-base shadow-lift transition-transform hover:scale-[1.03]"
              >
                Start a nomination
                <span aria-hidden>→</span>
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink hover:bg-accent"
              >
                Review the categories
              </a>
            </div>

            {/* Share row */}
            <div className="mt-10 rounded-2xl border border-ink/8 bg-white/70 p-5 backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-orange">
                    Help spread the word
                  </span>
                  <p className="mt-1 text-sm font-medium text-ink">
                    Share SRACA with your community.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <ShareButton
                    label="WhatsApp"
                    href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
                    accent="bg-brand-green/15 text-brand-green hover:bg-brand-green/25"
                    icon={
                      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                        <path d="M20.5 3.5A11.7 11.7 0 0 0 3.4 19.2L2 22l2.9-1.4a11.7 11.7 0 0 0 17.4-15.4l-1.8-1.7Zm-8.5 17a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-2.6.7.7-2.5-.2-.3a9.4 9.4 0 1 1 7.2 3.6Zm5.3-7c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1l-1 1.2c-.2.2-.4.3-.6.1a7.6 7.6 0 0 1-3.7-3.2c-.3-.5.3-.5.8-1.4.1-.2 0-.4 0-.6s-.7-1.6-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3.3 3.3 0 0 0-1 2.4c0 1.4 1 2.8 1.2 3a11 11 0 0 0 4.5 4 5.6 5.6 0 0 0 2.6.5 2.7 2.7 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
                      </svg>
                    }
                  />
                  <ShareButton
                    label="Facebook"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    accent="bg-brand-purple/15 text-brand-purple hover:bg-brand-purple/25"
                    icon={
                      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                        <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.5 1.6-1.5h1.7V4.3a23 23 0 0 0-2.5-.1c-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5V14h2.7v8h3.3Z" />
                      </svg>
                    }
                  />
                  <ShareButton
                    label="X"
                    href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
                    accent="bg-ink/10 text-ink hover:bg-ink/20"
                    icon={
                      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                        <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.5L4.7 21H1.5l7.5-8.6L1.2 3h6.6l4.6 6.1L17.5 3Zm-1.1 16h1.8L7.7 5H5.8l10.6 14Z" />
                      </svg>
                    }
                  />
                  <button
                    type="button"
                    onClick={onShare}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-xs font-semibold text-stone-base shadow-soft transition-transform hover:scale-[1.04]"
                  >
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                      <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1.6-5.5 4-11 11-11Z" />
                    </svg>
                    {copied ? "Link copied" : "Share"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card relative flex flex-col justify-center rounded-[2rem] p-8 shadow-soft">
            <span className="eyebrow !text-ink-soft">Nominations close in</span>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center sm:gap-3">
              {[
                { v: time?.days, k: "Days" },
                { v: time?.hours, k: "Hrs" },
                { v: time?.mins, k: "Min" },
                { v: time?.secs, k: "Sec" },
              ].map((t) => (
                <div
                  key={t.k}
                  className="rounded-2xl bg-stone-base/80 p-3 ring-1 ring-ink/5 sm:p-4"
                >
                  <span className="display block text-2xl text-brand-orange tabular-nums sm:text-3xl">
                    {t.v === undefined ? "—" : String(t.v).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
                    {t.k}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-ink">
              {time?.done
                ? "Nominations are now closed — thank you."
                : "Counting down to 31 October 2026, 23:59."}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Shortlist announced after close. Gala date to be confirmed.
            </p>
            <a
              href={NOMINATE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-purple-deep px-5 py-3 text-xs font-semibold uppercase tracking-widest text-stone-base shadow-soft transition-transform hover:scale-[1.03]"
            >
              Nominate now
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShareButton({
  label,
  href,
  icon,
  accent,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Share on ${label}`}
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${accent}`}
    >
      {icon}
      {label}
    </a>
  );
}
