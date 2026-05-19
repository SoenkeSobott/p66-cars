'use client'

import Nav from '@/components/Nav'
import { useLanguage } from '@/lib/LanguageContext'

const benefitIcons = [
  <svg key="check" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>,
  <svg key="key" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
  </svg>,
  <svg key="eye" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>,
  <svg key="shield" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>,
]

export default function BuyersPage() {
  const { t } = useLanguage()
  const b = t.buyers

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Nav crossLink={{ href: '/mechanics', label: (t) => t.nav.forMechanics }} />

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-24 flex flex-col items-center text-center gap-6">
        <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
          {b.badge}
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-white max-w-2xl leading-tight">
          {b.hero.title}
        </h1>
        <p className="text-slate-400 text-lg max-w-lg">{b.hero.subtitle}</p>
        <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {b.hero.priceBadge}
        </span>
        <a
          href="#how-it-works"
          className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          {b.hero.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">{b.howItWorks.title}</h2>
        <div className="relative flex flex-col gap-0">
          {b.howItWorks.steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start pb-10 last:pb-0 relative">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < b.howItWorks.steps.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200 mt-2" style={{ minHeight: '2.5rem' }} />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <div className="px-6 max-w-3xl mx-auto w-full pb-12">
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-900">{b.guarantee.title}</h3>
            <p className="text-emerald-800/70 text-sm mt-1">{b.guarantee.description}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 mx-6" />

      {/* Benefits */}
      <section className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">{b.benefits.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {b.benefits.items.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                {benefitIcons[i]}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-20 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold text-white">{b.cta.title}</h2>
        <p className="text-slate-400 max-w-sm">{b.cta.subtitle}</p>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors opacity-70 cursor-not-allowed"
          disabled
        >
          {b.cta.button}
        </button>
      </section>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-slate-800 bg-slate-900">
        &copy; {new Date().getFullYear()} p66.cars
      </footer>
    </main>
  )
}
