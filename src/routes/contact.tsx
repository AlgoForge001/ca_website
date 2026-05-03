import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { detailedServices } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Prakash Gajra – Tax & GST Practitioner Palghar" },
      { name: "description", content: "Get in touch with Prakash Gajra & Associates in Palghar. Call, email or WhatsApp for tax and GST consultations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-brand-black text-white py-20 md:py-28">
        <div className="container-pg">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">Get In Touch</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">We're Here To Help</h1>
        </div>
      </section>

      <section className="section-pg">
        <div className="container-pg">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            {[
              { icon: Phone, title: "Phone", value: "+91 9822979184", href: "tel:+919822979184" },
              { icon: Mail, title: "Email", value: "prakashgajra@gmail.com", href: "mailto:prakashgajra@gmail.com" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat With Us", href: "https://wa.me/919822979184" },
              { icon: MapPin, title: "Office", value: "Palghar, Maharashtra", href: "https://maps.app.goo.gl/Ngy5VEd8bo3rpR3XA" },
            ].map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card-service block">
                <c.icon className="h-7 w-7 text-brand-red mb-4" />
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.title}</div>
                <div className="font-semibold text-brand-black break-words">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="accent-bar" />
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">We respond within one business day.</p>

              {submitted ? (
                <div className="bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-6">
                  <div className="font-bold text-brand-black">Thank you!</div>
                  <p className="text-sm text-muted-foreground mt-1">Your inquiry has been received. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Full Name" name="name" required />
                    <Input label="Mobile" name="mobile" type="tel" required />
                  </div>
                  <Input label="Email" name="email" type="email" required />
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Service Required</label>
                    <select required className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red">
                      <option value="">Select a service</option>
                      {detailedServices.map((s) => (<option key={s.title} value={s.title}>{s.title}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                    <textarea rows={5} required className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center rounded-sm bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-6">
                <h3 className="font-bold mb-3">Office Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  201, Vraj, Second Floor,<br />
                  Above Gandhi Distributor,<br />
                  Plot No. 24, Rajnikamal Park,<br />
                  Behind Reliance Trends,<br />
                  Mahim Road, Palghar (W),<br />
                  Maharashtra – 401404
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-sm border border-border">
                <video src="/address.mp4" controls className="w-full h-auto" />
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=Palghar+West+Maharashtra+401404&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a href="https://wa.me/919822979184" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full rounded-sm bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input {...props} className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
    </div>
  );
}
