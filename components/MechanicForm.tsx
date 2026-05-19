'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const inputCls =
  'w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-colors bg-white'

export default function MechanicForm() {
  const { t } = useLanguage()
  const f = t.mechanics.form

  const [fields, setFields] = useState({
    name: '', email: '', phone: '', area: '', qualifications: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'mechanic', ...fields }),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white/60 border border-amber-200 p-8 text-center">
        <svg className="w-8 h-8 text-amber-600 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className="text-slate-900 font-semibold">{f.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-800">{f.name} *</label>
          <input required className={inputCls} value={fields.name} onChange={set('name')} placeholder="Max Mustermann" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-800">{f.email} *</label>
          <input required type="email" className={inputCls} value={fields.email} onChange={set('email')} placeholder="max@beispiel.de" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-800">{f.phone} *</label>
          <input required type="tel" className={inputCls} value={fields.phone} onChange={set('phone')} placeholder="+49 170 1234567" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-800">{f.area} *</label>
          <input required className={inputCls} value={fields.area} onChange={set('area')} placeholder="z.B. München & Umgebung" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-800">{f.qualifications}</label>
        <input className={inputCls} value={fields.qualifications} onChange={set('qualifications')} placeholder="z.B. Kfz-Meister, 10 Jahre Erfahrung" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-800">{f.message}</label>
        <textarea rows={3} className={inputCls} value={fields.message} onChange={set('message')} placeholder="…" />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{f.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
      >
        {status === 'loading' ? f.submitting : f.submit}
      </button>
    </form>
  )
}
