import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader } from "./SectionHeader-a2JqppoB.mjs";
import { s as services, i as itrDocuments, a as team, t as testimonials } from "./data-Bz-YARaT.mjs";
import { P as Phone, c as MessageCircle, A as ArrowRight, i as ShieldCheck, W as Wallet, j as Earth, k as Lock, f as Star } from "../_libs/lucide-react.mjs";
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
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
      className: "relative overflow-hidden bg-brand-black text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        "aria-hidden": true, className: "absolute inset-0 opacity-[0.07]", style: {
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 h-full w-1/2 bg-brand-red/10 hidden lg:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "container-pg relative py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "inline-flex items-center gap-2 rounded-sm border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-red" }),
              "Trusted Since 2002"
            ]
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
            className: "mt-6 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-white", children: [
              "Expert Tax & GST",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Solutions Since 2001"
            ]
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-white/70 leading-relaxed", children: "Reliable, Affordable & Customized Tax Services for Individuals, Businesses & Companies Across India." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "mt-8 flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
              href: "tel:+919822979157", className: "inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                " Call Now"
              ]
            }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
              href: "https://wa.me/919822979157", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                " WhatsApp Us"
              ]
            })
            ]
          })
          ]
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "relative border-t border-white/10 bg-black/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "container-pg grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10", children: [{
            v: "25+",
            l: "Years Experience"
          }, {
            v: "5000+",
            l: "Returns Filed"
          }, {
            v: "500+",
            l: "GST Clients"
          }, {
            v: "100%",
            l: "Compliance"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "px-6 py-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl font-extrabold text-brand-red", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-white/60", children: s.l })
            ]
          }, s.l))
        })
      })
      ]
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
      className: "section-pg bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What We Offer", title: "Comprehensive Tax & Business Services", subtitle: "From individual ITR filing to full-scale company compliance — one trusted partner for every financial need.", center: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "card-service group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-sm bg-brand-red/10 text-brand-red mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-brand-black mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
            ]
          }, s.title))
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
            to: "/services", className: "inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all", children: [
              "Explore All Services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          })
        })
        ]
      })
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
      className: "section-pg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why Choose Us", title: "Trusted by 5000+ Clients Nationwide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: [{
            icon: ShieldCheck,
            title: "Experienced Team",
            desc: "25+ years of practical tax & compliance expertise."
          }, {
            icon: Wallet,
            title: "Affordable Pricing",
            desc: "Transparent, fair fees with no hidden charges."
          }, {
            icon: Earth,
            title: "Pan India Service",
            desc: "Serving clients across every state of India."
          }, {
            icon: Lock,
            title: "Confidential & Secure",
            desc: "Your financial data is treated with strict privacy."
          }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "bg-card p-7 rounded-sm border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-8 w-8 text-brand-red mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-brand-black mb-2", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
            ]
          }, f.title))
        })
        ]
      })
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
      className: "section-pg bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "container-pg grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "ITR Filing AY 2026-27", title: "Documents Required for ITR Filing", subtitle: "Keep these handy for a smooth and quick income tax return filing experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
            to: "/documents", className: "inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all", children: [
              "View Full Checklist ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          })
          ]
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
            className: "grid sm:grid-cols-2 gap-3", children: itrDocuments.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
              className: "flex items-start gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-5 w-5 items-center justify-center rounded-sm bg-brand-red text-white text-[10px] font-bold shrink-0", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: d })
              ]
            }, d))
          })
        })
        ]
      })
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
      className: "section-pg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our People", title: "Meet the Team Behind Your Compliance", center: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-5", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "bg-card border-t-[3px] border-brand-red rounded-sm p-6 text-center hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-black text-white font-display text-2xl font-bold", children: m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-brand-black", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand-red font-semibold mt-1 uppercase tracking-wider", children: m.role })
            ]
          }, m.name))
        })
        ]
      })
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
      className: "section-pg bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Client Stories", title: "What Our Clients Say", center: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "grid gap-6 md:grid-cols-3", children: testimonials.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "bg-card border border-border p-7 rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "flex gap-0.5 mb-4", children: Array.from({
                length: t.rating
              }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-brand-red text-brand-red" }, i))
            }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
              className: "text-sm text-foreground leading-relaxed", children: [
                '"',
                t.text,
                '"'
              ]
            }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "mt-5 pt-5 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-brand-black", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.location })
              ]
            })
            ]
          }, t.name))
        })
        ]
      })
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
      className: "bg-brand-red text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "container-pg py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: "Ready to File Your Returns?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/85", children: "Get in touch today for a no-obligation consultation." })
          ]
        }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
            href: "https://wa.me/919822979157", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-brand-red hover:bg-white/90 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              " WhatsApp Us"
            ]
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
            href: "tel:+919822979157", className: "inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              " Call"
            ]
          })
          ]
        })
        ]
      })
    })
    ]
  });
}
export {
  HomePage as component
};
