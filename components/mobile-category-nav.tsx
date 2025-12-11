"use client"

import { cn } from "@/lib/utils"
import { useRef, useEffect } from "react"

interface Category {
    id: string
    name: string
}

interface MobileCategoryNavProps {
    categories: Category[]
    activeCategory: string
    onSelectCategory: (id: string) => void
}

export function MobileCategoryNav({ categories, activeCategory, onSelectCategory }: MobileCategoryNavProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    // Scroll active item into view
    useEffect(() => {
        if (scrollRef.current) {
            const activeElement = scrollRef.current.querySelector('[data-active="true"]')
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            }
        }
    }, [activeCategory])

    return (
        <div className="lg:hidden sticky top-[80px] z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 py-3 mb-6 transition-colors duration-300">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-3 px-4 no-scrollbar items-center w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        data-active={activeCategory === cat.id}
                        onClick={() => onSelectCategory(cat.id)}
                        className={cn(
                            "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex-shrink-0 border",
                            activeCategory === cat.id
                                ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/25 scale-105"
                                : "bg-gray-100 dark:bg-slate-900/50 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/5 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:border-amber-200"
                        )}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
            {/* Gradient hints for scrolling */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
        </div>
    )
}
