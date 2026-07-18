/** Service catalogue — 50+ services grouped into categories (from the brand blueprint). */

export type Service = {
  name: string;
  slug: string;
  blurb: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: ServiceIcon;
  summary: string;
  services: Service[];
};

export type ServiceIcon =
  | "maintenance"
  | "mechanical"
  | "electrical"
  | "ac"
  | "bodyshop"
  | "detailing"
  | "tyres";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const mk = (name: string, blurb: string): Service => ({ name, slug: slug(name), blurb });

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "periodic-maintenance",
    title: "Periodic Maintenance",
    icon: "maintenance",
    summary: "Scheduled servicing that keeps your car reliable, efficient and warranty-safe.",
    services: [
      mk("Engine Oil", "Grade-correct engine oil replacement for smooth, protected performance."),
      mk("Oil Filter", "Genuine oil filter replacement to keep lubrication clean."),
      mk("Air Filter", "Restores airflow for better mileage and throttle response."),
      mk("Cabin Filter", "Fresh, dust-free air inside your cabin."),
      mk("Fuel Filter", "Protects injectors and maintains fuel efficiency."),
      mk("Coolant Flush", "Prevents overheating with a full coolant system flush."),
      mk("Brake Fluid", "Moisture-free brake fluid for a firm, safe pedal."),
      mk("Transmission Oil", "Smooth shifting with the right transmission fluid."),
      mk("Differential Oil", "Protects gears and bearings in the drivetrain."),
      mk("Spark Plug", "Reliable ignition and fuel economy with fresh plugs."),
      mk("Injector Cleaning", "Restores spray pattern for power and efficiency."),
      mk("Timing Inspection", "Belt/chain inspection to prevent costly engine damage."),
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical",
    icon: "mechanical",
    summary: "Expert engine, transmission and suspension work by master technicians.",
    services: [
      mk("Engine Repair", "Precise diagnosis and repair of engine faults."),
      mk("Engine Overhaul", "Full rebuild to bring tired engines back to life."),
      mk("Clutch", "Clutch replacement for smooth, slip-free driving."),
      mk("Gearbox", "Manual & automatic gearbox repair and rebuild."),
      mk("Suspension", "Complete suspension repair for comfort and control."),
      mk("Steering", "Steering repair for precise, safe handling."),
      mk("Shock Absorber", "Restore ride comfort and stability."),
      mk("Wheel Bearing", "Eliminate noise and vibration from worn bearings."),
      mk("Driveshaft", "Repair of CV joints and driveshaft assemblies."),
      mk("Mounting", "Engine & gearbox mount replacement to cut vibration."),
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    icon: "electrical",
    summary: "Advanced auto-electrical diagnostics and repair for modern vehicles.",
    services: [
      mk("Battery", "Testing and replacement with genuine batteries."),
      mk("Alternator", "Charging system repair to keep you powered."),
      mk("Starter", "Reliable cranking with starter motor service."),
      mk("ECU", "ECU diagnostics, repair and reprogramming."),
      mk("Sensors", "Fault-code driven sensor diagnosis and replacement."),
      mk("Wiring", "Safe repair of damaged or aged wiring harnesses."),
      mk("Lighting", "Headlamp, tail-lamp and interior lighting fixes."),
      mk("Horn", "Horn repair and upgrades."),
      mk("Camera", "Reverse & 360° camera installation and repair."),
      mk("Parking Sensors", "Parking sensor fitment and calibration."),
    ],
  },
  {
    id: "ac",
    title: "Air Conditioning",
    icon: "ac",
    summary: "Stay cool with complete AC servicing and repair.",
    services: [
      mk("Gas Refill", "AC gas top-up with leak testing."),
      mk("Compressor", "AC compressor repair and replacement."),
      mk("Condenser", "Condenser cleaning and replacement."),
      mk("Evaporator", "Evaporator service for fresh, cold air."),
      mk("Cooling Test", "Full performance test of the cooling system."),
    ],
  },
  {
    id: "body-shop",
    title: "Body Shop",
    icon: "bodyshop",
    summary: "Factory-grade denting, painting and accident repair.",
    services: [
      mk("Denting", "Dent removal that restores original panel lines."),
      mk("Painting", "Computerised colour-matched painting in a booth."),
      mk("Bumper", "Bumper repair, respray and replacement."),
      mk("Scratch", "Scratch and swirl removal."),
      mk("Accident Repair", "End-to-end collision repair with insurance help."),
      mk("Chassis Alignment", "Frame straightening for structural safety."),
    ],
  },
  {
    id: "detailing",
    title: "Detailing",
    icon: "detailing",
    summary: "Protect and transform your car with premium detailing.",
    services: [
      mk("Foam Wash", "pH-balanced foam wash that's gentle on paint."),
      mk("Interior Detailing", "Deep clean and sanitisation of the cabin."),
      mk("Exterior Detailing", "Paint correction and gloss enhancement."),
      mk("Ceramic Coating", "Long-lasting gloss and paint protection."),
      mk("Graphene Coating", "Next-gen coating with superior durability."),
      mk("PPF Consultation", "Paint protection film advice and fitment."),
      mk("Headlight Restoration", "Clear, bright headlights again."),
      mk("Alloy Restoration", "Refinish and protect your alloy wheels."),
      mk("Engine Bay Detailing", "Safe, thorough engine bay cleaning."),
    ],
  },
  {
    id: "tyres",
    title: "Tyres & Wheels",
    icon: "tyres",
    summary: "Balanced, aligned wheels for a safe, smooth ride.",
    services: [
      mk("Alignment", "Computerised wheel alignment."),
      mk("Balancing", "Precision wheel balancing to remove vibration."),
      mk("Rotation", "Tyre rotation for even wear."),
      mk("Nitrogen", "Nitrogen inflation for stable pressure."),
      mk("Replacement", "Genuine tyre supply and fitment."),
    ],
  },
];

export const TOTAL_SERVICES = SERVICE_CATEGORIES.reduce(
  (sum, c) => sum + c.services.length,
  0
);

/** Flat list for schema / sitemap-style listings. */
export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) =>
  c.services.map((s) => ({ ...s, category: c.title }))
);
