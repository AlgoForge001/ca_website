import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as detailedServices } from "./data-Bz-YARaT.mjs";
import { P as Phone, b as Mail, c as MessageCircle, a as MapPin } from "../_libs/lucide-react.mjs";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-black text-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white max-w-3xl", children: "We're Here To Help" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-14", children: [{
        icon: Phone,
        title: "Phone",
        value: "+91 9822979157",
        href: "tel:+919822979157"
      }, {
        icon: Mail,
        title: "Email",
        value: "prakashgajra@gmail.com",
        href: "mailto:prakashgajra@gmail.com"
      }, {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "Chat With Us",
        href: "https://wa.me/919822979157"
      }, {
        icon: MapPin,
        title: "Office",
        value: "Palghar, Maharashtra",
        href: "https://maps.app.goo.gl/Ngy5VEd8bo3rpR3XA"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "card-service block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-7 w-7 text-brand-red mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-brand-black break-words", children: c.value })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "accent-bar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-2", children: "Send Us a Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "We respond within one business day." }),
          submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-brand-black", children: "Thank you!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Your inquiry has been received. We'll get back to you shortly." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            setSubmitted(true);
          }, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Full Name", name: "name", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Mobile", name: "mobile", type: "tel", required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", name: "email", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Service Required" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, className: "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service" }),
                detailedServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.title, children: s.title }, s.title))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, required: true, className: "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "inline-flex items-center justify-center rounded-sm bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors", children: "Submit Inquiry" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-3", children: "Office Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
              "201, Vraj, Second Floor,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Above Gandhi Distributor,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Plot No. 24, Rajnikamal Park,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Behind Reliance Trends,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Mahim Road, Palghar (W),",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Maharashtra – 401404"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] w-full overflow-hidden rounded-sm border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Office Location", src: "https://www.google.com/maps?q=Palghar+West+Maharashtra+401404&output=embed", className: "h-full w-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919822979157", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 w-full rounded-sm bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            " Chat on WhatsApp"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function Input({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" })
  ] });
}
export {
  ContactPage as component
};
