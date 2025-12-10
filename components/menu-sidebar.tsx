"use client"

import { cn } from "@/lib/utils"
import { Coffee, Utensils } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface Category {
    id: string
    name: string
    icon?: any
}

interface MenuSidebarProps {
    categories: Category[]
    activeCategory: string
    onSelectCategory: (id: string) => void
}

export function MenuSidebar({ categories, activeCategory, onSelectCategory }: MenuSidebarProps) {
    return (
        <aside className="w-64 bg-card border-r border-border h-full min-h-screen hidden lg:block sticky top-20 overflow-y-auto custom-scrollbar transition-colors duration-300">
            <div className="p-6">
                <AnimatedSection animation="fade-right" className="mb-8">
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 px-2 flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-amber-500" />
                        MENU
                    </h2>
                </AnimatedSection>
                <nav className="space-y-1 stagger-children">
                    {categories.map((cat, index) => (
                        <AnimatedSection
                            key={cat.id}
                            animation="fade-left"
                            delay={index * 50}
                            className="w-full"
                        >
                            <button
                                onClick={() => onSelectCategory(cat.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left group border border-transparent",
                                    activeCategory === cat.id
                                        ? "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)] transform scale-105 border-amber-400/20"
                                        : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                                )}
                            >
                                <div className={cn(
                                    "p-2 rounded-lg transition-colors shadow-inner",
                                    activeCategory === cat.id ? "bg-black/20 text-amber-100" : "bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700"
                                )}>
                                    {/* Fallback to Coffee if no icon provided, or handle dynamic mapping outside */}
                                    <Coffee size={18} />
                                </div>
                                <span className="font-medium text-sm tracking-wide">{cat.name}</span>
                            </button>
                        </AnimatedSection>
                    ))}
                </nav>
            </div>
        </aside>
    )
}
