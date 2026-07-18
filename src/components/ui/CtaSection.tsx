import Link from "next/link";
import { SITE } from "@/lib/site";

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  showWhatsApp?: boolean;
  dark?: boolean;
};

export function CtaSection({
  title = "Ready to Book Your Service?",
  subtitle = "Get transparent pricing, genuine parts and expert care for your car.",
  showWhatsApp = true,
  dark = true,
}: CtaSectionProps) {
  return (
    <section
      data-reveal
      className={`py-16 md:py-24 ${dark ? "bg-ink-gradient text-white" : ""}`}
    >
      <div className="container-x text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className={`mt-4 text-lg max-w-xl mx-auto ${dark ? "text-white/70" : "text-ink/60"}`}>
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact#booking"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
          >
            Book a Service
          </Link>
          {showWhatsApp && (
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-8 py-3.5 text-sm font-semibold transition-colors ${
                dark
                  ? "border-white/20 text-white hover:border-gold hover:text-gold"
                  : "border-ink/20 text-ink hover:border-gold hover:text-gold"
              }`}
            >
              WhatsApp Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
