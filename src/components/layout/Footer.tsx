"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/contact";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[var(--bg-secondary)]/50 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1280px] mx-auto px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-white font-semibold">{t("brand")}</div>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-1.5 text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors"
              >
                <Phone size={14} /> {contactInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors"
              >
                <Mail size={14} /> {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={contactInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors"
            >
              Facebook
            </a>
            <a
              href={contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
          <p className="text-[var(--text-muted)] text-sm">{t("copyright")}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {(
              [
                ["privacyPolicy", "#"],
                ["safetyProtocols", "#"],
                ["contactDeepSupport", "#"],
                ["marineConservation", "#"],
              ] as const
            ).map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-cyan)] transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
