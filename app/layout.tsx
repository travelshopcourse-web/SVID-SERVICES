import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NavigationLoader from "@/components/NavigationLoader";
import StructuredData from "@/components/StructuredData";
import { siteData } from "@/lib/data";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  title: {
    default: `${siteData.name} | ${siteData.description}`,
    template: `%s | ${siteData.name}`,
  },
  description: `${siteData.description}. Leading structural and architectural design firm based in Kerala, India, with regional presence in Qatar and Saudi Arabia. Specializing in BIM, 3D rendering, steel detailing, and comprehensive design solutions.`,
  keywords: [
    "architectural design",
    "structural engineering", 
    "BIM services",
    "3D rendering",
    "steel detailing",
    "Kerala architects",
    "Qatar construction",
    "Saudi Arabia engineering",
    "building design",
    "MEP services",
    "shop drawings",
    "construction design"
  ],
  authors: [{ name: "SVID Services" }],
  creator: "SVID Services",
  publisher: "SVID Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://svid.co.in"),
  alternates: {
    canonical: "https://svid.co.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svid.co.in",
    siteName: siteData.name,
    title: `${siteData.name} | ${siteData.description}`,
    description: `Leading structural and architectural design firm. Professional BIM services, 3D rendering, and complete design solutions across India, Qatar, and Saudi Arabia.`,
    images: [
      {
        url: siteData.logo,
        width: 1200,
        height: 630,
        alt: `${siteData.name} - Architectural and Structural Design Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${siteData.description}`,
    description: `Professional architectural and structural design services. BIM, 3D rendering, steel detailing across India, Qatar, and Saudi Arabia.`,
    images: [siteData.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code", 
    // yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: [
      { url: siteData.favicon, sizes: "32x32", type: "image/png" },
      { url: siteData.favicon, sizes: "16x16", type: "image/png" },
    ],
    shortcut: siteData.favicon,
    apple: [
      { url: siteData.favicon, sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: siteData.favicon,
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Loader />
        <NavigationLoader />
        <LayoutClient>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LayoutClient>
      </body>
    </html>
  );
}
