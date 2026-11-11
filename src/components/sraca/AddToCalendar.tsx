import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GALA_ICS_PATH, GOOGLE_CALENDAR_URL, OUTLOOK_CALENDAR_URL } from "@/lib/event";

const options = [
  { label: "Google Calendar", href: GOOGLE_CALENDAR_URL, external: true },
  { label: "Apple Calendar (iPhone, Mac)", href: GALA_ICS_PATH, external: false },
  { label: "Outlook.com", href: OUTLOOK_CALENDAR_URL, external: true },
  { label: "Outlook desktop / other (.ics)", href: GALA_ICS_PATH, external: false },
];

export function AddToCalendar({ className = "" }: { className?: string }) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={`inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-deep ${className}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18M12 14v4M10 16h4" strokeLinecap="round" />
        </svg>
        Add to calendar
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="z-[60] min-w-[15rem] rounded-2xl bg-white p-1.5"
      >
        {options.map((o) => (
          <DropdownMenuItem
            key={o.label}
            asChild
            className="cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-ink"
          >
            {/* No download attr on the .ics: iOS Safari then offers "Add to Calendar"
                instead of saving to Files. The server sends it as an attachment. */}
            <a href={o.href} {...(o.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {o.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
