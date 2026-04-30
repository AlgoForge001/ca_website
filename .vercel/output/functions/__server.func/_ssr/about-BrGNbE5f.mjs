import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-a2JqppoB.mjs";
import { a as team } from "./data-Bz-YARaT.mjs";
import { T as Target, E as Eye, h as Award, i as ShieldCheck } from "../_libs/lucide-react.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-black text-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: "About the Firm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white max-w-3xl", children: "A Quarter Century of Trusted Tax Practice" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "accent-bar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-5", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Founded in 2001 by Mr. Prakash Gajra, our practice has grown from a small Palghar office into a full-service tax and compliance firm trusted by thousands of clients across India. For over 25 years, we have stood by individuals, professionals, traders and companies — guiding them through every change in India's tax landscape." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Today, with a dedicated team and a reputation built on accuracy and honesty, we continue to deliver the same personal attention that defined our practice from day one." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-service", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-7 w-7 text-brand-red mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "To simplify taxation and compliance for every Indian — accurately, affordably, and on time." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-service", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-7 w-7 text-brand-red mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Our Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "To be India's most trusted independent tax and business advisory practice." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-service", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-7 w-7 text-brand-red mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Our Values" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Integrity, accuracy, confidentiality and a deeply personal client relationship." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-service", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-7 w-7 text-brand-red mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Our Promise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Transparent fees, prompt response, and 100% compliance — every time." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our People", title: "The Team", center: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-5", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-t-[3px] border-brand-red rounded-sm p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-black text-white font-display text-2xl font-bold", children: m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand-red font-semibold mt-1 uppercase tracking-wider", children: m.role })
      ] }, m.name)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
