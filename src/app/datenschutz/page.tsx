import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Bielefeld spricht.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <div className="bg-[#15803d] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold">Datenschutzerklärung</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-8 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">2. Datenerfassung auf dieser Website</h2>
          <h3 className="font-semibold text-[#15803d] mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: Marvin Lübbert, Musterstraße 12, 33602 Bielefeld.</p>
          <h3 className="font-semibold text-[#15803d] mb-2 mt-4">Welche Daten erfassen wir?</h3>
          <p>Wir erfassen nur die Daten, die Sie uns freiwillig mitteilen — zum Beispiel bei der Einreichung eines Anliegens (optional: E-Mail-Adresse) oder beim Ausfüllen des Kontaktformulars (Name, E-Mail, Nachricht). Ihre E-Mail-Adresse wird niemals öffentlich angezeigt.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">3. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Sperrung oder Löschung Ihrer gespeicherten personenbezogenen Daten. Wenden Sie sich dafür an: hallo@bielefeldspricht.de</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">4. Cookies</h2>
          <p>Diese Website verwendet technisch notwendige Cookies für den Betrieb der Plattform. Mehr dazu in unserer <a href="/cookies" className="text-[#15803d] underline">Cookie-Richtlinie</a>.</p>
        </section>
      </div>
    </div>
  )
}
