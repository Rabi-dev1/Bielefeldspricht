'use client'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Bitte gib deinen Namen an.'
    if (!form.email.includes('@')) e.email = 'Bitte gib eine gültige E-Mail-Adresse an.'
    if (form.message.length < 20) e.message = 'Bitte schreib mindestens 20 Zeichen.'
    return e
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
  }

  if (sent) return (
    <div className="text-center py-10">
      <CheckCircle className="w-16 h-16 text-[#4a7c59] mx-auto mb-4" />
      <h3 className="font-serif text-2xl font-bold text-[#1a3a5c] mb-2">Nachricht gesendet!</h3>
      <p className="text-gray-600">Wir melden uns in der Regel innerhalb von 24 Stunden.</p>
    </div>
  )

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
        <input type="text" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]" placeholder="Dein Name" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
        <input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]" placeholder="deine@email.de" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
        <textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
          rows={5} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] resize-none"
          placeholder="Wie können wir dir helfen?" />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full bg-[#1a3a5c] text-white font-semibold py-3 rounded-full hover:bg-[#15304d] transition-colors">
        Nachricht senden
      </button>
    </form>
  )
}
