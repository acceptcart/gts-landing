import { partners } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function PartnersSection() {
  const marqueeItems = [...partners.placeholders, ...partners.placeholders];

  return (
    <section className="overflow-hidden bg-white py-24 text-black sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow={partners.eyebrow} title={partners.title} invert /></Reveal>
          <Reveal delay={0.1}><p className="text-lg leading-9 text-black/60">{partners.intro}</p></Reveal>
        </div>
        <p className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">{partners.label}</p>
      </Container>
      <div className="mt-7 border-y border-black/10">
        <div className="marquee flex w-max">
          {marqueeItems.map((partner, index) => (
            <div key={`${partner}-${index}`} className="grid h-32 w-64 place-items-center border-r border-black/10 px-8 grayscale">
              <span className="font-heading text-lg font-bold tracking-[-0.04em] text-black/35">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
