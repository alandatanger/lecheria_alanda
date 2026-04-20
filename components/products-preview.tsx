"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import { commonTranslations } from "@/lib/translations"

const productIcons = ["☕", "🍕", "🍰", "🍽️"]

export default function ProductsPreview() {
  const { language } = useLanguage()
  const t = commonTranslations.products[language]

  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">{t.title}</h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">{t.description}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children">
          {t.categories.map((product, index) => (
            <AnimatedSection
              key={product.name}
              animation="scale"
              delay={index * 100}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center hover:border-amber-500/30 hover:shadow-xl dark:hover:bg-slate-800 transition-all group"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{productIcons[index]}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{product.name}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm">{product.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-600 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            {t.cta}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

