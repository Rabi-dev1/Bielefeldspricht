import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import { Mail, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Nimm Kontakt mit dem Team von Bielefeld spricht auf. Wir helfen dir gerne weiter.',
}

const faqItems = [
  { question: 'Wie lange dauert die Prüfung meines Anliegens?', answer: 'In der Regel prüfen wir Anliegen innerhalb von 24 bis 48 Stunden. Bei einem hohen Aufkommen kann es etwas länger dauern.' },
  { question: 'Kann ich mein eingereichtes Anliegen nachträglich bearbeiten?', answer: 'Aktuell ist eine direkte Bearbeitung noch nicht möglich. Schreib uns einfach mit dem Betreff „Anliegen ändern" und wir helfen dir weiter.' },
  { question: 'Wie wird mit meinen Daten umgegangen?', answer: 'Wir speichern nur die Daten, die du freiwillig angibst. Deine E-Mail-Adresse wird niemals öffentlich angezeigt. Mehr dazu in unserer Datenschutzerklärung.' },
  { question: 'Kann ich Bielefeld spricht als Organisation nutzen?', answer: 'Ja! Schulen, Vereine und Initiativen sind herzlich eingeladen. Kontaktiere uns einfach für eine individuelle Beratung.' },
]

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ef]">
      <div className="bg-[#1a3a5c] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-3">Kontakt</h1>
          <p className="text-blue-200 text-lg">Wir helfen dir gerne weiter — melde dich jederzeit.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#1a3a5c] mb-6">Schreib uns</h2>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e0d5]">
            <h3 className="font-semibold text-[#1a3a5c] mb-4">Kontaktdaten</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-[#4a7c59]" />
                hallo@bielefeldspricht.de
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-[#4a7c59]" />
                0521 / 123 456 78
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-[#4a7c59]" />
                Mo–Fr: 9:00 – 17:00 Uhr
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a3a5c] mb-4">Häufige Fragen</h3>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
