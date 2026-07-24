"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/src/shared/components/ui/Button";
import { Container } from "@/src/shared/components/ui/Container";
import { PixelPattern } from "@/src/shared/components/layout/PixelPattern";
import { hero } from "@/src/shared/data/site-content";

export function Hero() {
  const [headline, setHeadline] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(
      () => setHeadline((current) => (current + 1) % hero.headlines.length),
      4200,
    );
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="grid-lines relative flex min-h-screen items-center overflow-hidden bg-black pb-16 pt-28">
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-dark-olive/60 blur-[140px]" />
      <PixelPattern className="-right-10 top-28 w-72 rotate-12 sm:w-96 lg:right-10 lg:w-[30rem]" />
      <Container className="relative z-10">
        <div className="max-w-5xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm">
            <span className="size-2 bg-brand shadow-glow" />
            {hero.eyebrow}
          </p>
          <div className="min-h-[13rem] sm:min-h-[17rem] lg:min-h-[21rem]">
            <AnimatePresence initial={false} mode="wait">
              <motion.h1
                key={headline}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance font-heading text-[clamp(3.2rem,8.4vw,8rem)] font-bold leading-[0.9] tracking-[-0.07em] text-white"
              >
                {hero.headlines[headline]}
                <span className="text-brand">.</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="mt-7 flex flex-col gap-8 border-l border-brand/60 pl-5 sm:flex-row sm:items-center sm:justify-between sm:pl-7">
            <p className="max-w-xl text-base font-medium leading-7 text-white/65 sm:text-lg">{hero.supporting}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact-us">{hero.primaryCta}</ButtonLink>
              <ButtonLink href="#about" variant="outline" showArrow={false}>{hero.secondaryCta}</ButtonLink>
            </div>
          </div>
        </div>
        <a href="#about" className="mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-brand">
          <ArrowDown aria-hidden="true" className="size-4 animate-bounce" />
          {hero.scroll}
        </a>
      </Container>
    </section>
  );
}
