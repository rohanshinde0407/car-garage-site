/** Blog index data. Full articles can be added later as MDX or a CMS. */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string; // ISO
  featured?: boolean;
};

export const BLOG_CATEGORIES = [
  "Maintenance",
  "Detailing",
  "Luxury",
  "Seasonal",
  "EV",
  "Safety",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "when-to-service-your-car",
    title: "When to Service Your Car: The Complete Pune Owner's Guide",
    excerpt: "Mileage, time and warning signs — how to know exactly when your car is due for a service in Pune's driving conditions.",
    category: "Maintenance",
    readTime: "6 min",
    date: "2026-06-28",
    featured: true,
  },
  {
    slug: "signs-of-suspension-failure",
    title: "7 Signs of Suspension Failure You Should Never Ignore",
    excerpt: "Clunks, uneven tyre wear and a bouncy ride — spot suspension trouble early and avoid a costly repair.",
    category: "Safety",
    readTime: "5 min",
    date: "2026-06-20",
    featured: true,
  },
  {
    slug: "ceramic-coating-guide",
    title: "Ceramic vs Graphene Coating: Which Is Right for Your Car?",
    excerpt: "A practical comparison of gloss, durability, heat resistance and cost to help you choose the right paint protection.",
    category: "Detailing",
    readTime: "7 min",
    date: "2026-06-12",
    featured: true,
  },
  {
    slug: "monsoon-car-maintenance",
    title: "Monsoon Car Maintenance Checklist for Pune Drivers",
    excerpt: "Wipers, tyres, brakes and underbody care — get your car monsoon-ready before the first heavy shower.",
    category: "Seasonal",
    readTime: "5 min",
    date: "2026-06-04",
  },
  {
    slug: "ev-maintenance-basics",
    title: "EV Maintenance 101: What Electric Car Owners Must Know",
    excerpt: "Batteries, brakes and software — how servicing an EV differs from a petrol or diesel car.",
    category: "EV",
    readTime: "6 min",
    date: "2026-05-26",
  },
  {
    slug: "luxury-car-ownership-pune",
    title: "The Smart Guide to Luxury Car Ownership in Pune",
    excerpt: "Keep your BMW, Mercedes or Audi in peak condition without the dealership premium.",
    category: "Luxury",
    readTime: "8 min",
    date: "2026-05-18",
  },
  {
    slug: "brake-warning-signs",
    title: "Brake Warning Signs: When to Stop and Get Them Checked",
    excerpt: "Squealing, vibration and a soft pedal — understand what your brakes are telling you.",
    category: "Safety",
    readTime: "4 min",
    date: "2026-05-10",
  },
  {
    slug: "ac-maintenance-tips",
    title: "Car AC Maintenance: Stay Cool Through the Pune Summer",
    excerpt: "Simple habits and timely servicing to keep your air conditioning ice-cold and efficient.",
    category: "Maintenance",
    readTime: "5 min",
    date: "2026-05-02",
  },
  {
    slug: "engine-oil-guide",
    title: "Engine Oil Explained: Grades, Intervals and Myths",
    excerpt: "5W-30 or 5W-40? Synthetic or mineral? Everything you need to pick the right oil.",
    category: "Maintenance",
    readTime: "6 min",
    date: "2026-04-24",
  },
  {
    slug: "car-detailing-worth-it",
    title: "Is Professional Car Detailing Worth It? An Honest Breakdown",
    excerpt: "What detailing really includes, what it costs, and how it protects your car's value.",
    category: "Detailing",
    readTime: "6 min",
    date: "2026-04-16",
  },
  {
    slug: "wheel-alignment-balancing",
    title: "Wheel Alignment vs Balancing: What's the Difference?",
    excerpt: "Two different jobs that both keep your ride smooth and your tyres lasting longer.",
    category: "Maintenance",
    readTime: "4 min",
    date: "2026-04-08",
  },
  {
    slug: "accident-repair-insurance",
    title: "After an Accident: A Step-by-Step Insurance Repair Guide",
    excerpt: "From the crash scene to a cashless claim — how to get your car repaired the right way.",
    category: "Safety",
    readTime: "7 min",
    date: "2026-03-30",
  },
];

export const FEATURED_POSTS = BLOG_POSTS.filter((p) => p.featured);
