/**
 * Central site configuration — business info, navigation, branches.
 * NOTE: Values marked TODO are placeholders. Replace with real data before launch.
 */

export const SITE = {
  name: "Shivrudra Cars",
  legalName: "Shivrudra Cars",
  shortName: "ShivRudra",
  tagline: "Multi-Brand Car Service & Premium Auto Workshop in Pune",
  description:
    "Professional multi-brand and luxury car workshop in Pune offering servicing, diagnostics, suspension, detailing, accident repair, insurance assistance and fleet maintenance.",
  // TODO: replace with the live domain
  url: "https://www.shivrudracars.com",
  locale: "en_IN",
  founder: "Samadhan Pawar",
  foundingYear: 2015,
  // TODO: replace with real contact details
  phone: "+91 90000 00000",
  phoneHref: "+919000000000",
  whatsapp: "919000000000",
  email: "info@shivrudracars.com",
  hours: "Mon–Sun: 9:00 AM – 8:00 PM",
  priceRange: "₹₹",
  social: {
    instagram: "https://instagram.com/shivrudracars",
    facebook: "https://facebook.com/shivrudracars",
    youtube: "https://youtube.com/@shivrudracars",
    google: "https://g.page/shivrudracars",
  },
} as const;

export type Branch = {
  id: string;
  name: string;
  addressLine: string;
  locality: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneHref: string;
  // TODO: replace with exact coordinates from Google Business Profile
  geo: { lat: number; lng: number };
  mapUrl: string;
  hours: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "rahatani",
    name: "Shivrudra Cars — Rahatani",
    addressLine: "TODO: Street address, Rahatani",
    locality: "Rahatani",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411017",
    country: "IN",
    phone: "+91 90000 00000",
    phoneHref: "+919000000000",
    geo: { lat: 18.6108, lng: 73.7797 },
    mapUrl: "https://maps.google.com/?q=Shivrudra+Cars+Rahatani+Pune",
    hours: "Mon–Sun: 9:00 AM – 8:00 PM",
  },
  {
    id: "pimple-saudagar",
    name: "Shivrudra Cars — Pimple Saudagar",
    addressLine: "TODO: Street address, Pimple Saudagar",
    locality: "Pimple Saudagar",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411027",
    country: "IN",
    phone: "+91 90000 00001",
    phoneHref: "+919000000001",
    geo: { lat: 18.5985, lng: 73.7935 },
    mapUrl: "https://maps.google.com/?q=Shivrudra+Cars+Pimple+Saudagar+Pune",
    hours: "Mon–Sun: 9:00 AM – 8:00 PM",
  },
];

export const SERVICE_AREAS = [
  "Rahatani",
  "Pimple Saudagar",
  "Wakad",
  "Baner",
  "Hinjawadi",
  "Pimpri",
  "Chinchwad",
  "Aundh",
  "Balewadi",
  "Nigdi",
  "Ravet",
  "Tathawade",
  "Punawale",
  "Pune",
];

export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Premium Cars", href: "/premium-cars" },
  { label: "Fleet", href: "/fleet-management" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "All Services", href: "/services" },
      { label: "Premium Cars", href: "/premium-cars" },
      { label: "Fleet Management", href: "/fleet-management" },
      { label: "Book a Service", href: "/contact#booking" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/privacy-policy#cookies" },
    ],
  },
];

export const KEYWORDS = [
  "car service pune",
  "car repair pune",
  "car workshop pune",
  "premium car service pune",
  "suspension repair pune",
  "car detailing pune",
  "engine repair pune",
  "multi brand car service",
  "luxury car workshop pune",
];
