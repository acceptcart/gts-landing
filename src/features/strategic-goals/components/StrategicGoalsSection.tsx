import { Check } from "lucide-react";
import { goals } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function StrategicGoalsSection() {
  return (
    <section className="bg-black py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <SectionHeading eyebrow={goals.eyebrow} title={goals.title} />
          </Reveal>
          <ol className="border-t border-white/15">
            {goals.items.map((goal, index) => (
              <Reveal key={goal} delay={(index % 3) * 0.05}>
                <li className="grid grid-cols-[auto_1fr] items-center gap-5 border-b border-white/15 py-6">
                  <span className="grid size-8 place-items-center rounded-full border border-brand/50 text-brand">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  <span className="font-heading text-lg font-semibold sm:text-xl">{goal}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
