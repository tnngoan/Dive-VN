import { locales, defaultLocale } from "@/i18n/config";

const pages = ["", "/book", "/training", "/expeditions", "/dive-sites", "/community"];

export default function sitemap() {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `https://divevietnam.com${locale === defaultLocale ? "" : `/${locale}`}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            `https://divevietnam.com${l === defaultLocale ? "" : `/${l}`}${page}`,
          ])
        ),
      },
    }))
  );
}
