"use client"

import React from "react"
import { Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeLanguageBar() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [langOpen, setLangOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState("Français")

    useEffect(() => setMounted(true), [])

    const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    const handleLangSelect = (lang: string) => {
        setCurrentLang(lang)
        setLangOpen(false)
        // Future: Implement actual translation context here
        console.log(`Language changed to: ${lang}`)
    }

    if (!mounted) return null

    return (
        <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {/* Theme Toggle Removed */}

            {/* Language Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-amber-50 px-3 py-1.5 rounded-full font-medium shadow-md transition-all active:scale-95 text-sm border border-amber-500"
                >
                    <span>{currentLang}</span>
                    <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                {langOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-amber-100 dark:border-amber-900 overflow-hidden z-[60]">
                        <button className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors border-b border-amber-50 dark:border-amber-900/50 last:border-0" onClick={() => handleLangSelect("Français")}>Français</button>
                        <button className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors border-b border-amber-50 dark:border-amber-900/50 last:border-0" onClick={() => handleLangSelect("English")}>English</button>
                        <button className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors" onClick={() => handleLangSelect("Español")}>Español</button>
                    </div>
                )}
            </div>
        </div>
    )
}
