import { createFileRoute } from "@tanstack/react-router";
import { itrDocuments } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "ITR Documents Checklist FY 2025-26 / AY 2026-27 | Prakash Gajra" },
      { name: "description", content: "Complete checklist of documents required for Income Tax Return filing for FY 2025-26 / AY 2026-27." },
    ],
  }),
  component: DocumentsPage,
});

function DocumentsPage() {
  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">FY 2025-26 / AY 2026-27</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">Documents Required for ITR Filing</h1>
          <p className="mt-5 max-w-2xl text-white/70">Have these ready before you start. Our team can help you gather anything missing.</p>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg max-w-3xl">
          <div className="bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-8 md:p-10">
            <ol className="space-y-4">
              {itrDocuments.map((d, i) => (
                <li key={d} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-brand-red text-white font-bold text-sm">{i + 1}</span>
                  <span className="text-base pt-1 text-foreground">{d}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-4">Have a question about any document?</p>
            <a href="https://wa.me/919822979184" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us For Help
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
