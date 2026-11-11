import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildGalaIcs } from "@/lib/event";

export const Route = createFileRoute("/sraca-gala-2027.ics")({
  server: {
    handlers: {
      GET: async () =>
        new Response(buildGalaIcs(), {
          headers: {
            "Content-Type": "text/calendar; charset=utf-8",
            "Content-Disposition": 'attachment; filename="sraca-gala-2027.ics"',
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
