import { createFileRoute } from "@tanstack/react-router";
import { itrDocuments, documentChecklists } from "@/lib/data";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">CHECKLISTS</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">Documents Required</h1>
          <p className="mt-5 max-w-2xl text-white/70">Select a service below to see the complete checklist of required documents.</p>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg max-w-3xl">
          <div className="bg-card border border-border rounded-sm p-6 md:p-8">
            <Accordion type="single" collapsible defaultValue="itr" className="w-full">
              {[
                {
                  id: "itr",
                  title: "ITR Filing (FY 2025-26 / AY 2026-27)",
                  items: itrDocuments,
                  whatsappMsg: "ITR Filing",
                },
                ...documentChecklists,
              ].map((list) => (
                <AccordionItem key={list.id} value={list.id} className="border-b border-border last:border-0">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-brand-red py-5">
                    {list.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ol className="space-y-4 mb-6 mt-2">
                      {list.items.map((d, i) => (
                        <li key={i} className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-brand-red text-white font-bold text-xs">{i + 1}</span>
                          <span className="text-sm pt-1 text-foreground">{d}</span>
                        </li>
                      ))}
                    </ol>
                    <a
                      href={`https://wa.me/919822979184?text=${encodeURIComponent(`Hi, I need help with ${list.whatsappMsg}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="h-4 w-4" /> Get Assistance on WhatsApp
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-4">Have a general question?</p>
            <a href="https://wa.me/919822979184" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-white border border-border px-6 py-3.5 text-sm font-semibold text-brand-black hover:bg-gray-50 transition-colors">
              <MessageCircle className="h-4 w-4 text-whatsapp" /> Chat with us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
