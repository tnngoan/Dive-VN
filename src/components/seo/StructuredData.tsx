import { contactInfo } from "@/lib/contact";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: "Rainbow Divers - Vietnam",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    url: "https://divevietnam.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.province,
      postalCode: contactInfo.address.postalCode,
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 06:30-20:00",
    availableLanguage: ["English", "Vietnamese", "Chinese", "Russian", "Korean"],
    priceRange: "$$",
    paymentAccepted: contactInfo.payment,
    sameAs: [contactInfo.social.facebook, contactInfo.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
