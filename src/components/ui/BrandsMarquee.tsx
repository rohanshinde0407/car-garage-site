import Image from "next/image";
import type { Brand } from "@/lib/content";

export function BrandsMarquee({ brands }: { brands: Brand[] }) {
  return (
    <div className="overflow-hidden marquee-paused" aria-label="Brands we service">
      <div className="animate-marquee flex w-max items-center gap-14 py-4">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex h-14 w-28 flex-shrink-0 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={112}
              height={56}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
