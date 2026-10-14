import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  authors: [{ name: siteConfig.seo.author }],
  keywords: ["For Ica", "LPDP", "Interview", "Before Tomorrow", "Letter"],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✉</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F1E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-paper text-ink antialiased selection:bg-[#EAD9C9] selection:text-night min-h-screen relative overflow-x-hidden">
        {/* Authentic Paper Grain */}
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
