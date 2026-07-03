import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "../lib/seo";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stockport Race & Culture Awards (SRACA)",
  alternateName: "SRACA",
  url: SITE_URL,
  logo: `${SITE_URL}/sraca-mark.svg`,
  image: SITE_OG_IMAGE,
  description: SITE_DESCRIPTION,
  areaServed: {
    "@type": "City",
    name: "Stockport",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
  },
  location: {
    "@type": "Place",
    name: "The Space",
    address: {
      "@type": "PostalAddress",
      streetAddress: "26 St. Petersgate",
      addressLocality: "Stockport",
      addressRegion: "Greater Manchester",
      postalCode: "SK1 1HD",
      addressCountry: "GB",
    },
  },
  sameAs: [
    "https://www.facebook.com/RaceEqualitySREP",
    "https://www.instagram.com/srep_gm",
    "https://srep.co.uk",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Stockport Race Equality Partnership (S-REP)",
    url: "https://srep.co.uk",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_NAME },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "SRACA, Stockport Race and Culture Awards, diversity awards Stockport, race equality awards Greater Manchester, community awards Manchester, S-REP, Stockport Race Equality Partnership, Stockport gala, UK diversity awards, nominate community award",
      },
      { name: "author", content: "Stockport Race Equality Partnership" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#2e0845" },

      // Geo / local SEO - Stockport, Greater Manchester, UK
      { name: "geo.region", content: "GB-ENG" },
      { name: "geo.placename", content: "Stockport, Greater Manchester, UK" },
      { name: "geo.position", content: "53.4084;-2.1494" },
      { name: "ICBM", content: "53.4084, -2.1494" },

      // Open Graph
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: SITE_OG_IMAGE },
      { property: "og:image:alt", content: "Guests celebrating at the SRACA gala in Stockport Town Hall" },

      // Twitter / X card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_NAME },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_OG_IMAGE },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/sraca-mark.svg" },
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        attrs: { type: "application/ld+json" },
        children: JSON.stringify(ORGANIZATION_JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
