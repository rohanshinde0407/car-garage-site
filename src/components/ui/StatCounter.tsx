import type { Stat } from "@/lib/content";

export function StatCounter({ stat }: { stat: Stat }) {
  const display = stat.value % 1 === 0
    ? stat.value.toLocaleString("en-IN")
    : stat.value.toString();

  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-gradient-gold">
        {stat.prefix}
        {display}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-white/70">{stat.label}</p>
    </div>
  );
}
