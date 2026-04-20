"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "fr" | "en" | "es"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const STORAGE_KEY = "alanda_language_v1"

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY)

    if (storedLanguage === "fr" || storedLanguage === "en" || storedLanguage === "es") {
      setLanguageState(storedLanguage)
      document.documentElement.lang = storedLanguage
      return
    }

    document.documentElement.lang = "fr"
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    document.documentElement.lang = nextLanguage
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}

