import Link from "next/link";
import { ArrowUp, BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { company, contact, footer, navigation } from "@/src/shared/data/site-content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-14 sm:py-20">
      <div aria-hidden="true" className="absolute bottom-0 right-0 size-72 translate-x-1/3 translate-y-1/3 bg-brand/10 blur-[100px]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-base leading-7 text-white/55">{footer.tagline}</p>
            <p className="mt-3 text-sm text-white/35">{company.legalName}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{footer.navigationTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {navigation.links.map((link) => (
                <li key={link.href}><Link className="hover:text-white" href={link.href}>{link.label}</Link></li>
              ))}
              <li><Link className="hover:text-white" href="/terms-and-conditions">{footer.legal}</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{footer.contactTitle}</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li><a className="flex gap-3 hover:text-white" href={contact.phone.href}><Phone className="mt-0.5 size-4 shrink-0 text-brand" />{contact.phone.value}</a></li>
              <li><a className="flex gap-3 hover:text-white" href={contact.email.href}><Mail className="mt-0.5 size-4 shrink-0 text-brand" />{contact.email.value}</a></li>
              <li><span className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-brand" />{contact.address.value}</span></li>
              <li><a className="flex gap-3 hover:text-white" href={contact.linkedin.href} target="_blank" rel="noreferrer"><BriefcaseBusiness className="mt-0.5 size-4 shrink-0 text-brand" />{contact.linkedin.value}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p>{company.copyright}</p>
            <p>
              {footer.developedBy.prefix}{" "}
              <a
                href={footer.developedBy.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/55 transition-colors hover:text-brand"
              >
                {footer.developedBy.name}
              </a>
            </p>
          </div>
          <a href="#main-content" className="inline-flex items-center gap-2 hover:text-brand">
            {footer.backToTop}<ArrowUp aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
