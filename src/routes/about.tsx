import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { team } from "@/lib/data";
import { Award, Target, Eye, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Prakash Gajra – Tax & GST Practitioner" },
      { name: "description", content: "Learn about Prakash Gajra & Associates — a trusted Income Tax & GST practice serving clients across India since 2001." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">About the Firm</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">A Quarter Century of Trusted Tax Practice</h1>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg grid lg:grid-cols-2 gap-12">
          <div>
            <div className="accent-bar" />
            <h2 className="text-3xl font-bold mb-5">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2001 by Mr. Prakash Gajra, our practice has grown from a small Palghar office
              into a full-service tax and compliance firm trusted by thousands of clients across India.
              For over 25 years, we have stood by individuals, professionals, traders and companies —
              guiding them through every change in India's tax landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, with a dedicated team and a reputation built on accuracy and honesty, we continue
              to deliver the same personal attention that defined our practice from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card-service">
              <Target className="h-7 w-7 text-brand-red mb-4" />
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">To simplify taxation and compliance for every Indian — accurately, affordably, and on time.</p>
            </div>
            <div className="card-service">
              <Eye className="h-7 w-7 text-brand-red mb-4" />
              <h3 className="font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground">To be India's most trusted independent tax and business advisory practice.</p>
            </div>
            <div className="card-service">
              <Award className="h-7 w-7 text-brand-red mb-4" />
              <h3 className="font-bold mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground">Integrity, accuracy, confidentiality and a deeply personal client relationship.</p>
            </div>
            <div className="card-service">
              <ShieldCheck className="h-7 w-7 text-brand-red mb-4" />
              <h3 className="font-bold mb-2">Our Promise</h3>
              <p className="text-sm text-muted-foreground">Transparent fees, prompt response, and 100% compliance — every time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pg bg-muted">
        <div className="container-pg">
          <SectionHeader eyebrow="Our People" title="The Team" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((m) => (
              <div key={m.name} className="bg-card border-t-[3px] border-brand-red rounded-sm p-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-black text-white font-display text-2xl font-bold">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="text-base font-bold">{m.name}</h3>
                <div className="text-xs text-brand-red font-semibold mt-1 uppercase tracking-wider">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
