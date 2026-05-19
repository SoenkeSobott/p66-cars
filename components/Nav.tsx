'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

type NavProps = {
  crossLink?: { href: string; label: (t: ReturnType<typeof useLanguage>['t']) => string }
}

export default function Nav({ crossLink }: NavProps) {
  const { t, lang, toggle } = useLanguage()

  return (
    <nav className="px-6 py-5 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
        {t.nav.brand}
      </Link>
      <div className="flex items-center gap-4">
        {crossLink && (
          <Link
            href={crossLink.href}
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden sm:block"
          >
            {crossLink.label(t)}
          </Link>
        )}
        <button
          onClick={toggle}
          className="text-xs font-semibold tracking-widest uppercase bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg transition-colors"
        >
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </div>
    </nav>
  )
}
