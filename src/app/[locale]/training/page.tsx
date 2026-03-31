"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const courseKeys = ["openWater", "advanced", "nightCave", "rescue", "proGear", "marinePhoto"] as const;

const levelStyleMap: Record<string, string> = {
  Beginner: "bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]",
  Intermediate: "bg-blue-500/10 text-blue-400",
  Advanced: "bg-purple-500/10 text-purple-400",
  "All Levels": "bg-gray-500/10 text-gray-400",
};

export default function TrainingPage() {
  const t = useTranslations("training");

  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0">
          <Image src="/media/jesse-van-vliet-GgHmp1pl20Q-unsplash.jpg" alt="Sea turtle" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/90 to-[var(--bg-primary)]/40" />
        </div>
        <div className="relative p-8 sm:p-12">
          <SectionLabel text={t("catalogLabel")} />
          <h1 className="text-white text-4xl font-bold">{t("heading")}</h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">{t("catalogDescription")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseKeys.map((key, i) => {
          const level = t(`courses.${key}.level`);
          const styleKey = Object.keys(levelStyleMap).find((k) => k.toLowerCase() === level.toLowerCase());
          return (
            <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <GlassCard hover className="p-6 h-full flex flex-col">
                <span className={cn("text-xs px-3 py-1 rounded-full w-fit", styleKey ? levelStyleMap[styleKey] : "bg-gray-500/10 text-gray-400")}>{level}</span>
                <h3 className="text-white text-xl font-semibold mt-4">{t(`courses.${key}.title`)}</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2 leading-relaxed flex-1">{t(`courses.${key}.description`)}</p>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-[var(--text-muted)] text-sm"><Clock size={14} /> {t(`courses.${key}.duration`)}</span>
                    <span className="text-[var(--accent-cyan)] font-semibold text-sm">{t(`courses.${key}.price`)}</span>
                  </div>
                  <Link href="/book" className="text-[var(--accent-cyan)] text-sm hover:underline">{t("bookNow")} &rarr;</Link>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
