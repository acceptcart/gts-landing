"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { navigation } from "@/src/shared/data/site-content";
import { cn } from "@/src/shared/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/70 transition-colors hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact-us">{navigation.cta}</ButtonLink>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? navigation.menuClose : navigation.menuOpen}
          onClick={() => setOpen((current) => !current)}
          className="grid size-11 place-items-center border border-white/15 text-white lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "grid overflow-hidden bg-black transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav aria-label="Mobile navigation" className="min-h-0">
          <Container className="flex flex-col gap-1 border-t border-white/10 py-6">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-heading text-2xl font-semibold text-white"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact-us" className="mt-5" showArrow>
              {navigation.cta}
            </ButtonLink>
          </Container>
        </nav>
      </div>
    </header>
  );
}
