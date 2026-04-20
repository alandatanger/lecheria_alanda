"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage, type Language } from "@/components/language-provider"
import { languageLabels } from "@/lib/translations"

const languageOptions: Language[] = ["fr", "en", "es"]

export function ThemeLanguageBar() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleLangSelect = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setLangOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <button
          type="button"
          onClick={() => setLangOpen((open) => !open)}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-amber-50 px-3 py-1.5 rounded-full font-medium shadow-md transition-all active:scale-95 text-sm border border-amber-500"
        >
          <span>{languageLabels[language]}</span>
          <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
        </button>

        {langOpen && (
          <div className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-amber-100 dark:border-amber-900 overflow-hidden z-[60]">
            {languageOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors border-b border-amber-50 dark:border-amber-900/50 last:border-0"
                onClick={() => handleLangSelect(option)}
              >
                {languageLabels[option]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

