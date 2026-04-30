import logoSrc from "@/assets/logo-prakash-gajra.jpeg";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoSrc}
        alt="Prakash Gajra – More For Your Taxes"
        className="h-11 w-auto object-contain"
        loading="eager"
      />
      <div className="leading-tight hidden sm:block">
        <div className={`font-display text-base font-bold ${light ? "text-white" : "text-brand-black"}`}>
          Prakash Gajra
        </div>
        <div className={`text-[11px] uppercase tracking-[0.15em] font-semibold ${light ? "text-white/70" : "text-brand-red"}`}>
          Tax & GST Practitioner
        </div>
      </div>
    </div>
  );
}
