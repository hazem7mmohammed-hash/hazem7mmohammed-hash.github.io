/* oxlint-disable react/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from './types'
import { translations } from './content'

type DictKey = keyof typeof translations.en

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: <K extends DictKey>(key: K) => (typeof translations.en)[K]
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLang(): Lang {
  const urlParam = new URLSearchParams(window.location.search).get('lang')
  if (urlParam === 'en' || urlParam === 'ar') return urlParam
  try {
    const stored = localStorage.getItem('portfolio-lang')
    if (stored === 'en' || stored === 'ar') return stored
    if (navigator.language.toLowerCase().startsWith('ar')) return 'ar'
  } catch {
    // ignore storage errors
  }
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('portfolio-lang', next)
    } catch {
      // ignore storage errors
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const t = useCallback(
    <K extends DictKey>(key: K): (typeof translations.en)[K] => translations[lang][key],
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}