"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeLanguageBar } from "@/components/theme-language-bar"
import { useLanguage } from "@/components/language-provider"
import { commonTranslations } from "@/lib/translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()
  const t = commonTranslations.header[language]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
              <div className="relative h-20 w-auto transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-2">
                <Image
                  src="/logo_alanda-2.png"
                  alt="Lecheria Alanda Logo"
                  width={200}
                  height={80}
                  className="h-full w-auto object-contain drop-shadow-lg invert dark:invert-0"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-8 items-center">
              <Link
                href="/"
                className="px-2 py-2 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-medium text-sm tracking-[0.2em] uppercase relative group"
              >
                {t.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/menu"
                className="px-2 py-2 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-medium text-sm tracking-[0.2em] uppercase relative group"
              >
                {t.menu}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/galerie"
                className="px-2 py-2 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-medium text-sm tracking-[0.2em] uppercase relative group"
              >
                {t.gallery}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="px-2 py-2 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-medium text-sm tracking-[0.2em] uppercase relative group"
              >
                {t.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="ml-4 pl-4 border-l border-slate-300 dark:border-white/10 h-8 flex items-center">
                <ThemeLanguageBar />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} className="text-slate-700 dark:text-amber-500" /> : <Menu size={28} className="text-slate-700 dark:text-amber-500" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="lg:hidden pb-6 pt-2 flex flex-col gap-2 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 shadow-lg">
              <Link
                href="/"
                className="block px-4 py-3 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/menu"
                className="block px-4 py-3 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {t.menu}
              </Link>
              <Link
                href="/galerie"
                className="block px-4 py-3 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {t.gallery}
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-slate-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors font-medium text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {t.contact}
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
