import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Wallet, Globe2, Lock, Star, CheckCircle2 } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { services, itrDocuments, team, testimonials } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prakash Gajra – Expert Tax & GST Solutions Since 2001 | Palghar" },
      { name: "description", content: "Reliable, affordable & customized Income Tax, GST, Accounting and Business services for individuals & businesses across India. 25+ years of trusted service." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-brand-red/10 hidden lg:block" />
        <div className="container-pg relative py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Trusted Since 2001
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
              Expert Tax & GST<br />Solutions Since 2001
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Reliable, Affordable & Customized Tax Services for Individuals, Businesses
              & Companies Across India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:+919822979184" className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="https://wa.me/919822979184" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="container-pg grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { v: "25+", l: "Years Experience" },
              { v: "5000+", l: "Returns Filed" },
              { v: "500+", l: "GST Clients" },
              { v: "100%", l: "Compliance" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-8 text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-brand-red">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pg bg-background">
        <div className="container-pg">
          <SectionHeader
            eyebrow="What We Offer"
            title="Comprehensive Tax & Business Services"
            subtitle="From individual ITR filing to full-scale company compliance — one trusted partner for every financial need."
            center
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card-service group">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-red/10 text-brand-red mb-5">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pg bg-muted">
        <div className="container-pg">
          <SectionHeader eyebrow="Why Choose Us" title="Trusted by 5000+ Clients Nationwide" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Experienced Team", desc: "25+ years of practical tax & compliance expertise." },
              { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, fair fees with no hidden charges." },
              { icon: Globe2, title: "Pan India Service", desc: "Serving clients across every state of India." },
              { icon: Lock, title: "Confidential & Secure", desc: "Your financial data is treated with strict privacy." },
            ].map((f) => (
              <div key={f.title} className="bg-card p-7 rounded-sm border border-border">
                <f.icon className="h-8 w-8 text-brand-red mb-4" />
                <h3 className="text-base font-bold text-brand-black mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITR Documents */}
      <section className="section-pg bg-background">
        <div className="container-pg grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="ITR Filing AY 2026-27"
              title="Documents Required for ITR Filing"
              subtitle="Keep these handy for a smooth and quick income tax return filing experience."
            />
            <Link to="/documents" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all">
              View Full Checklist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-8">
            <ul className="grid sm:grid-cols-2 gap-3">
              {itrDocuments.map((d, i) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-sm bg-brand-red text-white text-[10px] font-bold shrink-0">{i + 1}</span>
                  <span className="text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-pg bg-muted">
        <div className="container-pg">
          <SectionHeader eyebrow="Our People" title="Meet the Team Behind Your Compliance" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((m) => (
              <div key={m.name} className="bg-card border-t-[3px] border-brand-red rounded-sm p-6 text-center hover:-translate-y-1 transition-transform">
                <div className="mx-auto mb-4 flex h-20 w-20 overflow-hidden items-center justify-center rounded-full bg-brand-black text-white font-display text-2xl font-bold">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                  ) : (
                    m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
                  )}
                </div>
                <h3 className="text-base font-bold text-brand-black">{m.name}</h3>
                <div className="text-xs text-brand-red font-semibold mt-1 uppercase tracking-wider">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pg bg-background">
        <div className="container-pg">
          <SectionHeader eyebrow="Client Stories" title="What Our Clients Say" center />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-card border border-border p-7 rounded-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-bold text-sm text-brand-black">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red text-white">
        <div className="container-pg py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to File Your Returns?</h2>
            <p className="mt-2 text-white/85">Get in touch today for a no-obligation consultation.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/919822979184" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-brand-red hover:bg-white/90 transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href="tel:+919822979184" className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
