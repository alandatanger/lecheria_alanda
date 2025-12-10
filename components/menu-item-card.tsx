"use client"

import { SimpleImage } from "@/components/simple-image"

interface MenuItemProps {
    item: {
        name: string
        description: string
        price: string
        image: string
    }
}

export function MenuItemCard({ item }: MenuItemProps) {
    return (
        <div className="bg-card text-card-foreground rounded-2xl overflow-hidden shadow-lg border border-border hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden">
                <SimpleImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{item.name}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {item.description}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                    <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 text-amber-600 dark:text-amber-500 font-bold px-4 py-1.5 rounded-full text-sm shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                        {item.price}
                    </div>
                    <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full shadow-lg transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 active:scale-95 border border-amber-400/20">
                        + Ajouter
                    </button>
                </div>
            </div>
        </div>
    )
}
