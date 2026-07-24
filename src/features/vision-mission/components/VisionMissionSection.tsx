import { visionMission } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function VisionMissionSection() {
  const cards = [visionMission.vision, visionMission.mission];

  return (
    <section className="relative overflow-hidden bg-dark-olive py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-30" />
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={visionMission.eyebrow} title={visionMission.title} />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.12} className="bg-[#161803] p-8 sm:p-12 lg:p-14">
                <span className="grid size-14 place-items-center bg-brand text-black">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-12 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{card.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/60">{card.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
