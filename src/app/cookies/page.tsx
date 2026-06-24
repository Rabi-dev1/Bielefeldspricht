import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <div className="bg-[#15803d] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold">Cookie-Richtlinie</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die Ihr Browser auf Ihrem Gerät speichert.</p>
        <section>
          <h2 className="font-serif text-xl font-bold text-[#15803d] mb-3">Technisch notwendige Cookies</h2>
          <p>Wir verwenden ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies können nicht deaktiviert werden.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border border-[#e5e7eb] text-xs">
              <thead>
                <tr className="bg-[#f0fdf4]">
                  <th className="border border-[#e5e7eb] px-3 py-2 text-left">Cookie</th>
                  <th className="border border-[#e5e7eb] px-3 py-2 text-left">Zweck</th>
                  <th className="border border-[#e5e7eb] px-3 py-2 text-left">Laufzeit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e5e7eb] px-3 py-2">session</td>
                  <td className="border border-[#e5e7eb] px-3 py-2">Sitzungsverwaltung</td>
                  <td className="border border-[#e5e7eb] px-3 py-2">Session</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <p>Bei Fragen: <a href="mailto:hallo@bielefeldspricht.de" className="text-[#15803d] underline">hallo@bielefeldspricht.de</a></p>
      </div>
    </div>
  )
}
