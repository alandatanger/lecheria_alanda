"use client"

import React from "react"
import { Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeLanguageBar() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [langOpen, setLangOpen] = useState(false)

    useEffect(() => setMounted(true), [])

    const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    if (!mounted) return null

    return (
        <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
                type="button"
                onClick={handleThemeToggle}
                className="p-2 rounded-full bg-amber-50 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 cursor-pointer relative z-10"
                aria-label="Toggle Theme"
            >
                {resolvedTheme === "dark"
                    ? <Sun size={20} className="pointer-events-none" />
                    : <Moon size={20} className="pointer-events-none" />}
            </button>

            {/* Language Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-amber-50 px-3 py-1.5 rounded-full font-medium shadow-md transition-all active:scale-95 text-sm border border-amber-500"
                >
                    <span>Français</span>
                    <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                {langOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-amber-100 dark:border-amber-900 overflow-hidden z-[60]">
                        <button className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors border-b border-amber-50 dark:border-amber-900/50 last:border-0" onClick={() => setLangOpen(false)}>Français</button>
                        <button className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors border-b border-amber-50 dark:border-amber-900/50 last:border-0" onClick={() => setLangOpen(false)}>English</button>
                        <button className="w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 text-sm text-amber-900 dark:text-amber-100 transition-colors" onClick={() => setLangOpen(false)}>Español</button>
                    </div>
                )}
            </div>
        </div>
    )
}
