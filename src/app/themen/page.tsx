import type { Metadata } from 'next'
import { issues } from '@/lib/data'
import ThemenFilter from './ThemenFilter'
import RightPanel from '@/components/RightPanel'

export const metadata: Metadata = {
  title: 'Kanäle & Anliegen',
  description: 'Alle lokalen Anliegen aus Bielefeld — nach Stadtteil, Kategorie und Status filtern.',
}

export default function ThemenPage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
          <h1 className="font-bold text-gray-900 text-lg">Kanäle & Anliegen</h1>
          <p className="text-sm text-gray-400">Alle Themen aus Bielefeld</p>
        </div>
        <div className="bg-white min-h-screen">
          <div className="px-4 py-5">
            <ThemenFilter issues={issues} />
          </div>
        </div>
      </div>
      <RightPanel />
    </div>
  )
}
