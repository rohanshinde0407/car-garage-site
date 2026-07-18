import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-6 card-hover hover:border-gold/30 hover:shadow-soft">
      <h3 className="font-display text-lg font-semibold">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.blurb}</p>
    </div>
  );
}
