"use client"

import { useMemo, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MenuSidebar } from "@/components/menu-sidebar"
import { MobileCategoryNav } from "@/components/mobile-category-nav"
import { MenuItemCard } from "@/components/menu-item-card"
import { categories, products } from "@/lib/menu-data"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import { commonTranslations, menuCategoryTranslations, menuProductTranslations } from "@/lib/translations"

export default function MenuPage() {
  const { language } = useLanguage()
  const t = commonTranslations.menuPage[language]
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const translatedCategories = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        name: menuCategoryTranslations[category.id as keyof typeof menuCategoryTranslations]?.[language] ?? category.name,
      })),
    [language],
  )

  const filteredProducts = useMemo(
    () =>
      products
        .filter((product) => product.categoryId === activeCategory)
        .map((product) => ({
          ...product,
          name: menuProductTranslations[product.id as keyof typeof menuProductTranslations]?.[language]?.name ?? product.name,
          description:
            menuProductTranslations[product.id as keyof typeof menuProductTranslations]?.[language]?.description ?? product.description,
        })),
    [activeCategory, language],
  )

  const activeCategoryName = translatedCategories.find((category) => category.id === activeCategory)?.name ?? t.titleFallback

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Header />

      <div className="flex flex-1 mx-auto w-full relative">
        <MenuSidebar categories={translatedCategories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

        <main className="flex-1 w-full transition-colors duration-300">
          <MobileCategoryNav categories={translatedCategories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-10">
            <AnimatedSection animation="fade-up" className="mb-8 md:mb-10 mt-4 md:mt-8">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 capitalize tracking-tight">
                {activeCategoryName}
              </h1>
              <div className="h-1 w-20 bg-amber-500 rounded-full mb-4"></div>
              <p className="text-slate-600 dark:text-gray-400 text-lg">{t.subtitle}</p>
            </AnimatedSection>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 stagger-children">
                {filteredProducts.map((item, index) => (
                  <AnimatedSection key={item.id} animation="scale" delay={index * 50}>
                    <MenuItemCard item={item} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-gray-500 dark:text-gray-400 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-slate-300 dark:border-slate-800 border-dashed">
                <p className="text-2xl font-light mb-2">{t.emptyTitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.emptyDescription}</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

