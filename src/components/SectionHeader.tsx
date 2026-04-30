export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red mb-3">
          {eyebrow}
        </div>
      )}
      <div className={`accent-bar ${center ? "mx-auto" : ""}`} />
      <h2 className="text-3xl md:text-4xl font-bold text-brand-black">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
