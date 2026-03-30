"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/expeditions", label: "EXPEDITIONS" },
  { href: "/dive-sites", label: "DIVE SITES" },
  { href: "/training", label: "TRAINING" },
  { href: "/community", label: "COMMUNITY" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
          {/* Logo */}
          <Link href="/" className="text-white font-semibold text-lg whitespace-nowrap">
            Rainbow Divers - Vietnam
          </Link>

          {/* Center nav — desktop */}
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

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="text-[var(--text-secondary)] hover:text-white transition-colors hidden lg:block">
              <Settings size={20} />
            </button>
            <Link href="/book">
              <Button variant="primary" size="sm">
                Book a Dive
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

      {/* Mobile overlay */}
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
          <Link href="/book" onClick={() => setMobileOpen(false)}>
            <Button variant="primary" size="lg">
              Book a Dive
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
