import { about } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 text-black sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} invert />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-9 text-black/65">{about.body}</p>
          </Reveal>
        </div>
        <div className="mt-16 grid border-y border-black/15 sm:grid-cols-3">
          {about.features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08} className="border-b border-black/15 p-7 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-9">
                <Icon aria-hidden="true" className="mb-8 size-8 text-dark-olive" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-black/55">{item.label}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
