"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ShieldCheck, Cookie } from "lucide-react"

type ConsentStatus = "accepted" | "rejected" | "custom"

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    // Settings state
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true)

    useEffect(() => {
        // Check if consent is already stored
        const storedConsent = localStorage.getItem("cookie_consent")
        if (!storedConsent) {
            // Small delay for animation
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        } else if (storedConsent === "custom") {
            // Restore settings if custom (simplified logic, usually we'd store detail)
            const storedAnalytics = localStorage.getItem("cookie_analytics")
            if (storedAnalytics === "true") {
                enableAnalytics()
            }
        } else if (storedConsent === "accepted") {
            enableAnalytics()
        }
    }, [])

    const enableAnalytics = () => {
        // Enable Google Analytics here
        // @ts-ignore
        window[`ga-disable-G-PLACEHOLDER`] = false;
        // If you load the script conditionally in layout, you might trigger a re-render or reload
        // For now we just set the localStorage flag that other components checks
    }

    const disableAnalytics = () => {
        // @ts-ignore
        window[`ga-disable-G-PLACEHOLDER`] = true;
    }

    const handleAcceptAll = () => {
        localStorage.setItem("cookie_consent", "accepted")
        localStorage.setItem("cookie_analytics", "true")
        enableAnalytics()
        setIsVisible(false)
        window.location.reload() // Reload to activate scripts
    }

    const handleRejectAll = () => {
        localStorage.setItem("cookie_consent", "rejected")
        localStorage.setItem("cookie_analytics", "false")
        disableAnalytics()
        setIsVisible(false)
    }

    const handleSaveSettings = () => {
        localStorage.setItem("cookie_consent", "custom")
        localStorage.setItem("cookie_analytics", analyticsEnabled.toString())
        if (analyticsEnabled) {
            enableAnalytics()
        } else {
            disableAnalytics()
        }
        setIsVisible(false)
        if (analyticsEnabled) window.location.reload()
    }

    if (!isVisible && !showSettings) return null

    return (
        <>
            {/* Main Banner */}
            {isVisible && !showSettings && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white dark:bg-slate-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-amber-100 dark:border-slate-800 animate-fade-up">
                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1 space-y-2">
                            <h3 className="text-lg font-handwriting font-bold text-amber-700 dark:text-amber-500 flex items-center gap-2">
                                <Cookie className="w-5 h-5" />
                                Respect de votre vie privée
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed md:max-w-2xl">
                                Nous utilisons des cookies pour garantir le bon fonctionnement de notre site, analyser notre trafic et améliorer votre expérience.
                                Certains cookies sont essentiels, d'autres (comme Google Analytics) nous aident à grandir.
                            </p>
                            <Link href="/politique-cookies" className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">
                                En savoir plus sur notre politique de cookies
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
                            <button
                                onClick={() => setShowSettings(true)}
                                className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
                            >
                                Paramétrer
                            </button>
                            <button
                                onClick={handleRejectAll}
                                className="px-4 py-2 text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30"
                            >
                                Tout refuser
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-6 py-2 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors transform hover:scale-105"
                            >
                                Tout accepter
                            </button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 md:hidden"
                            aria-label="Fermer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Settings Modal */}
            {showSettings && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-amber-100 dark:border-slate-800 animate-scale">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-amber-50/50 dark:bg-slate-900/50">
                            <h3 className="text-xl font-handwriting font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-amber-600" />
                                Préférences de cookies
                            </h3>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Fermer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                        Nécessaires <span className="text-[10px] uppercase bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400 font-bold">Requis</span>
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Ces cookies sont indispensables au fonctionnement du site (session, sécurité, préférences).
                                    </p>
                                </div>
                                <div className="relative inline-flex items-center cursor-not-allowed opacity-70">
                                    <div className="w-11 h-6 bg-amber-600 rounded-full"></div>
                                    <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex items-start justify-between gap-4 p-3 rounded-lg border border-slate-200 hover:border-amber-200 transition-colors dark:border-slate-700 dark:hover:border-amber-900/30">
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Statistiques (Google Analytics)</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Nous aident à comprendre comment vous utilisez le site pour l'améliorer (anonyme).
                                    </p>
                                </div>
                                <button
                                    role="switch"
                                    aria-checked={analyticsEnabled}
                                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 ${analyticsEnabled ? 'bg-amber-600' : 'bg-slate-200 dark:bg-slate-700'
                                        }`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${analyticsEnabled ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 bg-slate-50/50 dark:bg-slate-900/50">
                            <button
                                onClick={() => setShowSettings(false)}
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleSaveSettings}
                                className="px-6 py-2 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors"
                            >
                                Enregistrer mes préférences
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
