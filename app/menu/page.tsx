"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MenuSidebar } from "@/components/menu-sidebar"
import { MenuItemCard } from "@/components/menu-item-card"
import { categories, products } from "@/lib/menu-data"
import { AnimatedSection } from "@/components/animated-section"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const filteredProducts = products.filter(
    (product) => product.categoryId === activeCategory
  )

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Header />

      <div className="flex flex-1 mx-auto w-full relative">
        {/* Sidebar */}
        <MenuSidebar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 lg:p-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up" className="mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 capitalize tracking-tight">
                {categories.find(c => c.id === activeCategory)?.name || "Menu"}
              </h1>
              <div className="h-1 w-20 bg-amber-500 rounded-full mb-4"></div>
              <p className="text-slate-600 dark:text-gray-400 text-lg">Découvrez nos produits faits avec passion</p>
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
                <p className="text-2xl font-light mb-2">Bientôt disponible</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Nous travaillons sur de nouvelles recettes pour cette catégorie.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
