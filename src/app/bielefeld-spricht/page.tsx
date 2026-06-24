import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bürgerbeteiligung in Bielefeld — Bielefeld spricht',
  description: 'Bürgerbeteiligung in Bielefeld leicht gemacht. Erfahre, wie Bielefelderinnen und Bielefelder lokale Anliegen melden, diskutieren und mitgestalten können.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie kann ich als Bürger in Bielefeld Probleme melden?',
      acceptedAnswer: { '@type': 'Answer', text: 'Auf bielefeldspricht.de kannst du in wenigen Klicks ein lokales Anliegen einreichen — ohne komplizierte Anmeldung.' },
    },
    {
      '@type': 'Question',
      name: 'Ist Bielefeld spricht kostenlos nutzbar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, die Plattform ist für alle Bielefelderinnen und Bielefelder kostenlos und ohne Registrierungspflicht nutzbar.' },
    },
  ],
}

export default function BielefeldSprichtPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-[#15803d] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Bürgerbeteiligung in Bielefeld</h1>
          <p className="text-blue-200 text-lg">Wie Bielefelderinnen und Bielefelder ihre Stadt aktiv mitgestalten</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-serif text-3xl font-bold text-[#15803d] mb-4">Was bedeutet Bürgerbeteiligung in Bielefeld?</h2>
          <p>Bielefeld ist eine lebendige Großstadt mit über 340.000 Einwohnerinnen und Einwohnern. Vom historischen Alten Markt bis zu den grünen Stadtteilen wie Gadderbaum, von der quirligen Innenstadt bis zu den ruhigen Wohnvierteln in Schildesche oder Stieghorst — überall gibt es Menschen, die täglich lokale Herausforderungen beobachten.</p>
          <p className="mt-4">Bürgerbeteiligung bedeutet, diesen Menschen eine Stimme zu geben. Nicht nur durch Wahlen alle vier Jahre, sondern durch aktive Mitwirkung im Alltag. Eine kaputte Straßenlaterne am Kesselbrink, ein fehlender Fahrradweg in Brackwede, ein überfüllter Mülleimer am Stadtpark — das sind die kleinen und großen Dinge, die das Leben in einer Stadt prägen.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#15803d] mb-4">Warum braucht Bielefeld eine Bürgerplattform?</h2>
          <p>Viele Bielefelderinnen und Bielefelder wissen nicht, wie und wo sie lokale Anliegen melden sollen. Die Website der Stadt ist für viele zu unübersichtlich. Telefonische Hotlines sind tagsüber nicht immer erreichbar. Und WhatsApp-Gruppen der Nachbarschaft sind zwar hilfreich, aber kein offizieller Kanal.</p>
          <p className="mt-4">Bielefeld spricht schließt genau diese Lücke: Eine zentrale, einfach zu bedienende Plattform, auf der Anliegen sichtbar werden, Abstimmungen stattfinden und der Status jedes gemeldeten Problems nachverfolgt werden kann.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#15803d] mb-4">Welche Themen bewegen Bielefeld?</h2>
          <p>In Bielefeld beschäftigen die Bürgerinnen und Bürger vor allem folgende Themen:</p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li><strong>Mobilität:</strong> Mehr und sichere Fahrradwege, Tempo-30-Zonen vor Schulen, bessere ÖPNV-Anbindung in den Außenstadtteilen</li>
            <li><strong>Grünflächen:</strong> Erhalt und Pflege von Parks, Spielplätzen und Stadtbäumen</li>
            <li><strong>Sauberkeit:</strong> Regelmäßigere Reinigung öffentlicher Plätze, mehr Mülleimer</li>
            <li><strong>Barrierefreiheit:</strong> Zugänglichkeit für ältere Menschen und Menschen mit Behinderungen</li>
            <li><strong>Sicherheit:</strong> Bessere Beleuchtung, sichere Schulwege, ruhigere Wohngebiete</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#15803d] mb-4">So funktioniert Bielefeld spricht</h2>
          <p>Die Plattform ist bewusst einfach gehalten. Kein langer Registrierungsprozess, keine komplizierte Navigation. Jede Bielefelderin und jeder Bielefelder kann:</p>
          <ol className="list-decimal pl-5 mt-3 space-y-2">
            <li>Ein <strong>Anliegen einreichen</strong> — in weniger als 3 Minuten, mit optionalem Foto und Standortangabe</li>
            <li><strong>Abstimmungen</strong> über lokale Themen und Stadtentscheidungen aktiv mitverfolgen und daran teilnehmen</li>
            <li>Den <strong>Status</strong> von gemeldeten Anliegen transparent verfolgen — von „Neu" bis „Erledigt"</li>
          </ol>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#15803d] mb-4">Häufige Fragen</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-[#15803d]">Wie kann ich als Bürger in Bielefeld Probleme melden?</h3>
              <p className="mt-1">Auf bielefeldspricht.de kannst du über das Formular unter /melden in wenigen Klicks ein lokales Anliegen einreichen — ohne komplizierte Anmeldung.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#15803d]">Ist Bielefeld spricht kostenlos?</h3>
              <p className="mt-1">Ja, die Plattform ist für alle Bielefelderinnen und Bielefelder vollständig kostenlos und ohne Registrierungspflicht nutzbar.</p>
            </div>
          </div>
        </section>
        <div className="pt-4">
          <Link href="/melden" className="inline-flex items-center gap-2 bg-[#15803d] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#166534] transition-colors">
            Jetzt Anliegen melden
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
