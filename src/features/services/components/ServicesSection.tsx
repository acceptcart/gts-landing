import { services } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";
import { cn } from "@/src/shared/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -left-48 top-48 size-96 rounded-full bg-brand/10 blur-[120px]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal><SectionHeading eyebrow={services.eyebrow} title={services.title} /></Reveal>
          <Reveal delay={0.1}><p className="text-lg leading-9 text-white/55">{services.intro}</p></Reveal>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={(index % 4) * 0.06}
                className={cn(
                  "border border-white/10 bg-surface p-7",
                  index === 0 || index === 5 ? "lg:col-span-2" : "",
                )}
              >
                <span className="grid size-12 place-items-center border border-brand/30 text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <p className="mt-9 text-xs font-semibold tracking-[0.15em] text-brand">0{index + 1}</p>
                <h3 className="mt-3 font-heading text-xl font-bold leading-tight sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
