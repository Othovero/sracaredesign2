export const GALA = {
  dateLong: "Friday 16 April 2027",
  dateShort: "Fri 16 April 2027",
  venueName: "Royal Nawaab Pyramid",
  venueAddress: "The Pyramid Kings Valley, Yew Street, Stockport SK4 2JU",
  venueUrl: "https://royalnawaab.com/pyramid/",
  doors: "6pm",
  carriages: "11pm",
  dressCode: "Cultural attire and dress to impress",
  // Doors to carriages in UTC (16 April 2027 is BST, so 6pm to 11pm local).
  startUtc: "20270416T170000Z",
  endUtc: "20270416T220000Z",
};

const CAL_TITLE = "SRACA 2027 Awards Gala";
const CAL_LOCATION = `${GALA.venueName}, ${GALA.venueAddress}`;
const CAL_DETAILS = `The Stockport Race & Culture Awards gala. Doors ${GALA.doors}, carriages ${GALA.carriages}. Dress code: ${GALA.dressCode}. https://sraca.co.uk/#gala`;

// Served by src/routes/sraca-gala-2027[.]ics.ts for Apple Calendar, Outlook desktop, etc.
export const GALA_ICS_PATH = "/sraca-gala-2027.ics";

export const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: CAL_TITLE,
    dates: `${GALA.startUtc}/${GALA.endUtc}`,
    location: CAL_LOCATION,
    details: CAL_DETAILS,
    ctz: "Europe/London",
  }).toString();

const toIso = (utc: string) =>
  `${utc.slice(0, 4)}-${utc.slice(4, 6)}-${utc.slice(6, 8)}T${utc.slice(9, 11)}:${utc.slice(11, 13)}:00Z`;

export const OUTLOOK_CALENDAR_URL =
  "https://outlook.live.com/calendar/0/action/compose?" +
  new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: CAL_TITLE,
    startdt: toIso(GALA.startUtc),
    enddt: toIso(GALA.endUtc),
    location: CAL_LOCATION,
    body: CAL_DETAILS,
  }).toString();

const icsEscape = (s: string) => s.replace(/[\\;,]/g, (c) => `\\${c}`);

// RFC 5545: lines over 75 octets continue on the next line, prefixed by a space.
const icsFold = (line: string) => line.match(/.{1,74}/g)!.join("\r\n ");

export function buildGalaIcs() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SRACA//Awards Gala//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:sraca-gala-2027@sraca.co.uk",
    "DTSTAMP:20261111T000000Z",
    `DTSTART:${GALA.startUtc}`,
    `DTEND:${GALA.endUtc}`,
    `SUMMARY:${icsEscape(CAL_TITLE)}`,
    `LOCATION:${icsEscape(CAL_LOCATION)}`,
    `DESCRIPTION:${icsEscape(CAL_DETAILS)}`,
    "URL:https://sraca.co.uk/#gala",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .map(icsFold)
    .join("\r\n")
    .concat("\r\n");
}

// Change here to reroute all sponsorship enquiries.
export const SPONSORSHIP_EMAIL = "email@srep.co.uk";
