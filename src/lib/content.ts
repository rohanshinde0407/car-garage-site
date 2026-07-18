/** Brands, team, careers, testimonials, stats and premium data. */

/* ---------------- Brands ---------------- */
export type Brand = { name: string; logo: string };

export const BRANDS_SERVED: Brand[] = [
  { name: "Maruti Suzuki", logo: "/brand_logo/Suzuki-logo-640x285.jpg" },
  { name: "Hyundai", logo: "/brand_logo/hyundai-logo-2011-640.png" },
  { name: "Tata", logo: "/brand_logo/Tata-logo-2000-640x550.jpg" },
  { name: "Mahindra", logo: "/brand_logo/Mahindra-logo-640x316.jpg" },
  { name: "Honda", logo: "/brand_logo/honda-logo-2000-full-download.png" },
  { name: "Renault", logo: "/brand_logo/Renault-logo-2015-640x550.jpg" },
  { name: "Ford", logo: "/brand_logo/ford-logo-2017-download.png" },
  { name: "MG", logo: "/brand_logo/MG-logo-red-2010-640x550.jpg" },
  { name: "Jeep", logo: "/brand_logo/jeep-logo.png" },
  { name: "Datsun", logo: "/brand_logo/Datsun-logo-2013-640x344.jpg" },
  { name: "Fiat", logo: "/brand_logo/Fiat-logo-2006-640x550.jpg" },
];

/** Luxury brands shown on the Premium Cars page */
export const PREMIUM_BRANDS: Brand[] = [
  { name: "BMW", logo: "/Premium_brand_logo/bmw-logo-2020-gray.png" },
  { name: "Mercedes-Benz", logo: "/Premium_brand_logo/Mercedes-Benz-logo-2011-640x369.jpg" },
  { name: "Audi", logo: "/Premium_brand_logo/audi-logo-2016-640.png" },
  { name: "Volvo", logo: "/Premium_brand_logo/Volvo-logo-2014-640x550.jpg" },
  { name: "Jaguar", logo: "/Premium_brand_logo/jaguar-logo-2021-640.png" },
  { name: "Land Rover", logo: "/Premium_brand_logo/Land-Rover-logo-2011-640x335.jpg" },
  { name: "Porsche", logo: "/Premium_brand_logo/porsche-logo-2014-full-640.png" },
  { name: "MINI", logo: "/Premium_brand_logo/Mini-logo-2001-640x270.jpg" },
  { name: "BMW M", logo: "/Premium_brand_logo/BMW-M-logo-640x231.jpg" },
];

/** Additional multi-brand logos (non-luxury, used in marquee) */
export const OTHER_BRANDS: Brand[] = [
  { name: "Volkswagen", logo: "/Premium_brand_logo/Volkswagen-logo-2019-640x500.jpg" },
  { name: "Skoda", logo: "/Premium_brand_logo/Skoda-logo-2016-640x550.jpg" },
  { name: "Kia", logo: "/Premium_brand_logo/Kia-logo-640x321.jpg" },
  { name: "Chevrolet", logo: "/Premium_brand_logo/Chevrolet-logo-2013-640x281.jpg" },
  { name: "Isuzu", logo: "/Premium_brand_logo/Isuzu-logo-1991-640x106.jpg" },
  { name: "Mitsubishi", logo: "/Premium_brand_logo/Mitsubishi-logo-640x550.jpg" },
  { name: "MG", logo: "/Premium_brand_logo/MG-logo-red-2010-640x550.jpg" },
];

/* ---------------- Stats ---------------- */
export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const STATS: Stat[] = [
  { value: 25000, suffix: "+", label: "Cars Serviced" },
  { value: 50, suffix: "+", label: "Expert Services" },
  { value: 9, suffix: "+", label: "Luxury Brands" },
  { value: 4.9, prefix: "★ ", label: "Google Rating" },
];

/* ---------------- Service process ---------------- */
export const SERVICE_PROCESS = [
  { step: "01", title: "Book", desc: "Choose your service, vehicle and preferred slot online or on WhatsApp." },
  { step: "02", title: "Inspect", desc: "A digital, photo-backed inspection identifies exactly what your car needs." },
  { step: "03", title: "Approve", desc: "Review a transparent estimate and approve — no surprises, no hidden costs." },
  { step: "04", title: "Repair", desc: "Certified technicians work with genuine parts and specialist tools." },
  { step: "05", title: "Quality Check", desc: "A multi-point QC ensures every job meets our standard." },
  { step: "06", title: "Delivery", desc: "Doorstep drop with a clean car and a full service report." },
];

/* Full booking-to-delivery flow (from the blueprint). */
export const BOOKING_FLOW = [
  "Select Service", "Vehicle", "Date & Time", "Contact", "Confirmation",
  "Inspection", "Estimate", "Approval", "Repair", "QC", "Delivery",
];

/* ---------------- Trust indicators ---------------- */
export const TRUST_POINTS = [
  { title: "Genuine OEM Parts", desc: "Only genuine and reputed parts, confirmed with you before fitment." },
  { title: "Transparent Pricing", desc: "Written estimates and approval before any work begins." },
  { title: "Factory-Trained Experts", desc: "Multi-brand and luxury specialists with years of experience." },
  { title: "Digital Inspection", desc: "Photo-backed reports so you see exactly what your car needs." },
  { title: "Doorstep Pickup & Drop", desc: "Convenient collection and delivery across Pune." },
  { title: "Service Warranty", desc: "Workmanship warranty on labour and genuine parts." },
];

/* ---------------- Premium (luxury) services ---------------- */
export const PREMIUM_SERVICES = [
  { title: "OEM Diagnostics", desc: "Brand-specific diagnostic platforms for accurate fault-finding." },
  { title: "Air Suspension", desc: "Diagnosis, repair and calibration of air suspension systems." },
  { title: "DSG Transmission", desc: "Specialist DSG and automatic transmission service." },
  { title: "Turbocharger", desc: "Turbo inspection, repair and replacement." },
  { title: "ECU Programming", desc: "Coding, flashing and service resets." },
  { title: "Premium Detailing", desc: "Concours-level paint correction and protection." },
  { title: "Ceramic & Graphene Coating", desc: "Long-lasting gloss and paint protection." },
  { title: "Concierge Pickup & Drop", desc: "White-glove collection and delivery." },
  { title: "Digital Inspection Report", desc: "Detailed, photo-backed condition report." },
  { title: "Genuine OEM Parts", desc: "Authentic parts sourced for your marque." },
  { title: "Personal Service Advisor", desc: "One point of contact from booking to delivery." },
  { title: "Luxury Customer Lounge", desc: "Relax in comfort while we care for your car." },
];

/* ---------------- Fleet ---------------- */
export const FLEET_FEATURES = [
  { title: "Preventive Maintenance", desc: "Scheduled servicing that prevents breakdowns and downtime." },
  { title: "Annual Maintenance Contracts", desc: "Predictable costs with flexible AMC plans." },
  { title: "Doorstep Inspection", desc: "On-site inspection and minor servicing at your premises." },
  { title: "Fleet Dashboard", desc: "Track service history, schedules and downtime in one place." },
  { title: "Priority Support", desc: "Dedicated bays and a priority queue for fleet vehicles." },
  { title: "Consolidated Billing", desc: "Monthly invoicing with detailed per-vehicle breakdowns." },
];

/* ---------------- Team ---------------- */
export type TeamMember = { name: string; role: string; bio: string };

export const TEAM: TeamMember[] = [
  { name: "Samadhan Pawar", role: "Founder & Managing Director", bio: "Built Shivrudra Cars on a simple promise — dealership-quality care with honest, transparent pricing." },
  { name: "Workshop Manager", role: "Workshop Manager", bio: "Runs day-to-day operations across both branches and safeguards our quality standards." },
  { name: "Lead Service Advisor", role: "Service Advisor", bio: "Your first point of contact — translating car problems into clear, honest advice." },
  { name: "Master Technician", role: "Master Technician", bio: "Decades of hands-on experience diagnosing and repairing complex mechanical faults." },
  { name: "Luxury Specialist", role: "Luxury Car Specialist", bio: "Factory-trained on premium European marques with OEM-level diagnostics." },
  { name: "Detailing Expert", role: "Detailing Expert", bio: "A craftsman in paint correction, ceramic and graphene coatings." },
  { name: "Auto Electrician", role: "Master Auto Electrician", bio: "Specialist in modern vehicle electronics, ECU and wiring diagnostics." },
  { name: "Customer Care Lead", role: "Customer Care", bio: "Keeps you informed at every step and makes sure you leave delighted." },
];

/* ---------------- Careers ---------------- */
export type Role = { title: string; type: string; location: string; summary: string };

export const CAREERS: Role[] = [
  { title: "Service Advisor", type: "Full-time", location: "Rahatani / Pimple Saudagar", summary: "Advise customers, prepare estimates and coordinate the service journey." },
  { title: "Technician", type: "Full-time", location: "Rahatani / Pimple Saudagar", summary: "Diagnose and repair multi-brand vehicles to a high standard." },
  { title: "Luxury Technician", type: "Full-time", location: "Pimple Saudagar", summary: "Work on premium European marques with OEM diagnostic tools." },
  { title: "Detailer", type: "Full-time", location: "Rahatani", summary: "Deliver detailing, paint correction and coating services." },
  { title: "Painter", type: "Full-time", location: "Rahatani", summary: "Colour-matched painting and refinishing in a spray booth." },
  { title: "Electrician", type: "Full-time", location: "Pimple Saudagar", summary: "Handle auto-electrical diagnostics, wiring and electronics." },
  { title: "CRM Executive", type: "Full-time", location: "Rahatani", summary: "Manage customer relationships, follow-ups and feedback." },
  { title: "Workshop Manager", type: "Full-time", location: "Pimple Saudagar", summary: "Lead the team, manage operations and uphold quality." },
];

export const CAREER_PERKS = [
  "Competitive salary & incentives",
  "Ongoing technical training",
  "Modern, well-equipped workshops",
  "Clear growth path",
  "Supportive, professional team",
  "Employee car-service benefits",
];

/* ---------------- Testimonials ---------------- */
export type Testimonial = { name: string; area: string; car: string; quote: string; rating: number };

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Deshmukh", area: "Wakad", car: "Hyundai Creta", quote: "Transparent estimate, genuine parts and my car came back spotless. Easily the best service experience I've had in Pune.", rating: 5 },
  { name: "Sneha Kulkarni", area: "Baner", car: "BMW 3 Series", quote: "Their premium division is exceptional. OEM diagnostics, a dedicated advisor and concierge pickup — dealership quality at a fair price.", rating: 5 },
  { name: "Amit Sharma", area: "Aundh", car: "Mahindra XUV700", quote: "The digital inspection report showed me exactly what needed doing. No upselling, no surprises. Highly recommended.", rating: 5 },
  { name: "Priya Nair", area: "Hinjawadi", car: "Mercedes-Benz GLA", quote: "Ceramic coating and detailing turned my car heads-turning again. The finish is flawless.", rating: 5 },
  { name: "Vikram Patil", area: "Pimpri", car: "Toyota Fortuner", quote: "Handled my accident repair and insurance claim end-to-end. Stress-free and the panel work is perfect.", rating: 5 },
  { name: "Ananya Joshi", area: "Balewadi", car: "Audi Q3", quote: "Booked on WhatsApp, picked up from home, updated at every step. This is how car service should be.", rating: 5 },
];

/* ---------------- About: values & timeline ---------------- */
export const CORE_VALUES = [
  { title: "Transparency", desc: "Honest estimates and approvals before every job — always." },
  { title: "Craftsmanship", desc: "Precision work by trained specialists who take pride in the details." },
  { title: "Trust", desc: "Genuine parts, fair pricing and a warranty that stands behind our work." },
  { title: "Customer First", desc: "Convenience, communication and care at every touchpoint." },
];

export const TIMELINE = [
  { year: "2015", title: "The Beginning", desc: "Shivrudra Cars opens its first workshop in Rahatani with a small, dedicated team." },
  { year: "2018", title: "Growing Trust", desc: "Word-of-mouth and honest service grow our loyal customer base across PCMC." },
  { year: "2021", title: "Premium Division", desc: "We launch a dedicated luxury car division with OEM-level diagnostics." },
  { year: "2023", title: "Second Branch", desc: "A new state-of-the-art workshop opens in Pimple Saudagar." },
  { year: "2026", title: "Today", desc: "25,000+ cars serviced and a trusted name for multi-brand and luxury care in Pune." },
];
