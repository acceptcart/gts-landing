import { BriefcaseBusiness, Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/src/shared/data/site-content";

const contactItems = [
  { ...contact.phone, icon: Phone },
  { ...contact.whatsapp, icon: MessageCircle },
  { ...contact.email, icon: Mail },
  { ...contact.website, icon: Globe2 },
  { ...contact.linkedin, icon: BriefcaseBusiness },
] as const;

export function ContactInfo() {
  return (
    <aside className="border border-white/10 bg-dark-olive/40 p-6 sm:p-9">
      <h2 className="font-heading text-3xl font-bold">{contact.infoTitle}</h2>
      <ul className="mt-8 divide-y divide-white/10">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="py-5 first:pt-0">
              <a href={item.href} target={item.label === contact.linkedin.label ? "_blank" : undefined} rel={item.label === contact.linkedin.label ? "noreferrer" : undefined} className="group flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center border border-brand/30 text-brand">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.13em] text-white/35">{item.label}</span>
                  <span className="mt-1 block text-sm text-white/75 group-hover:text-brand">{item.value}</span>
                </span>
              </a>
            </li>
          );
        })}
        <li className="flex gap-4 py-5">
          <span className="grid size-10 shrink-0 place-items-center border border-brand/30 text-brand">
            <MapPin aria-hidden="true" className="size-4" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.13em] text-white/35">{contact.address.label}</span>
            <span className="mt-1 block text-sm leading-6 text-white/75">{contact.address.value}</span>
          </span>
        </li>
      </ul>
    </aside>
  );
}
