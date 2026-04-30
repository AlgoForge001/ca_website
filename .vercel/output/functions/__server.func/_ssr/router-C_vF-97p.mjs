import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as Phone, X, M as Menu, F as Facebook, I as Instagram, L as Linkedin, Y as Youtube, a as MapPin, b as Mail, c as MessageCircle, d as MessageSquare, e as LoaderCircle, S as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-EmbUHkn5.css";
const logoSrc = "/assets/logo-prakash-gajra-HNZwr0Xw.jpeg";
function Logo({ light = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logoSrc,
        alt: "Prakash Gajra – More For Your Taxes",
        className: "h-11 w-auto object-contain",
        loading: "eager"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight hidden sm:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-base font-bold ${light ? "text-white" : "text-brand-black"}`, children: "Prakash Gajra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[11px] uppercase tracking-[0.15em] font-semibold ${light ? "text-white/70" : "text-brand-red"}`, children: "Tax & GST Practitioner" })
    ] })
  ] });
}
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/documents", label: "Documents" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg flex h-20 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-7", children: [
        navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            activeProps: { className: "text-brand-red" },
            activeOptions: { exact: l.to === "/" },
            className: "text-sm font-medium text-foreground hover:text-brand-red transition-colors",
            children: l.label
          },
          l.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+919822979157",
            className: "inline-flex items-center gap-2 rounded-sm bg-brand-red px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              "+91 9822979157"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Toggle menu",
          onClick: () => setOpen(!open),
          className: "lg:hidden p-2",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg py-4 flex flex-col gap-1", children: [
      navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          activeProps: { className: "text-brand-red bg-muted" },
          activeOptions: { exact: l.to === "/" },
          className: "px-3 py-3 text-sm font-medium rounded-sm hover:bg-muted",
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:+919822979157",
          className: "mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-4 py-3 text-sm font-semibold text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            "+91 9822979157"
          ]
        }
      )
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-brand-black text-white/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { light: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-white/60", children: "Trusted Income Tax & GST Practitioner serving individuals and businesses across India since 2001." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-3", children: [Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "social", className: "flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 hover:border-brand-red hover:text-brand-red transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/team", label: "Our Team" },
          { to: "/blog", label: "Blog" },
          { to: "/testimonials", label: "Testimonials" },
          { to: "/contact", label: "Contact" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "hover:text-brand-red transition-colors", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-4", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: ["Income Tax", "GST Services", "Accounting", "Business Registration", "Licenses", "Payroll"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-brand-red transition-colors", children: s }) }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-brand-red shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "201, Vraj, 2nd Floor, Above Gandhi Distributor, Plot No. 24, Rajnikamal Park, Mahim Road, Palghar (W) – 401404" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-brand-red shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919822979157", className: "hover:text-brand-red", children: "+91 9822979157" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-brand-red shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:prakashgajra@gmail.com", className: "hover:text-brand-red break-all", children: "prakashgajra@gmail.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-pg py-5 text-xs text-white/50 text-center", children: "© 2025 Prakash Gajra – Income Tax & GST Practitioner. All Rights Reserved." }) })
  ] });
}
function WhatsAppFloat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/919822979157",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-7 w-7" })
    }
  );
}
const WELCOME = {
  role: "assistant",
  content: "Hello! I'm the virtual assistant for Prakash Gajra – Tax & GST Practitioner. Ask me about ITR filing, GST, business registration, required documents, or anything about our services."
};
function ChatBot() {
  const [open, setOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([WELCOME]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);
  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content: data.error || "Sorry, I couldn't respond just now. Please try again or WhatsApp us at +91 9822979157."
          }
        ]);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: data.reply || "..." }]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network error. Please try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpen((o) => !o),
        "aria-label": "Open chat",
        className: "fixed bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg hover:scale-110 transition-transform",
        children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6" })
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[380px] h-[540px] max-h-[calc(100vh-8rem)] flex flex-col rounded-sm border border-border bg-card shadow-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-black text-white px-5 py-4 border-b-[3px] border-brand-red", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base", children: "Ask Prakash Gajra" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/60 mt-0.5", children: "Virtual assistant • Replies instantly" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-4 space-y-3 bg-muted/40", children: [
        messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `max-w-[85%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "bg-brand-red text-white" : "bg-card border border-border text-foreground"}`,
                children: m.content
              }
            )
          },
          i
        )),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm px-3.5 py-2.5 text-sm text-muted-foreground inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }),
          " Thinking…"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            send();
          },
          className: "border-t border-border p-3 flex gap-2 bg-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: input,
                onChange: (e) => setInput(e.target.value),
                placeholder: "Ask about ITR, GST, services…",
                className: "flex-1 rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red",
                disabled: loading
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading || !input.trim(),
                className: "inline-flex items-center justify-center rounded-sm bg-brand-red text-white px-4 hover:bg-brand-red-dark transition-colors disabled:opacity-50",
                "aria-label": "Send",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-brand-black", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-sm bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$9 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prakash Gajra – Income Tax & GST Practitioner | Palghar" },
      { name: "description", content: "Trusted Income Tax & GST Practitioner in Palghar since 2001. Reliable, affordable tax services for individuals, businesses & companies across India." },
      { name: "author", content: "Prakash Gajra" },
      { property: "og:title", content: "Prakash Gajra – Income Tax & GST Practitioner" },
      { property: "og:description", content: "Expert Tax & GST solutions since 2001. More For Your Taxes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFloat, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBot, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./testimonials-f91_2Z-5.mjs");
const Route$8 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Client Testimonials | Prakash Gajra – Tax & GST Practitioner"
    }, {
      name: "description",
      content: "Real feedback from clients we've served across India for over two decades."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./team-DtAXH2B3.mjs");
const Route$7 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Our Team | Prakash Gajra – Tax & GST Practitioner"
    }, {
      name: "description",
      content: "Meet the experienced professionals behind Prakash Gajra & Associates."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services-WDttLhIx.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services | Prakash Gajra – Tax & GST Practitioner"
    }, {
      name: "description",
      content: "Complete Income Tax, GST, Accounting, Registration, Licensing, Payroll, Legal, Loan and Consultancy services under one roof."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./documents-B_J3tRJ3.mjs");
const Route$5 = createFileRoute("/documents")({
  head: () => ({
    meta: [{
      title: "ITR Documents Checklist FY 2025-26 / AY 2026-27 | Prakash Gajra"
    }, {
      name: "description",
      content: "Complete checklist of documents required for Income Tax Return filing for FY 2025-26 / AY 2026-27."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-DMvalSFW.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | Prakash Gajra – Tax & GST Practitioner Palghar"
    }, {
      name: "description",
      content: "Get in touch with Prakash Gajra & Associates in Palghar. Call, email or WhatsApp for tax and GST consultations."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-ivGtDTn8.mjs");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Blog | Prakash Gajra – Tax & GST Updates"
    }, {
      name: "description",
      content: "Latest updates and insights on Income Tax, GST and personal finance from Prakash Gajra & Associates."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BrGNbE5f.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us | Prakash Gajra – Tax & GST Practitioner"
    }, {
      name: "description",
      content: "Learn about Prakash Gajra & Associates — a trusted Income Tax & GST practice serving clients across India since 2001."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B9ZG9oVW.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Prakash Gajra – Expert Tax & GST Solutions Since 2001 | Palghar"
    }, {
      name: "description",
      content: "Reliable, affordable & customized Income Tax, GST, Accounting and Business services for individuals & businesses across India. 25+ years of trusted service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SYSTEM_PROMPT = `You are the friendly virtual assistant for Prakash Gajra – Income Tax & GST Practitioner, a trusted tax firm in Palghar, Maharashtra serving clients across India since 2001.

FIRM INFO:
- Founder: Prakash Gajra (Founder & Chairman). Co-Founder & CEO: Arya Gajra. Team: Manjula Gajra (Admin Head), Prajakta Raut (Head Accountant), Sonali Gawad (Accountant).
- 25+ years of experience, 5000+ ITRs filed, 500+ GST clients.
- Phone: +91 9822979157 | Email: prakashgajra@gmail.com | WhatsApp: https://wa.me/919822979157
- Office: 201, Vraj, 2nd Floor, Above Gandhi Distributor, Plot No. 24, Rajnikamal Park, Behind Reliance Trends, Mahim Road, Palghar (W) – 401404.

SERVICES: Income Tax (ITR for individuals, proprietorship, partnership, LLP, Pvt Ltd; capital gains; tax planning; advance tax; notice replies; TDS; PAN), GST (registration, GSTR-1, GSTR-3B, annual return, audit, refunds, e-way bill), Accounting (bookkeeping, Tally, P&L, balance sheet, MIS, audit prep), Business Registration (proprietorship, partnership, LLP, Pvt Ltd, OPC, MSME/Udyam, Startup), Licenses (FSSAI, Udyam, Gumasta, Shop & Establishment, Professional Tax, IEC, Trade License, DSC), Payroll (EPF, ESIC, payroll, salary structuring, labour law), Legal Documents (rent agreement, leave & license, affidavits, drafting), Loans & Finance, Business Consultancy.

ITR DOCUMENTS (FY 2025-26 / AY 2026-27): PAN, Aadhaar, bank details, Form 16, Form 26AS/AIS, interest certificates, investment proofs, home loan interest, capital gain statements, rent receipts, medical insurance, donation receipts.

GUIDELINES:
- Be warm, professional, and concise. Use plain language.
- Answer questions about the firm, services, documents, fees (give general guidance only; suggest they call/WhatsApp for an exact quote), and basic tax/GST queries.
- For complex personal tax advice, urge the user to call +91 9822979157 or WhatsApp the firm.
- Never invent prices, deadlines, or legal advice you are unsure about.
- Keep responses short (2-4 short paragraphs or a short list). Use markdown sparingly.`;
const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const messages = Array.isArray(body.messages) ? body.messages : [];
          if (messages.length === 0) {
            return new Response(JSON.stringify({ error: "No messages provided" }), {
              status: 400,
              headers: { "Content-Type": "application/json" }
            });
          }
          const trimmed = messages.slice(-20).map((m) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: String(m.content || "").slice(0, 4e3)
          }));
          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "AI not configured" }), {
              status: 500,
              headers: { "Content-Type": "application/json" }
            });
          }
          const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed]
            })
          });
          if (!aiRes.ok) {
            const text = await aiRes.text();
            console.error("AI Gateway error:", aiRes.status, text);
            if (aiRes.status === 429) {
              return new Response(
                JSON.stringify({ error: "Too many requests. Please try again shortly." }),
                { status: 429, headers: { "Content-Type": "application/json" } }
              );
            }
            if (aiRes.status === 402) {
              return new Response(
                JSON.stringify({ error: "AI credits exhausted. Please contact the site owner." }),
                { status: 402, headers: { "Content-Type": "application/json" } }
              );
            }
            return new Response(JSON.stringify({ error: "AI service error" }), {
              status: 502,
              headers: { "Content-Type": "application/json" }
            });
          }
          const data = await aiRes.json();
          const reply = data.choices?.[0]?.message?.content?.trim() ?? "";
          return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        } catch (err) {
          console.error("Chat handler error:", err);
          return new Response(JSON.stringify({ error: "Unexpected server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
          });
        }
      }
    }
  }
});
const TestimonialsRoute = Route$8.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$9
});
const TeamRoute = Route$7.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$9
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$9
});
const DocumentsRoute = Route$5.update({
  id: "/documents",
  path: "/documents",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ApiChatRoute = Route.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  ContactRoute,
  DocumentsRoute,
  ServicesRoute,
  TeamRoute,
  TestimonialsRoute,
  ApiChatRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
