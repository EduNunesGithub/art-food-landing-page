"use client";

import React from "react";
import { Hero } from "@/components/hero";

export const HeroSection = () => {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <section
      className="flex items-center justify-center overflow-x-hidden overflow-y-hidden px-6 py-24 w-full"
      ref={ref}
    >
      <div className="flex items-center max-w-278 w-full">
        <Hero sectionRef={ref} />
      </div>
    </section>
  );
};
