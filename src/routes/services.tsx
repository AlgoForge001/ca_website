import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { detailedServices } from "@/lib/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Prakash Gajra – Tax & GST Practitioner" },
      { name: "description", content: "Complete Income Tax, GST, Accounting, Registration, Licensing, Payroll, Legal, Loan and Consultancy services under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">What We Do</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">Full-Spectrum Tax, GST & Business Services</h1>
          <p className="mt-5 max-w-2xl text-white/70">Choose from a complete suite of compliance and advisory services tailored for individuals, professionals and businesses.</p>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg space-y-10">
          {detailedServices.map((cat) => (
            <div key={cat.title} className="bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-7 md:p-9">
              <h2 className="text-2xl font-bold text-brand-black mb-6">{cat.title}</h2>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-brand-red mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
