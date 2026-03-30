import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Safety Protocols", href: "#" },
  { label: "Contact Deep Support", href: "#" },
  { label: "Marine Conservation", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)]/50 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1280px] mx-auto px-8 py-8">
        <div className="text-white font-semibold">Rainbow Divers - Vietnam</div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            &copy; 2024 Rainbow Divers - Vietnam. The Abyssal Archive.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
