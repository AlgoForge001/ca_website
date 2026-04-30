import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as detailedServices } from "./data-Bz-YARaT.mjs";
import { C as Check } from "../_libs/lucide-react.mjs";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-black text-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: "What We Do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white max-w-3xl", children: "Full-Spectrum Tax, GST & Business Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-white/70", children: "Choose from a complete suite of compliance and advisory services tailored for individuals, professionals and businesses." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-pg space-y-10", children: detailedServices.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border border-l-[3px] border-l-brand-red rounded-sm p-7 md:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-brand-black mb-6", children: cat.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-brand-red mt-1 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
      ] }, item)) })
    ] }, cat.title)) }) })
  ] });
}
export {
  ServicesPage as component
};
