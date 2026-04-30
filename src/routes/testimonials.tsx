import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Prakash Gajra – Tax & GST Practitioner" },
      { name: "description", content: "Real feedback from clients we've served across India for over two decades." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">Client Stories</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">What Our Clients Say</h1>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border p-7 rounded-sm hover:-translate-y-1 transition-transform">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-bold text-sm text-brand-black">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
