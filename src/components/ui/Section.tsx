type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  noReveal?: boolean;
};

export function Section({ children, className = "", dark, id, noReveal }: SectionProps) {
  return (
    <section
      id={id}
      {...(!noReveal && { "data-reveal": "" })}
      className={`py-16 md:py-24 ${dark ? "bg-ink-gradient text-white" : ""} ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
