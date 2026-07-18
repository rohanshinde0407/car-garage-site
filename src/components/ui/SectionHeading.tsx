type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  gold?: boolean;
  center?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  gold,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${gold ? "text-gradient-gold" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-ink/60 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
