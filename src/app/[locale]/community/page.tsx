import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const stories = [
  { key: "nightDive", image: "/media/jesse-van-vliet-QJvbsdkTUS0-unsplash.jpg" },
  { key: "reefRestoration", image: "/media/jesse-van-vliet-Xlg6ppBg7Jk-unsplash.jpg" },
  { key: "freediving", image: "/media/johnny-africa-FGHjgyAAYv4-unsplash.jpg" },
] as const;

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("community");
  const tc = await getTranslations("common");

  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="mb-12">
        <SectionLabel text={t("sectionLabel")} />
        <h1 className="text-white text-4xl font-bold">{t("heading")}</h1>
        <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stories.map((story) => (
          <GlassCard key={story.key} hover className="overflow-hidden group">
            <div className="h-[200px] relative overflow-hidden">
              <Image src={story.image} alt={t(`stories.${story.key}.title`)} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold">{t(`stories.${story.key}.title`)}</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">{t(`stories.${story.key}.author`)}</p>
              <p className="text-[var(--text-secondary)] text-sm mt-3">{t(`stories.${story.key}.excerpt`)}</p>
            </div>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="p-8 text-center">
        <SectionLabel text={t("conservationLabel")} className="justify-center" />
        <h2 className="text-white text-2xl font-bold mt-2">{t("conservationHeading")}</h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto">{t("conservationDescription")}</p>
        <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">{tc("comingSoon")}</span>
      </GlassCard>
    </div>
  );
}
