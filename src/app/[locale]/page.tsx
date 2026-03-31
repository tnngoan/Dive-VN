import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import TrainingGrid from "@/components/sections/TrainingGrid";
import CTASection from "@/components/sections/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrainingGrid />
      <CTASection />
    </>
  );
}
