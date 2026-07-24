import { Quote, UserRound } from "lucide-react";
import { founder } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { Reveal } from "@/src/shared/components/ui/Reveal";
import { PixelPattern } from "@/src/shared/components/layout/PixelPattern";

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-dark-olive py-24 sm:py-32">
      <PixelPattern className="-left-20 bottom-0 w-72 -rotate-12" />
      <Container className="relative">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <Reveal className="relative min-h-[430px] overflow-hidden bg-gradient-to-br from-brand/25 via-[#1d2104] to-black">
            <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <UserRound aria-hidden="true" className="h-[360px] w-[360px] translate-y-7 text-brand/50" strokeWidth={0.65} />
            </div>
            <span className="absolute bottom-6 left-6 bg-black/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand">{founder.imageAlt}</span>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center bg-black p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{founder.eyebrow}</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{founder.title}</h2>
            <Quote aria-hidden="true" className="mt-10 size-9 text-brand" />
            <blockquote className="mt-5 font-heading text-2xl font-medium leading-snug text-white/85 sm:text-3xl">{founder.quote}</blockquote>
            <p className="mt-7 leading-8 text-white/50">{founder.intro}</p>
            <div className="mt-10 border-t border-white/15 pt-7">
              <h3 className="font-heading text-2xl font-bold">{founder.name}</h3>
              <p className="mt-1 text-sm text-brand">{founder.role}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
