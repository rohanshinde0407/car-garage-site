import Link from "next/link";
import { SITE, BRANCHES, FOOTER_NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl font-bold text-white">
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{SITE.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">Instagram</a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">Facebook</a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors">YouTube</a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Branches */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {BRANCHES.map((branch) => (
              <div key={branch.id} className="text-sm">
                <p className="font-semibold text-white">{branch.name}</p>
                <p className="mt-1">{branch.addressLine}, {branch.locality}, {branch.city} — {branch.postalCode}</p>
                <p className="mt-1">
                  <a href={`tel:${branch.phoneHref}`} className="hover:text-gold transition-colors">{branch.phone}</a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
