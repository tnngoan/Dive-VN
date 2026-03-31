export const contactInfo = {
  phone: '+84 913 408 146',
  phoneFormatted: '+84 913 408 146',
  whatsapp: '+18594667727',
  whatsappFormatted: '+1 859 466 7727',
  whatsappLink: 'https://wa.me/18594667727',
  email: 'info@divevietnam.com',
  address: {
    street: '132 Nguyen Thien Thuat Street',
    city: 'Nha Trang',
    province: 'Khanh Hoa',
    postalCode: '650000',
    country: 'Vietnam',
    full: '132 Nguyen Thien Thuat Street, Nha Trang, Khanh Hoa 650000, Vietnam',
    googleMapsUrl: 'https://maps.google.com/?q=132+Nguyen+Thien+Thuat+Street+Nha+Trang+Vietnam',
  },
  hours: {
    open: '06:30',
    close: '20:00',
    label: 'Daily 06:30 AM – 08:00 PM',
    daysOpen: 'Monday – Sunday',
  },
  social: {
    facebook: 'https://www.facebook.com/rainbowdiversvietnam',
    instagram: 'https://www.instagram.com/rainbowdiversvn/',
    facebookHandle: '@rainbowdiversvietnam',
    instagramHandle: '@rainbowdiversvn',
  },
  certifications: {
    padi: 'PADI 5 Star IDC',
    established: 1997,
    instructorCount: 8,
    awards: ['Green Fins', 'Adopt the Blue'],
  },
  payment: ['Cash', 'VISA', 'Mastercard', 'Bank Transfer', 'PayPal', 'WeChat Pay', 'AliPay'],
} as const;

export function getPreferredPaymentMethods(locale: string): string[] {
  const preferred: Record<string, string[]> = {
    en: ['PayPal', 'VISA', 'Mastercard', 'Bank Transfer'],
    vi: ['Cash', 'Bank Transfer', 'VISA', 'Mastercard'],
    zh: ['WeChat Pay', 'AliPay', 'VISA', 'Mastercard'],
    ru: ['VISA', 'Mastercard', 'Bank Transfer', 'Cash'],
    ko: ['VISA', 'Mastercard', 'Bank Transfer', 'PayPal'],
  };
  return preferred[locale] || contactInfo.payment as unknown as string[];
}
