import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as itrDocuments } from "./data-Bz-YARaT.mjs";
import { c as MessageCircle } from "../_libs/lucide-react.mjs";
function DocumentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-black text-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: "FY 2025-26 / AY 2026-27" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white max-w-3xl", children: "Documents Required for ITR Filing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-white/70", children: "Have these ready before you start. Our team can help you gather anything missing." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: itrDocuments.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-brand-red text-white font-bold text-sm", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base pt-1 text-foreground", children: d })
      ] }, d)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Have a question about any document?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919822979157", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-sm bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp Us For Help"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  DocumentsPage as component
};
