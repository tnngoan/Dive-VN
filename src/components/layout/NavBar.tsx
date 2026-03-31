"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/expeditions" as const, label: t("expeditions") },
    { href: "/dive-sites" as const, label: t("diveSites") },
    { href: "/training" as const, label: t("training") },
    { href: "/community" as const, label: t("community") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-[var(--bg-secondary)]/80 border-b border-[var(--bg-glass-border)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg whitespace-nowrap">
            {t("brand")}
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] transition-colors",
                  pathname === link.href
                    ? "text-[var(--accent-cyan)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent-cyan)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/book">
              <Button variant="primary" size="sm">
                {t("bookADive")}
              </Button>
            </Link>
            <button
              className="lg:hidden text-[var(--text-secondary)] hover:text-white transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] backdrop-blur-xl bg-[var(--bg-primary)]/95 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-8 text-white hover:text-[var(--accent-cyan)] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-2xl uppercase tracking-[0.2em] transition-colors",
                pathname === link.href
                  ? "text-[var(--accent-cyan)]"
                  : "text-white hover:text-[var(--accent-cyan)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
          <Link href="/book" onClick={() => setMobileOpen(false)}>
            <Button variant="primary" size="lg">
              {t("bookADive")}
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
