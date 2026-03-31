export const locales = ['en', 'vi', 'zh', 'ru', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  zh: '中文',
  ru: 'Русский',
  ko: '한국어',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  vi: '🇻🇳',
  zh: '🇨🇳',
  ru: '🇷🇺',
  ko: '🇰🇷',
};
