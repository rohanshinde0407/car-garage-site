import type { TeamMember } from "@/lib/content";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-6 text-center card-hover hover:border-gold/30 hover:shadow-soft">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white font-display font-bold text-xl">
        {initials}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink/60">{member.bio}</p>
    </div>
  );
}
