import { sectors } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function SectorsSection() {
  return (
    <section id="sectors" className="bg-[#10110b] py-24 sm:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow={sectors.eyebrow} title={sectors.title} /></Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.07} className="flex min-h-28 items-center gap-5 border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-brand/50">
                <span className="grid size-12 shrink-0 place-items-center bg-brand text-black">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-bold leading-snug">{item.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
