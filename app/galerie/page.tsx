"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { SimpleImage } from "@/components/simple-image"
import { AnimatedSection } from "@/components/animated-section"

const libraryImages = [
    { src: "/HOU08180.jpg", title: "Notre Espace", description: "Un cadre chaleureux et convivial" },
    { src: "/HOU08185.jpg", title: "Petits Déjeuners", description: "Pour bien commencer la journée" },
    { src: "/HOU07669.JPG", title: "Produits Frais", description: "Ingrédients de qualité supérieure" },
    { src: "/HOU08216.jpg", title: "Ambiance", description: "Détente et plaisir garantis" },
    { src: "/HOU08221.jpg", title: "Service", description: "Une équipe à votre écoute" },
    { src: "/HOU08232.jpg", title: "Détails", description: "L'excellence dans chaque détail" },
]

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
            <Header />
            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fade-up" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Notre Galerie</h1>
                        <div className="h-1 w-24 bg-amber-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Une immersion visuelle dans l'univers de Lecheria Alanda.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
                        {libraryImages.map((img, idx) => (
                            <AnimatedSection
                                key={idx}
                                animation="scale"
                                delay={idx * 100}
                                className="group relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                            >
                                <SimpleImage
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={80}
                                    className="transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                                    <p className="text-amber-400 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
