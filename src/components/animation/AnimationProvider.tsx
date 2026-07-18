"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("gsap-ready");
    return () => document.documentElement.classList.remove("gsap-ready");
  }, []);

  useGSAP(
    () => {
      // Kill old triggers on route change
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Standard reveal animations
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      reveals.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Staggered children reveals: parent has data-reveal-children,
      // each direct child animates in sequence
      const staggerParents = gsap.utils.toArray<HTMLElement>(
        "[data-reveal-children]"
      );
      staggerParents.forEach((parent) => {
        const kids = Array.from(parent.children) as HTMLElement[];
        gsap.fromTo(
          kids,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Refresh after all images/layout settle
      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [pathname] }
  );

  return <div ref={containerRef}>{children}</div>;
}
