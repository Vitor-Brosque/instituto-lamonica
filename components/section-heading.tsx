type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-brand-tint" : "text-brand"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.12] tracking-tight ${
          dark ? "text-canvas" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-canvas/70" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
