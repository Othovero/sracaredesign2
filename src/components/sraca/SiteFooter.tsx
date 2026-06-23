import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { SracaLockup } from "./Logo";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/RaceEqualitySREP",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/srep_gm?utm_source=ig_web_button_share_sheet&igsh=YWRsNW5taDE5NXdk",
    Icon: FaInstagram,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-purple-deep px-4 pt-20 pb-10 text-stone-base">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <SracaLockup variant="white" className="h-11 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-base/70">
              The Stockport Race &amp; Culture Awards celebrate the
              individuals, groups and businesses shaping a more equitable,
              vibrant Stockport.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-stone-base/60">
              Presented by{" "}
              <a
                href="https://srep.co.uk"
                target="_blank"
                rel="noreferrer"
                className="border-b border-brand-yellow/40 pb-0.5 text-stone-base hover:border-brand-yellow hover:text-brand-yellow"
              >
                Stockport Race Equality Partnership
              </a>
            </p>

            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`SRACA on ${label}`}
                  className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-stone-base/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:bg-brand-yellow hover:text-brand-purple-deep"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Awards"
            links={[
              ["Categories", "#categories"],
              ["Nominate", "#nominate"],
              ["Past winners", "#winners"],
            ]}
          />
          <FooterCol
            title="The Gala"
            links={[
              ["Tickets", "#tickets"],
              ["Venue", "#gala"],
              ["Sponsorship", "#sponsors"],
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              ["awards@srep.co.uk", "mailto:awards@srep.co.uk"],
              ["Instagram", "https://www.instagram.com/srep_gm?utm_source=ig_web_button_share_sheet&igsh=YWRsNW5taDE5NXdk"],
              ["Facebook", "https://www.facebook.com/RaceEqualitySREP"],
              ["S-REP", "https://srep.co.uk"],
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-widest text-stone-base/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} SRACA — Stockport Race &amp; Culture Awards</span>
          <span>Stockport, UK</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([label, href]) => {
          const external = href.startsWith("http");
          return (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="text-stone-base/75 transition-colors hover:text-stone-base"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
