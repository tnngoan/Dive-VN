import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("common.notFound");

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center">
      <h1 className="font-serif italic text-5xl sm:text-6xl font-bold">
        <span className="text-white">{t("heading1")} </span>
        <span className="text-[var(--accent-cyan)]">{t("heading2")}</span>
      </h1>
      <p className="text-[var(--text-secondary)] mt-6 max-w-md text-lg">
        {t("description")}
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary">{t("cta")}</Button>
      </Link>
    </div>
  );
}
