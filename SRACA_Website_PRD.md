# SRACA Website Redesign — Product Requirements Document

## 0. Role

You are acting as a **senior software engineer and senior UX designer**. Treat this brief as a real client engagement, not a template fill-in. You are expected to make opinionated design and architectural choices, justify them through the work, and produce something a design lead would be happy to ship. Where this document leaves a decision open, that's intentional — make the call.

## 1. Project Summary

Redesign the website for **SRACA — the Stockport Race & Culture Awards**, an annual awards gala and ceremony recognising outstanding individuals, groups and businesses contributing to diversity, race equality, and culture in Stockport, UK.

SRACA is run by **Stockport Race Equality Partnership (S-REP)**, a community organisation working to integrate communities, influence decision-makers, and improve outcomes for diverse groups. The current SRACA site is functional but visually flat and doesn't reflect the importance of the event. This redesign should feel like a credible, modern awards programme — closer to a national diversity awards site than a community noticeboard — while clearly belonging to the S-REP family.

## 2. Goals

- Make SRACA feel **credible, modern, and warmly celebratory**.
- Communicate the annual cycle: nominations open → shortlist → ceremony → winners celebrated.
- Drive three core actions: **nominate someone**, **buy/reserve gala tickets**, **become a sponsor**.
- Tie back visibly to S-REP without being a clone of the parent site.

## 3. Audience

- **Nominees & nominators** — community members, local businesses, charity workers.
- **Attendees** — past guests, local dignitaries, press, sponsors' staff.
- **Sponsors & partners** — local businesses and corporates deciding whether to fund a table or category.
- **Press/local media** covering the event and past winners.

## 4. Reference Websites

These are the calibration points for tone, polish, and how award sites are structured. Study them — particularly how they present categories, past winners, and sponsors — before designing.

- **National Diversity Awards** — https://www.nationaldiversityawards.co.uk/
- **British Diversity Awards** — https://www.britishdiversityawards.com/
- **GG2 Leadership & Diversity Awards** — https://gg2leadershipawards.co.uk/
- **Inclusive Awards** — https://inclusiveawards.co.uk/

Note these references are predominantly **light, bright, and warm** in palette. SRACA should sit in the same family — light/airy as a base, with rich accent colours doing the heavy lifting for celebration and prestige. Do not produce a dark/black-tie aesthetic.

## 5. Design Direction

**Mood: elegant, warm, community-celebratory, contemporary.** A site that feels proud and human, not corporate.

- **Light, airy base** with confident accent colours. Generous whitespace. Strong photography of real people.
- **Glass surfaces in the spirit of Apple's Liquid Glass** (iOS 26 / macOS Tahoe, 2025) — not flat glassmorphism. Translucent panels should feel like real, physical glass: gentle backdrop blur, soft specular highlights on the edges, subtle inner shadow for depth, and a faint light-refraction/lensing quality where content behind the glass bends slightly. Cards and nav surfaces should respond to hover with a soft shift in light, as if the glass is catching reflection. Apply this to cards, sticky navigation on scroll, modals, and key overlays — not as a wall-to-wall effect. Restraint is the whole point: it should feel like premium hardware, not a CSS demo.
- **Subtle, tasteful motion** — fade/slide-ins on scroll, soft parallax on hero imagery, gentle hover states (lift, glow, colour shift). Nothing that delays content.
- **Editorial typography** — a confident display face for headlines paired with a clean, highly readable body face. Avoid generic SaaS template fonts.
- **Photography** — real community and ceremony photography (people receiving awards, candid celebration, group shots reflecting Stockport's diversity). No corporate stock imagery.
- **Palette decision is yours.** Do not be told what colours to use. Reference last year's event used black-and-gold — do **not** repeat that. Use the SRACA mark (a gold/bronze gradient figure-and-star icon of two people celebrating) and the warm energy of the reference sites as the seed for your own palette. Pick something distinctive that holds together across the whole site.

## 6. Brand Relationship (non-negotiable)

- Footer and an "About" section must clearly state SRACA is presented by **Stockport Race Equality Partnership (S-REP)**, with a link to srep.co.uk.
- S-REP's identity uses a bold condensed display headline style and a community-first photography approach (real people, cut-out hero graphics, diverse faces front and centre). Echo this spirit — confidence, boldness, real human warmth — while giving SRACA its own distinct finish.
- SRACA's existing mark (gold/bronze gradient figure-and-star icon) is the visual seed. Evolve a motif and palette system from it.

## 7. Site Structure

Decide the structure yourself. The award site references above use a mix of single-scroll homepages and multi-page setups — pick what serves the content and the three core actions best. You decide whether categories, nominations, and the gallery live on the homepage or on dedicated pages.

The following content must exist somewhere on the site, in an order and grouping you justify:

- A strong landing/hero moment with this year's date, venue, and the primary CTAs (Nominate, Tickets).
- An About section connecting SRACA to S-REP.
- Award Categories — the emotional core. Give each category space, character, and a clear description. Placeholder list below.
- A nomination pathway — clear deadline, low friction to start.
- The Gala details — date, time, venue, dress code, table/ticket pathway, atmospheric imagery.
- Past Winners — a gallery that feels like recognition, not a database.
- Sponsors — logo presentation that's elegant and unified, plus a "become a sponsor" pathway.
- Contact & footer with S-REP attribution.

### Placeholder award categories (replace if real ones are supplied)
- Community Champion
- Young Changemaker
- Business in the Community
- Outstanding Volunteer
- Cultural Ambassador
- Lifetime Achievement

## 8. Functional Requirements

- Fully responsive: desktop, tablet, mobile. Glass/blur effects must degrade gracefully on mobile — performance over fidelity.
- Nomination and ticket CTAs link to forms (placeholder anchors fine for now).
- Past Winners gallery must be easy to extend year-over-year — treat as a repeatable component.
- Sponsor logos in muted/greyscale by default, full colour on hover, for a unified premium look.
- **Accessibility is a senior-level concern, not a checkbox.** Test contrast carefully on any glass/translucent surfaces — glassmorphism routinely fails WCAG. Keyboard navigation, focus states, alt text, semantic landmarks, reduced-motion support, all required.
- Fast load. Optimise hero media. No blocking animations. Lazy-load gallery and below-the-fold imagery.

## 9. Content & Voice

- Tone: warm but confident — "celebrating," "honouring," "recognising." Avoid corporate HR-speak and avoid charity-pity language equally.
- Use real or placeholder testimonial quotes from past nominees/winners where it adds emotional weight.
- Annually-changing content (date, venue, ticket links, sponsor list, winners) must be treated as content, not hard-coded design — make these easy to update.

## 10. Deliverables

- Responsive site (desktop, tablet, mobile) covering the content in Section 7.
- A coherent component library / design system: typography scale, colour palette, button/card/glass-panel patterns, motion principles. Document it briefly so it can be reused next year.
- Notes on the key design decisions you made and why — palette, structural choices, motion approach.

## 11. Out of Scope

- E-commerce/payment processing for tickets (link to a ticketing provider is fine).
- Nomination form backend logic (placeholder or external form tool is fine).
