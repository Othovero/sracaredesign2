import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";
import { SiteNav } from "@/components/sraca/SiteNav";
import { Hero } from "@/components/sraca/Hero";
import { About } from "@/components/sraca/About";
import { Categories } from "@/components/sraca/Categories";
import { NominateCTA } from "@/components/sraca/NominateCTA";
import { Highlights } from "@/components/sraca/Highlights";
import { Gala } from "@/components/sraca/Gala";
import { PastWinners } from "@/components/sraca/PastWinners";
import { Sponsors } from "@/components/sraca/Sponsors";
import { Contact } from "@/components/sraca/Contact";
import { SiteFooter } from "@/components/sraca/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_NAME },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-motif min-h-dvh text-foreground">
      {/* Faint film grain over the whole page */}
      <div aria-hidden className="grain-overlay" />
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Categories />
        <NominateCTA />
        <Highlights />
        <Gala />
        <PastWinners />
        <Sponsors />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
