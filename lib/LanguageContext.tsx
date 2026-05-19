'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang, type T } from './i18n'

type LanguageContextValue = {
  lang: Lang
  t: T
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'de',
  t: translations.de,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'en' || stored === 'de') setLang(stored)
  }, [])

  const toggle = () => {
    const next: Lang = lang === 'de' ? 'en' : 'de'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
