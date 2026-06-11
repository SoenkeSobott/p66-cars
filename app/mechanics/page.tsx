'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MechanicForm from '@/components/MechanicForm'
import { useLanguage } from '@/lib/LanguageContext'

const benefitIcons = [
  <svg key="euro" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>,
  <svg key="calendar" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>,
  <svg key="bolt" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="clipboard" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg>,
]

export default function MechanicsPage() {
  const { t } = useLanguage()
  const m = t.mechanics

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Nav crossLink={{ href: '/buyers', label: (t) => t.nav.forBuyers }} />

      {/* Hero */}
      <section className="bg-amber-400 px-6 py-24 flex flex-col items-center text-center gap-6">
        <span className="inline-flex items-center gap-2 bg-amber-900/10 text-amber-900 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
          {m.badge}
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">
          {m.hero.title}
        </h1>
        <p className="text-amber-900/70 text-lg max-w-lg">{m.hero.subtitle}</p>
        <a
          href="#how-it-works"
          className="mt-2 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          {m.hero.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">{m.howItWorks.title}</h2>
        <div className="relative flex flex-col gap-0">
          {m.howItWorks.steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start pb-10 last:pb-0">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-sm font-bold z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < m.howItWorks.steps.length - 1 && (
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

      <div className="border-t border-slate-100 mx-6" />

      {/* Benefits */}
      <section className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">{m.benefits.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {m.benefits.items.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
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

      {/* Contact form */}
      <section className="bg-amber-400 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">{m.cta.title}</h2>
            <p className="text-amber-900/70 mt-2">{m.cta.subtitle}</p>
          </div>
          <MechanicForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
