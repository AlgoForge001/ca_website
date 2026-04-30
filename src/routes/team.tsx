import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { team } from "@/lib/data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Prakash Gajra – Tax & GST Practitioner" },
      { name: "description", content: "Meet the experienced professionals behind Prakash Gajra & Associates." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">Our People</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">Meet the Team Behind Your Compliance</h1>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg">
          <SectionHeader title="The Professionals" subtitle="A close-knit team committed to accuracy, integrity and personal service." center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="bg-card border-t-[3px] border-brand-red rounded-sm p-8 text-center hover:-translate-y-1 transition-transform shadow-sm">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-brand-black text-white font-display text-3xl font-bold">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="text-lg font-bold text-brand-black">{m.name}</h3>
                <div className="text-sm text-brand-red font-semibold mt-1 uppercase tracking-wider">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
