'use client'

import { useState } from 'react'
import IssueCard from '@/components/IssueCard'
import { Issue } from '@/lib/data'

const categories = ['Alle', 'Beleuchtung', 'Straße', 'Grünfläche', 'Sauberkeit', 'Barrierefreiheit', 'Verkehr', 'Sicherheit']
const statuses = ['Alle', 'Neu', 'In Bearbeitung', 'Erledigt', 'In Abstimmung']

export default function ThemenFilter({ issues }: { issues: Issue[] }) {
  const [category, setCategory] = useState('Alle')
  const [status, setStatus] = useState('Alle')
  const [search, setSearch] = useState('')

  const filtered = issues.filter(issue => {
    if (category !== 'Alle' && issue.category !== category) return false
    if (status !== 'Alle' && issue.status !== status) return false
    if (search && !issue.title.toLowerCase().includes(search.toLowerCase()) && !issue.location.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e0d5] mb-8 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-48">
          <label className="block text-xs font-medium text-gray-500 mb-1">Suche</label>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Anliegen suchen…"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Kategorie</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white">
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white">
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <button
          onClick={() => { setCategory('Alle'); setStatus('Alle'); setSearch('') }}
          className="text-sm text-gray-500 hover:text-[#1a3a5c] transition-colors"
        >
          Zurücksetzen
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-5">{filtered.length} Anliegen gefunden</p>

      {filtered.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {filtered.map(issue => <IssueCard key={issue.id} issue={issue} />)}
          </div>
          <div className="text-center">
            <button className="border-2 border-[#1a3a5c] text-[#1a3a5c] px-8 py-3 rounded-full font-medium hover:bg-[#f0f4f8] transition-colors">
              Weitere Anliegen laden
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">Keine Anliegen gefunden.</p>
          <p className="text-sm mt-2">Versuche andere Filtereinstellungen.</p>
        </div>
      )}
    </>
  )
}
