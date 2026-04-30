import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-a2JqppoB.mjs";
import { a as team } from "./data-Bz-YARaT.mjs";
import "../_libs/lucide-react.mjs";
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-black text-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: "Our People" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white max-w-3xl", children: "Meet the Team Behind Your Compliance" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-pg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "The Professionals", subtitle: "A close-knit team committed to accuracy, integrity and personal service.", center: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-t-[3px] border-brand-red rounded-sm p-8 text-center hover:-translate-y-1 transition-transform shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-brand-black text-white font-display text-3xl font-bold", children: m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-brand-black", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-brand-red font-semibold mt-1 uppercase tracking-wider", children: m.role })
      ] }, m.name)) })
    ] }) })
  ] });
}
export {
  TeamPage as component
};
