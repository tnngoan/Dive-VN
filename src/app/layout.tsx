import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Rainbow Divers - Vietnam — The Abyssal Archive",
  description:
    "Nha Trang's premier high-end diving collective. Explore hidden coral cathedrals and spectral shipwrecks.",
  openGraph: {
    title: "Rainbow Divers - Vietnam — The Abyssal Archive",
    description:
      "Nha Trang's premier high-end diving collective. Explore hidden coral cathedrals and spectral shipwrecks.",
    type: "website",
    siteName: "Rainbow Divers - Vietnam",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "theme-color": "#0D1B2A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[var(--bg-primary)] text-[var(--text-secondary)] antialiased min-h-screen">
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
