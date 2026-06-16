import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { template: '%s | Bielefeld spricht', default: 'Bielefeld spricht – Deine Stimme für deine Stadt' },
  description: 'Die Plattform für Bürger Bielefelds. Melde Probleme, diskutiere Themen und stimme über lokale Entscheidungen ab.',
  openGraph: {
    title: 'Bielefeld spricht',
    description: 'Bürgerbeteiligung für Bielefeld',
    locale: 'de_DE',
    type: 'website',
    url: 'https://bielefeldspricht.de',
  },
  alternates: { canonical: 'https://bielefeldspricht.de' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bielefeld spricht',
  description: 'Digitale Bürgerbeteiligungsplattform für Bielefeld',
  url: 'https://bielefeldspricht.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alter Markt 1',
    addressLocality: 'Bielefeld',
    postalCode: '33602',
    addressCountry: 'DE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
