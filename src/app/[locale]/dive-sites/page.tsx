import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const sites = [
  { key: "honMun", depth: "5-25m", type: "Coral Reef", image: "/media/neom-abjEGTj3HZY-unsplash.jpg" },
  { key: "morayBeach", depth: "12-30m", type: "Sandy Slope", image: "/media/neom-bpdoFNQP2iw-unsplash.jpg" },
  { key: "madonnaRock", depth: "8-22m", type: "Rock Formation", image: "/media/neom-FuusC7lfg6Q-unsplash.jpg" },
  { key: "coralGarden", depth: "3-18m", type: "Shallow Reef", image: "/media/neom-bOMVTvE2QFU-unsplash.jpg" },
] as const;

export default async function DiveSitesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("diveSites");
  const tc = await getTranslations("common");

  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="mb-12">
        <SectionLabel text={t("sectionLabel")} />
        <h1 className="text-white text-4xl font-bold">{t("heading")}</h1>
        <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">{t("description")}</p>
      </div>
      <GlassCard className="h-[300px] flex items-center justify-center mb-12">
        <div className="text-center">
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">{tc("comingSoon")}</span>
          <p className="text-[var(--text-muted)] mt-3">{t("mapPlaceholder")}</p>
        </div>
      </GlassCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sites.map((site) => (
          <GlassCard key={site.key} hover className="overflow-hidden group">
            <div className="h-[180px] relative overflow-hidden">
              <Image src={site.image} alt={t(site.key)} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold">{t(site.key)}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">Depth: {site.depth} &middot; {site.type}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
