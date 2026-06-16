import type { Metadata } from 'next'
import { issues } from '@/lib/data'
import ThemenFilter from './ThemenFilter'

export const metadata: Metadata = {
  title: 'Alle Anliegen',
  description: 'Entdecke aktuelle Anliegen von Bürgerinnen und Bürgern in Bielefeld — nach Stadtteil, Kategorie und Status filtern.',
}

export default function ThemenPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ef]">
      <div className="bg-[#1a3a5c] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-3">Alle Anliegen in Bielefeld</h1>
          <p className="text-blue-200 text-lg">Aktuelle Probleme und Wünsche aus allen Stadtteilen</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <ThemenFilter issues={issues} />
      </div>
    </div>
  )
}
