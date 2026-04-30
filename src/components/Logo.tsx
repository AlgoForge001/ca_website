export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-black font-display text-xl font-extrabold tracking-tight">
        <span className="text-white">P</span>
        <span className="text-brand-red">G</span>
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-bold ${light ? "text-white" : "text-brand-black"}`}>
          Prakash Gajra
        </div>
        <div className="text-[11px] uppercase tracking-[0.15em] text-brand-red font-semibold">
          More For Your Taxes
        </div>
      </div>
    </div>
  );
}
