/**
 * JSON-LD structured data builders (schema.org).
 * Covers: Organization, WebSite, AutoRepair/LocalBusiness (per branch),
 * Service, FAQPage, BreadcrumbList, AggregateRating + Review.
 */
import { SITE, BRANCHES, SERVICE_AREAS, type Branch } from "@/lib/site";

const abs = (path: string) => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/** Aggregate rating reused across schemas. TODO: sync with live Google rating. */
export const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "820",
  bestRating: "5",
  worstRating: "1",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs("/brand/logo.png"),
    image: abs("/og/home.jpg"),
    description: SITE.description,
    founder: { "@type": "Person", name: SITE.founder },
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: Object.values(SITE.social),
    areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: a })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-IN",
  };
}

function branchSchema(branch: Branch) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.url}/#branch-${branch.id}`,
    name: branch.name,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    url: SITE.url,
    image: abs("/og/home.jpg"),
    logo: abs("/brand/logo.png"),
    telephone: branch.phone,
    email: SITE.email,
    priceRange: SITE.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.addressLine,
      addressLocality: branch.locality,
      addressRegion: branch.region,
      postalCode: branch.postalCode,
      addressCountry: branch.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.geo.lat,
      longitude: branch.geo.lng,
    },
    hasMap: branch.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: a })),
    aggregateRating: AGGREGATE_RATING,
    sameAs: Object.values(SITE.social),
  };
}

export function localBusinessSchema() {
  return BRANCHES.map(branchSchema);
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(service: { name: string; description: string; category?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    category: service.category,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: a })),
  };
}

export function itemListSchema(name: string, items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: abs(item.href),
    })),
  };
}
