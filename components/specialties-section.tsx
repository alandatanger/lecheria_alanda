"use client"

import { Coffee, CakeSlice, UtensilsCrossed, IceCream } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SpecialtiesSection() {
    const specialties = [
        {
            title: "CAFÉ EXCEPTIONNEL",
            icon: <Coffee size={40} className="mb-4" />,
            description: "Une sélection des meilleurs grains."
        },
        {
            title: "PÂTISSERIE RAFFINÉE",
            icon: <CakeSlice size={40} className="mb-4" />,
            description: "Douceurs artisanales faites maison."
        },
        {
            title: "CUISINE EXQUISE",
            icon: <UtensilsCrossed size={40} className="mb-4" />,
            description: "Plats savoureux pour tous les goûts."
        },
        {
            title: "GLACES ARTISANALES",
            icon: <IceCream size={40} className="mb-4" />,
            description: "Fraîcheur et parfums authentiques."
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection animation="fade-up" className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-slate-800 dark:text-amber-500">
                        SAVEURS ET PLAISIRS
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
                    {specialties.map((spec, idx) => (
                        <AnimatedSection
                            key={idx}
                            animation="scale"
                            delay={idx * 100}
                            className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-500/20 rounded-xl shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="text-slate-700 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                                {spec.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                                {spec.title}
                            </h3>
                            <div className="w-8 h-1 bg-amber-500 rounded-full dark:bg-amber-600 mb-2"></div>
                            {/* Small dot decoration as in reference image if visible, usually minimal text */}
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
