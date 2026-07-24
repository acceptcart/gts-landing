import { AlertCircle } from "lucide-react";
import { terms } from "@/src/shared/data/site-content";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function TermsContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">{terms.updated}</p>
        <div className="mt-6 flex gap-3 border border-black/15 bg-brand/30 p-4 text-sm leading-6">
          <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>{terms.disclaimer}</p>
        </div>
      </aside>
      <article>
        <p className="border-b border-black/15 pb-10 text-lg leading-9 text-black/65">{terms.intro}</p>
        <div>
          {terms.sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 2) * 0.04}>
              <section className="border-b border-black/15 py-10">
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-black/65">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </article>
    </div>
  );
}
