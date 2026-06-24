import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Bielefeld spricht — Angaben gemäß § 5 TMG.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <div className="bg-[#15803d] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold">Impressum</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-8 text-gray-700">
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">Angaben gemäß § 5 TMG</h2>
          <p>Marvin Lübbert<br />Bielefeld spricht<br />Musterstraße 12<br />33602 Bielefeld</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">Kontakt</h2>
          <p>Telefon: 0521 / 123 456 78<br />E-Mail: hallo@bielefeldspricht.de</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">Verantwortlich für den Inhalt</h2>
          <p>Marvin Lübbert<br />Musterstraße 12<br />33602 Bielefeld</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">Haftungsausschluss</h2>
          <p className="leading-relaxed text-sm">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">Streitschlichtung</h2>
          <p className="leading-relaxed text-sm">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
      </div>
    </div>
  )
}
