import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Empower Your Style | Personal Colour Analysis & Styling Auckland",
    template: "%s | Empower Your Style"
  },
  description:
    "Premium personal colour analysis, wardrobe refreshes, personal shopping and style confidence consulting for women in Auckland and online across New Zealand.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Empower Your Style",
    description:
      "Discover the colours and style that make you look radiant, confident and effortlessly you.",
    url: site.url,
    siteName: site.name,
    images: ["/images/Background6.jpg"],
    locale: "en_NZ",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/Background6.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressCountry: "NZ"
    },
    areaServed: ["Auckland", "New Zealand"],
    priceRange: "$$",
    description:
      "Personal colour analysis, wardrobe refreshes, personal shopping and confidence-focused style consulting for women."
  };

  return (
    <html lang="en-NZ">
      <body>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
