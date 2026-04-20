"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X, ShieldCheck, Cookie } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import {
  COOKIE_CONSENT_EVENT,
  OPEN_COOKIE_PREFERENCES_EVENT,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent"
import { commonTranslations } from "@/lib/translations"

function getInitialPreferences(consent: CookieConsentState | null) {
  return {
    analytics: consent?.analytics ?? false,
  }
}

export function CookieBanner() {
  const { language } = useLanguage()
  const t = commonTranslations.cookies[language]
  const [isHydrated, setIsHydrated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    setIsHydrated(true)

    const existingConsent = readCookieConsent()
    const preferences = getInitialPreferences(existingConsent)
    setAnalyticsEnabled(preferences.analytics)

    if (!existingConsent) {
      const timer = window.setTimeout(() => setIsVisible(true), 300)
      return () => window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleOpenPreferences = () => {
      const existingConsent = readCookieConsent()
      const preferences = getInitialPreferences(existingConsent)

      setAnalyticsEnabled(preferences.analytics)
      setIsVisible(true)
      setShowSettings(true)
    }

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences)

    return () => {
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences)
    }
  }, [])

  useEffect(() => {
    const handleConsentChanged = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentState>
      setAnalyticsEnabled(Boolean(customEvent.detail?.analytics))
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChanged)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChanged)
    }
  }, [])

  const closeBanner = () => {
    setIsVisible(false)
    setShowSettings(false)
  }

  const handleAcceptAll = () => {
    writeCookieConsent({ status: "accepted", analytics: true })
    setAnalyticsEnabled(true)
    closeBanner()
  }

  const handleRejectAll = () => {
    writeCookieConsent({ status: "rejected", analytics: false })
    setAnalyticsEnabled(false)
    closeBanner()
  }

  const handleSaveSettings = () => {
    writeCookieConsent({
      status: "custom",
      analytics: analyticsEnabled,
    })
    closeBanner()
  }

  if (!isHydrated || !isVisible) {
    return null
  }

  return (
    <>
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white dark:bg-slate-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-amber-100 dark:border-slate-800 animate-fade-up animate-visible">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-handwriting font-bold text-amber-700 dark:text-amber-500 flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                {t.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed md:max-w-2xl">{t.text}</p>
              <Link href="/politique-cookies" className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">
                {t.more}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
              >
                {t.customize}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30"
              >
                {t.reject}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors transform hover:scale-105"
              >
                {t.accept}
              </button>
            </div>

            <button
              onClick={closeBanner}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 md:hidden"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-amber-100 dark:border-slate-800 animate-scale animate-visible">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-amber-50/50 dark:bg-slate-900/50">
              <h3 className="text-xl font-handwriting font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                {t.preferences}
              </h3>
              <button onClick={closeBanner} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Fermer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    {t.required}
                    <span className="text-[10px] uppercase bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400 font-bold">
                      {t.requiredBadge}
                    </span>
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.requiredDesc}</p>
                </div>
                <div className="relative inline-flex items-center cursor-not-allowed opacity-70">
                  <div className="w-11 h-6 bg-amber-600 rounded-full"></div>
                  <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-lg border border-slate-200 hover:border-amber-200 transition-colors dark:border-slate-700 dark:hover:border-amber-900/30">
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{t.stats}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.statsDesc}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((current) => !current)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 ${
                    analyticsEnabled ? "bg-amber-600" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      analyticsEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 bg-slate-50/50 dark:bg-slate-900/50">
              <button onClick={handleRejectAll} className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {t.reject}
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
