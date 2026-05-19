'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const inputCls =
  'w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors bg-white'

export default function BuyerForm() {
  const { t } = useLanguage()
  const f = t.buyers.form

  const [fields, setFields] = useState({
    name: '', email: '', phone: '', carDetails: '', location: '', date: '', message: '',
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
      body: JSON.stringify({ type: 'buyer', ...fields }),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <svg className="w-8 h-8 text-emerald-500 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className="text-emerald-800 font-semibold">{f.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">{f.name} *</label>
          <input required className={inputCls} value={fields.name} onChange={set('name')} placeholder="Max Mustermann" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">{f.email} *</label>
          <input required type="email" className={inputCls} value={fields.email} onChange={set('email')} placeholder="max@beispiel.de" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">{f.phone}</label>
          <input type="tel" className={inputCls} value={fields.phone} onChange={set('phone')} placeholder="+49 170 1234567" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">{f.date}</label>
          <input type="date" className={inputCls} value={fields.date} onChange={set('date')} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">{f.carDetails} *</label>
        <input required className={inputCls} value={fields.carDetails} onChange={set('carDetails')} placeholder="z.B. VW Golf 2018, 80.000 km — oder Inserat-Link" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">{f.location} *</label>
        <input required className={inputCls} value={fields.location} onChange={set('location')} placeholder="z.B. München, Bayern" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-slate-700">{f.message}</label>
        <textarea rows={3} className={inputCls} value={fields.message} onChange={set('message')} placeholder="…" />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">{f.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
      >
        {status === 'loading' ? f.submitting : f.submit}
      </button>
    </form>
  )
}
