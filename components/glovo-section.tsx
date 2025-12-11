"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function GlovoSection() {
    return (
        <section className="relative w-full py-16 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 rounded-3xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-emerald-100 dark:border-emerald-900/30">

                    {/* Image Section - Left on desktop, Top on mobile */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-96 group overflow-hidden">
                        <Image
                            src="/glovo.jpg"
                            alt="Livraison Glovo Alanda"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                                LIVRAISON RAPIDE
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-start text-left">
                        <AnimatedSection animation="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Lecheria Alanda <span className="text-emerald-500">chez vous !</span>
                            </h2>
                            <p className="text-slate-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                Profitez de vos plats préférés sans bouger de chez vous. Nous sommes partenaires officiels de Glovo pour vous garantir une livraison rapide et soignée.
                            </p>

                            <a
                                href="https://glovoapp.com/fr/ma/tanger/stores/lecheria-alanda-tng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 bg-[#FFC244] hover:bg-[#FFD066] text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20"
                            >
                                <span className="relative">
                                    Commander maintenant
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                </span>
                                <div className="bg-white rounded-full p-1">
                                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                            <p className="mt-4 text-xs text-slate-500 dark:text-gray-500 italic">
                                * Disponible sur l'application et le site web Glovo
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    )
}
