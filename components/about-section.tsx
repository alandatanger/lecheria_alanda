"use client"

import { SimpleImage } from "@/components/simple-image"
import { Waves } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <AnimatedSection animation="fade-right" className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="font-handwriting text-3xl md:text-4xl text-amber-500 mb-2 transform -rotate-2">
                            À Propos De Nous
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight uppercase">
                            ALANDA
                        </h2>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-amber-500/50"></div>
                            <Waves className="text-emerald-500 w-8 h-8" />
                            <div className="h-px w-12 bg-amber-500/50"></div>
                        </div>

                        <div className="space-y-6 text-slate-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                            <p>
                                Ancrée dans l'histoire moderne de Tanger, <span className="font-bold text-amber-600 dark:text-amber-400">Lecheria Alanda</span> est une référence dans l'artisanat laitier et culinaire.
                            </p>
                            <p>
                                Nous comblons les goûts les plus raffinés en offrant une expérience unique, alliant tradition et fraîcheur. Notre mission est de vous transporter au-delà de la plénitude dans une atmosphère authentique, charmante et harmonieuse.
                            </p>
                            <p>
                                L'ensemble de l'équipe, de nos chefs passionnés à nos serveurs dévoués, a à cœur de vous servir et de dessiner le sourire sur votre visage à chaque visite.
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="inline-block p-4 border border-amber-500/30 rounded-full">
                                <span className="font-serif italic text-slate-500 dark:text-gray-400">"La qualité est notre signature."</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Column: Image */}
                    <AnimatedSection animation="fade-left" delay={200} className="relative group">
                        <div className="absolute inset-0 bg-amber-500 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                            <SimpleImage
                                src="/serv.jpeg"
                                alt="Nos chefs en cuisine"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={80}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-amber-500/20 max-w-[200px] hidden md:block transform hover:scale-105 transition-transform">
                            <p className="text-4xl font-bold text-emerald-500 mb-1">100%</p>
                            <p className="text-sm font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Frais & Naturel</p>
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    )
}
