import localFont from "next/font/local";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import "./globals.css";

const roobert = localFont({
  src: [
    { path: "../public/fonts/RoobertTRIAL-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-Medium.otf",  weight: "500", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-roobert",
  display: "swap",
});

const pangram = localFont({
  src: [
    { path: "../public/fonts/Pangram-Light.otf",   weight: "300", style: "normal" },
    { path: "../public/fonts/Pangram-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Pangram-Medium.otf",  weight: "500", style: "normal" },
    { path: "../public/fonts/Pangram-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-pangram",
  display: "swap",
});

const roobertMono = localFont({
  src: [
    { path: "../public/fonts/RoobertMonoTRIAL-Regular.otf",  weight: "400", style: "normal" },
    { path: "../public/fonts/RoobertMonoTRIAL-Medium.otf",   weight: "500", style: "normal" },
    { path: "../public/fonts/RoobertMonoTRIAL-SemiBold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-roobert-mono",
  display: "swap",
});

const SITE_URL = "https://nexiumai.io";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NEXIUM.AI — Build tomorrow's software",
  description: "NEXIUM.AI designs SaaS products and technology solutions to help businesses embrace the digital shift.",
  keywords: ["NEXIUM.AI", "SaaS", "cloud storage", "S3", "AI", "artificial intelligence", "software development", "digital transformation"],
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "NEXIUM.AI",
    title: "NEXIUM.AI — Build tomorrow's software",
    description: "NEXIUM.AI designs SaaS products and technology solutions to help businesses embrace the digital shift.",
    images: [
      {
        url: "/assets/logo-icon.png",
        width: 512,
        height: 512,
        alt: "NEXIUM.AI",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "NEXIUM.AI — Build tomorrow's software",
    description: "NEXIUM.AI designs SaaS products and technology solutions to help businesses embrace the digital shift.",
    images: ["/assets/logo-icon.png"],
  },
  icons: {
    icon: "/assets/logo-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${roobert.variable} ${pangram.variable} ${roobertMono.variable}`}>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ThemeToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
