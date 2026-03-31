import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const expeditions = [
  { key: "coralCathedral", image: "/media/neom-HYHYGLs-Rp8-unsplash.jpg" },
  { key: "wreckDiscovery", image: "/media/pascal-van-de-vendel-NCOxn5I10vA-unsplash.jpg" },
  { key: "nightAbyss", image: "/media/neom-g6Me5mUQQIQ-unsplash.jpg" },
] as const;

export default async function ExpeditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("expeditions");
  const tc = await getTranslations("common");

  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="mb-12">
        <SectionLabel text={t("sectionLabel")} />
        <h1 className="text-white text-4xl font-bold">{t("heading")}</h1>
        <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expeditions.map((exp) => (
          <GlassCard key={exp.key} hover className="relative overflow-hidden group">
            <div className="h-[240px] relative overflow-hidden">
              <Image src={exp.image} alt={t(exp.key)} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">{tc("comingSoon")}</span>
              <h3 className="text-white text-xl font-semibold mt-3">{t(exp.key)}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{t(`${exp.key}Desc`)}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
