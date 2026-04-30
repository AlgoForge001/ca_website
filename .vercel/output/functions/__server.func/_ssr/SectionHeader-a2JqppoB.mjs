import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `accent-bar ${center ? "mx-auto" : ""}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-brand-black", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: subtitle })
  ] });
}
export {
  SectionHeader as S
};
