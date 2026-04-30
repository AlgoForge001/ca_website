import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Prakash Gajra – Tax & GST Updates" },
      { name: "description", content: "Latest updates and insights on Income Tax, GST and personal finance from Prakash Gajra & Associates." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "ITR Filing for AY 2026-27: What's New", date: "Mar 15, 2026", category: "Tax Updates", excerpt: "Key changes in the new ITR forms and what taxpayers need to know before filing this year." },
  { title: "GST Annual Return: Common Mistakes to Avoid", date: "Feb 28, 2026", category: "GST Updates", excerpt: "A practical guide to filing GSTR-9 accurately and avoiding the errors that trigger notices." },
  { title: "Smart Tax Saving Investments for FY 2025-26", date: "Feb 10, 2026", category: "Finance Tips", excerpt: "Compare ELSS, PPF, NPS and insurance to maximise your Section 80C deductions this year." },
];

function BlogPage() {
  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">Insights</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">Tax & GST Updates That Matter</h1>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="bg-card border border-border rounded-sm overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="aspect-[16/10] bg-brand-black relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">{p.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.date}
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
