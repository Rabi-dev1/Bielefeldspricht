import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://bielefeldspricht.de"),
  title: {
    default: "Bielefeld spricht — Die lokale Community für Bielefeld",
    template: "%s | Bielefeld spricht",
  },
  description:
    "Die lokale Social-Media-Plattform für Bielefeld. Poste, diskutiere und gestalte deine Stadt mit.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://bielefeldspricht.de",
    siteName: "Bielefeld spricht",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bielefeld spricht",
  url: "https://bielefeldspricht.de",
  description: "Lokale Community-Plattform für Bielefeld",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <div className="max-w-screen-xl mx-auto flex">
          <Sidebar />
          {/* Main content — offset for sidebar */}
          <div className="flex-1 md:ml-64 xl:ml-72 flex justify-center pb-20 md:pb-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
