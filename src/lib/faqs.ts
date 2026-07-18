/** FAQ knowledge base grouped by category (from the blueprint's 10 groups). */

export type Faq = { question: string; answer: string };
export type FaqGroup = { id: string; title: string; faqs: Faq[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "general",
    title: "General",
    faqs: [
      { question: "Where is Shivrudra Cars located?", answer: "We operate two workshops in Pune — Rahatani and Pimple Saudagar — and serve customers across Wakad, Baner, Hinjawadi, Aundh, Balewadi, Pimpri-Chinchwad, Nigdi, Ravet and nearby areas." },
      { question: "Which car brands do you service?", answer: "We are a multi-brand workshop servicing all Indian and imported cars, plus a dedicated premium division for BMW, Mercedes-Benz, Audi, Volvo, Jaguar, Land Rover, Porsche, MINI and Lexus." },
      { question: "What are your working hours?", answer: "Both branches are open Monday to Sunday, 9:00 AM to 8:00 PM. Emergency assistance can be arranged outside these hours." },
      { question: "Do you use genuine spare parts?", answer: "Yes. We use genuine OEM and reputed OES parts, and we always confirm the part type and price with you before fitment." },
      { question: "How experienced is your team?", answer: "Our technicians are factory-trained specialists with years of multi-brand and luxury car experience, led by founder Samadhan Pawar." },
      { question: "Can I get an estimate before work begins?", answer: "Absolutely. Every job starts with a digital inspection and a transparent written estimate that you approve before any repair starts." },
    ],
  },
  {
    id: "service",
    title: "Service",
    faqs: [
      { question: "How often should I service my car?", answer: "As a rule of thumb, every 10,000 km or once a year — whichever comes first. Your owner's manual and driving conditions may call for a shorter interval." },
      { question: "How long does a routine service take?", answer: "A standard periodic service is usually completed the same day. Larger mechanical or body jobs are quoted with a clear timeline upfront." },
      { question: "Do you offer pickup and drop?", answer: "Yes, doorstep pickup and drop is available across our service areas, and complimentary for premium customers." },
      { question: "Will servicing here affect my manufacturer warranty?", answer: "No. Under the Competition Act, independent servicing with genuine parts does not void your warranty, and we maintain full service records for you." },
      { question: "Do you provide a digital inspection report?", answer: "Yes — you receive a photo-backed digital inspection report highlighting what's healthy, what needs attention now, and what to watch." },
      { question: "Can you handle major engine and gearbox work?", answer: "Yes. Our master technicians perform engine overhauls, clutch and gearbox rebuilds, suspension and steering repairs in-house." },
    ],
  },
  {
    id: "premium",
    title: "Premium",
    faqs: [
      { question: "What makes your premium service different?", answer: "Dedicated luxury bays, OEM-level diagnostic tools, genuine parts, a personal service advisor, concierge pickup/drop and a comfortable customer lounge." },
      { question: "Do you have OEM diagnostic equipment?", answer: "Yes. We use brand-specific diagnostic platforms for accurate fault-finding, ECU programming and service resets on luxury vehicles." },
      { question: "Can you service air suspension and DSG transmissions?", answer: "Yes — air suspension, DSG/automatic transmissions, turbocharger and ECU work are core strengths of our premium division." },
      { question: "Are premium repairs covered by a warranty?", answer: "All premium work is backed by a service warranty on labour and genuine parts, with details provided on your estimate." },
      { question: "Do you offer a concierge experience?", answer: "Yes. Premium customers get doorstep pickup/drop, a dedicated advisor, real-time updates and a digital inspection report." },
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    faqs: [
      { question: "Do you provide a warranty on repairs?", answer: "Yes. We offer a workmanship warranty on labour and pass on the manufacturer's warranty on genuine parts. Terms are listed on your invoice." },
      { question: "What does the service warranty cover?", answer: "It covers defects in the specific repair or part we replaced. Wear-and-tear, misuse and unrelated failures are not covered." },
      { question: "How do I make a warranty claim?", answer: "Bring your invoice and vehicle to either branch. We'll inspect and, if the issue falls under warranty, resolve it at no additional cost." },
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    faqs: [
      { question: "Do you handle insurance claims?", answer: "Yes. We assist with cashless and reimbursement claims, coordinate with surveyors and manage the paperwork for accident repairs." },
      { question: "Are you a cashless workshop?", answer: "We work with most major insurers for cashless accident repairs. Share your policy details and we'll confirm eligibility." },
      { question: "How long does an insurance repair take?", answer: "It depends on parts availability and survey approval. We keep you updated at every stage and push for the fastest possible turnaround." },
      { question: "Will you help with claim documentation?", answer: "Yes — estimates, photos, surveyor coordination and final billing are all handled by our insurance desk." },
    ],
  },
  {
    id: "fleet",
    title: "Fleet",
    faqs: [
      { question: "Do you offer corporate fleet maintenance?", answer: "Yes. We provide preventive maintenance, Annual Maintenance Contracts (AMC), doorstep inspection and priority servicing for fleets of any size." },
      { question: "Is there a fleet dashboard?", answer: "Fleet clients get a maintenance dashboard with service history, upcoming schedules, downtime tracking and consolidated billing." },
      { question: "Can you minimise vehicle downtime?", answer: "Yes — priority bays, preventive scheduling and doorstep inspection are designed to keep your fleet on the road." },
      { question: "How is fleet billing handled?", answer: "We offer consolidated monthly invoicing with detailed per-vehicle breakdowns and flexible corporate payment terms." },
    ],
  },
  {
    id: "payment",
    title: "Payment",
    faqs: [
      { question: "What payment methods do you accept?", answer: "Cash, UPI, credit/debit cards and net banking. Corporate and fleet clients can use approved credit terms." },
      { question: "Do you take an advance for repairs?", answer: "For major jobs or special-order parts we may take a part-payment advance, which is always adjusted against your final bill." },
      { question: "Can I get a GST invoice?", answer: "Yes, we provide a proper GST tax invoice for every service." },
      { question: "Are there any hidden charges?", answer: "Never. You approve a written estimate before work starts, and we call you for approval before any additional work." },
    ],
  },
  {
    id: "booking",
    title: "Booking",
    faqs: [
      { question: "How do I book a service?", answer: "Book online through our enquiry form, call us, or message us on WhatsApp. Choose your service, vehicle, preferred date and branch." },
      { question: "Can I choose a specific date and time?", answer: "Yes. Select your preferred slot during booking and we'll confirm availability at your chosen branch." },
      { question: "Can I reschedule my booking?", answer: "Of course. Contact us at least a few hours in advance and we'll move your slot to a convenient time." },
      { question: "Do I need to book in advance?", answer: "Walk-ins are welcome, but booking ahead guarantees your slot and reduces waiting time, especially on weekends." },
    ],
  },
  {
    id: "detailing",
    title: "Detailing",
    faqs: [
      { question: "What is the difference between ceramic and graphene coating?", answer: "Both protect paint and add gloss. Graphene typically offers higher durability, better heat dissipation and reduced water spotting compared to standard ceramic." },
      { question: "How long does a coating last?", answer: "Depending on the product and care, ceramic coatings last 1–3 years and graphene coatings can last longer. We advise on maintenance to maximise life." },
      { question: "Do you offer paint correction before coating?", answer: "Yes. We perform multi-stage paint correction to remove swirls and scratches before applying any coating." },
      { question: "Can you restore faded headlights and alloys?", answer: "Yes — headlight restoration and alloy wheel refinishing are part of our detailing menu." },
    ],
  },
  {
    id: "emergency",
    title: "Emergency",
    faqs: [
      { question: "Do you offer breakdown or towing assistance?", answer: "Yes. Call us and we'll arrange towing to the nearest branch and prioritise your repair." },
      { question: "What should I do after an accident?", answer: "Ensure everyone is safe, photograph the scene, inform your insurer, and call us — we'll guide you and handle the repair and claim." },
      { question: "Can you help if my car won't start?", answer: "Yes. We help with jump-starts, battery replacement and on-the-spot diagnostics wherever possible." },
      { question: "Is emergency help available after hours?", answer: "We arrange emergency assistance outside normal hours wherever possible — call our helpline and we'll do our best to reach you." },
    ],
  },
];

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.faqs);
export const TOTAL_FAQS = ALL_FAQS.length;
