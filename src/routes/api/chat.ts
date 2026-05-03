// Chat with Prakash Gajra firm assistant via Lovable AI Gateway
const SYSTEM_PROMPT = `You are the friendly virtual assistant for Prakash Gajra – Income Tax & GST Practitioner, a trusted tax firm in Palghar, Maharashtra serving clients across India since 2001.

FIRM INFO:
- Founder: Prakash Gajra (Founder & Chairman). Co-Founder & CEO: Arya Gajra. Team: Manjula Gajra (Admin Head), Prajakta Raut (Head Accountant), Sonali Gawad (Accountant).
- 25+ years of experience, 5000+ ITRs filed, 500+ GST clients.
- Phone: +91 9822979184 | Email: prakashgajra@gmail.com | WhatsApp: https://wa.me/919822979184
- Office: 201, Vraj, 2nd Floor, Above Gandhi Distributor, Plot No. 24, Rajnikamal Park, Behind Reliance Trends, Mahim Road, Palghar (W) – 401404.

SERVICES: Income Tax (ITR for individuals, proprietorship, partnership, LLP, Pvt Ltd; capital gains; tax planning; advance tax; notice replies; TDS; PAN), GST (registration, GSTR-1, GSTR-3B, annual return, audit, refunds, e-way bill), Accounting (bookkeeping, Tally, P&L, balance sheet, MIS, audit prep), Business Registration (proprietorship, partnership, LLP, Pvt Ltd, OPC, MSME/Udyam, Startup), Licenses (FSSAI, Udyam, Gumasta, Shop & Establishment, Professional Tax, IEC, Trade License, DSC), Payroll (EPF, ESIC, payroll, salary structuring, labour law), Legal Documents (rent agreement, leave & license, affidavits, drafting), Loans & Finance, Business Consultancy.

ITR DOCUMENTS (FY 2025-26 / AY 2026-27): PAN, Aadhaar, bank details, Form 16, Form 26AS/AIS, interest certificates, investment proofs, home loan interest, capital gain statements, rent receipts, medical insurance, donation receipts.

GUIDELINES:
- Be warm, professional, and concise. Use plain language.
- Answer questions about the firm, services, documents, fees (give general guidance only; suggest they call/WhatsApp for an exact quote), and basic tax/GST queries.
- For complex personal tax advice, urge the user to call +91 9822979184 or WhatsApp the firm.
- Never invent prices, deadlines, or legal advice you are unsure about.
- Keep responses short (2-4 short paragraphs or a short list). Use markdown sparingly.`;

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            messages?: Array<{ role: "user" | "assistant"; content: string }>;
          };
          const messages = Array.isArray(body.messages) ? body.messages : [];

          if (messages.length === 0) {
            return new Response(JSON.stringify({ error: "No messages provided" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Trim history to last 20 turns to keep prompt small
          const trimmed = messages.slice(-20).map((m) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: String(m.content || "").slice(0, 4000),
          }));

          const apiKey = process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;
          
          if (!apiKey) {
            console.warn("API key is missing. Using mock response.");
            return new Response(
              JSON.stringify({ 
                reply: "The chatbot is currently in setup mode. Please configure the API key." 
              }), 
              {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "HTTP-Referer": "https://prakashgajra.com",
              "X-Title": "Prakash Gajra Website",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
            }),
          });

          if (!aiRes.ok) {
            const text = await aiRes.text();
            console.error("OpenRouter API error:", aiRes.status, text);
            return new Response(JSON.stringify({ error: "AI service error. Please check your API key." }), {
              status: 502,
              headers: { "Content-Type": "application/json" },
            });
          }

          const data = (await aiRes.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const reply = data.choices?.[0]?.message?.content?.trim() ?? "I'm sorry, I couldn't generate a response.";

          return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("Chat handler error:", err);
          return new Response(JSON.stringify({ error: "Unexpected server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
