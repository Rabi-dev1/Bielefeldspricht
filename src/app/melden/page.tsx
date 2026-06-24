'use client'

import { useState } from 'react'
import { Road, Lightbulb, TreePine, Shield, Car, HelpCircle, CheckCircle, Upload, Trash2, Accessibility } from 'lucide-react'

const categories = [
  { id: 'Straße', label: 'Straße', icon: Road },
  { id: 'Beleuchtung', label: 'Beleuchtung', icon: Lightbulb },
  { id: 'Grünfläche', label: 'Grünfläche', icon: TreePine },
  { id: 'Sicherheit', label: 'Sicherheit', icon: Shield },
  { id: 'Verkehr', label: 'Verkehr', icon: Car },
  { id: 'Sauberkeit', label: 'Sauberkeit', icon: Trash2 },
  { id: 'Barrierefreiheit', label: 'Barrierefreiheit', icon: Accessibility },
  { id: 'Sonstiges', label: 'Sonstiges', icon: HelpCircle },
]

const neighborhoods = [
  'Mitte', 'Brackwede', 'Stieghorst', 'Schildesche', 'Gadderbaum',
  'Jöllenbeck', 'Sennestadt', 'Heepen', 'Brake', 'Dornberg',
  'Altenhagen', 'Milse', 'Ummeln', 'Theesen', 'Quelle',
  'Hillegossen', 'Lämershagen',
]

export default function MeldenPage() {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [dragging, setDragging] = useState(false)

  const totalSteps = 5
  const progress = ((step - 1) / (totalSteps - 1)) * 100

  const canProceed = () => {
    if (step === 1) return category !== ''
    if (step === 2) return neighborhood !== ''
    if (step === 3) return title.length >= 5 && description.length >= 30
    return true
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-[#15803d] mb-2">Anliegen melden</h1>
          <p className="text-gray-600">Schritt {step} von {totalSteps}</p>
          <div className="mt-4 h-2 bg-[#e5e7eb] rounded-full">
            <div
              className="h-full bg-[#15803d] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#e5e7eb] p-8">
          {step === 1 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#15803d] mb-2">Kategorie wählen</h2>
              <p className="text-gray-600 mb-6">Um welches Thema handelt es sich?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setCategory(id)}
                    className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border-2 transition-all ${
                      category === id
                        ? 'border-[#15803d] bg-[#f0fdf4] text-[#15803d]'
                        : 'border-[#e5e7eb] hover:border-[#86efac] text-gray-600'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                    <span className="font-medium text-xs text-center">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#15803d] mb-2">Wo ist das Problem?</h2>
              <p className="text-gray-600 mb-6">Wähle den Stadtteil und gib optional die Straße an.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stadtteil *</label>
                  <select
                    value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15803d] bg-white"
                  >
                    <option value="">Stadtteil wählen…</option>
                    {neighborhoods.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Straße / Ort (optional)</label>
                  <input
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    placeholder="z. B. Jöllenbecker Str. 45"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15803d]"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#15803d] mb-2">Beschreibung</h2>
              <p className="text-gray-600 mb-6">Beschreibe das Problem so genau wie möglich.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titel *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Kurzer Titel für dein Anliegen"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15803d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung * (mind. 30 Zeichen)</label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={5}
                    placeholder="Beschreibe das Problem detailliert…"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15803d] resize-none"
                  />
                  <p className={`text-xs mt-1 ${description.length >= 30 ? 'text-[#16a34a]' : 'text-gray-400'}`}>
                    {description.length}/30 Zeichen Mindestlänge
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Foto hochladen (optional)</label>
                  <div
                    onDragOver={e => { e.preventDefault(); setDragging(true) }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={e => { e.preventDefault(); setDragging(false) }}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                      dragging ? 'border-[#15803d] bg-[#f0fdf4]' : 'border-[#e5e7eb] hover:border-[#86efac]'
                    }`}
                  >
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Foto hierher ziehen oder klicken zum Hochladen</p>
                    <p className="text-gray-400 text-xs mt-1">JPG, PNG bis 10 MB</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#15803d] mb-2">Kontakt (optional)</h2>
              <p className="text-gray-600 mb-6">Hinterlasse deine E-Mail-Adresse, um über den Fortschritt deines Anliegens informiert zu werden.</p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail-Adresse (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15803d]"
                />
                <p className="text-xs text-gray-400 mt-2">Deine E-Mail wird niemals öffentlich angezeigt und nur für Statusupdates verwendet.</p>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-4">
              <CheckCircle className="w-20 h-20 text-[#16a34a] mx-auto mb-5" />
              <h2 className="font-serif text-3xl font-bold text-[#15803d] mb-3">Vielen Dank!</h2>
              <p className="text-gray-600 mb-6 text-lg">Dein Anliegen wurde erfolgreich eingereicht und wird in Kürze geprüft.</p>
              <div className="bg-[#f9fafb] rounded-xl border border-[#e5e7eb] p-5 text-left space-y-2 mb-6">
                <p><span className="font-medium text-gray-700">Kategorie:</span> <span className="text-gray-600">{category}</span></p>
                <p><span className="font-medium text-gray-700">Stadtteil:</span> <span className="text-gray-600">{neighborhood}{street ? ` – ${street}` : ''}</span></p>
                {title && <p><span className="font-medium text-gray-700">Titel:</span> <span className="text-gray-600">{title}</span></p>}
                <p><span className="font-medium text-gray-700">Beschreibung:</span> <span className="text-gray-600">{description.slice(0, 80)}{description.length > 80 ? '…' : ''}</span></p>
              </div>
              <a href="/" className="inline-flex items-center gap-2 bg-[#15803d] text-white px-6 py-3 rounded-full font-medium hover:bg-[#166534] transition-colors">
                Zurück zur Startseite
              </a>
            </div>
          )}

          {step < 5 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(s => s - 1)}
                disabled={step === 1}
                className="px-5 py-2.5 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="px-6 py-2.5 bg-[#15803d] text-white rounded-full font-medium hover:bg-[#166534] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {step === 4 ? 'Einreichen' : 'Weiter'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
