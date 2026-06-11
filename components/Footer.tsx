'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-100 bg-white px-6 py-8">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} p66.cars
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/impressum" className="text-slate-400 hover:text-slate-700 transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-slate-400 hover:text-slate-700 transition-colors">
            Datenschutz
          </Link>
          <span className="text-slate-300">|</span>
          <span className="text-slate-400">{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
