import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_SC, Noto_Sans_KR } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "Rainbow Divers - Vietnam",
    },
    twitter: {
      card: "summary_large_image",
    },
    other: {
      "theme-color": "#0D1B2A",
    },
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        vi: "/vi",
        zh: "/zh",
        ru: "/ru",
        ko: "/ko",
        "x-default": "/",
      },
    },
  };
}

const fontClassMap: Record<string, string> = {
  zh: "font-[var(--font-noto-sc),var(--font-inter),sans-serif]",
  ko: "font-[var(--font-noto-kr),var(--font-inter),sans-serif]",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const extraFontClass = fontClassMap[locale as Locale] || "";

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} ${notoSansSC.variable} ${notoSansKR.variable}`}
    >
      <body
        className={`font-sans bg-[var(--bg-primary)] text-[var(--text-secondary)] antialiased min-h-screen ${extraFontClass}`}
      >
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main className="pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
