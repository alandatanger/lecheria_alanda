"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Instagram, Facebook } from "lucide-react"
import { WeatherWidget } from "@/components/weather-widget"
import { AnimatedSection } from "@/components/animated-section"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white pt-20 pb-10 border-t border-slate-100 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 stagger-children">

          {/* Col 1: Brand & Socials */}
          <AnimatedSection animation="fade-up" delay={0} className="space-y-8">
            <div className="flex flex-col items-start gap-4">
              <Image src="/logo-alanda.png" alt="Alanda Logo" width={220} height={90} className="object-contain -ml-2" />
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                L'excellence artisanale au cœur de Tanger. Produits laitiers frais, jus naturels et petits déjeuners inoubliables.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs">Suivez-nous</h4>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:text-white transition-all duration-300 group shadow-sm">
                  <Instagram size={18} className="text-slate-400 dark:text-gray-400 group-hover:text-white" />
                </Link>
                <Link href="https://facebook.com" className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent hover:text-white transition-all duration-300 group shadow-sm">
                  <Facebook size={18} className="text-slate-400 dark:text-gray-400 group-hover:text-white" />
                </Link>
                <Link href="https://tiktok.com" className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center hover:bg-black hover:border-white/20 hover:text-white transition-all duration-300 group shadow-sm">
                  <span className="font-bold text-xs text-slate-400 dark:text-gray-400 group-hover:text-white">Tk</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Col 2: Horaires (Clean List) & Address */}
          <AnimatedSection animation="fade-up" delay={200} className="">
            <h3 className="text-2xl font-serif italic text-slate-900 dark:text-white mb-8 relative inline-block">
              Nos Horaires
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
            </h3>
            <div className="space-y-4 mb-8">
              {[
                { day: "Lundi - Jeudi", hours: "8h00 - 00h00" },
                { day: "Vendredi - Samedi", hours: "8h00 - 01h00", highlight: true },
                { day: "Dimanche", hours: "8h00 - 00h00" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-white/5 last:border-0 hover:pl-2 transition-all cursor-default">
                  <span className="text-slate-600 dark:text-gray-400 font-medium">{item.day}</span>
                  <span className={`${item.highlight ? "text-amber-500 dark:text-amber-400 font-bold" : "text-slate-800 dark:text-white"}`}>{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 hover:border-amber-500/30 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-amber-500" size={20} />
                <span className="font-bold text-slate-900 dark:text-white">Nous trouver</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-gray-400 pl-8">87 Rue 17, Tanger 90000</p>
            </div>
          </AnimatedSection>

          {/* Col 3: Action & Weather */}
          <AnimatedSection animation="fade-up" delay={400} className="flex flex-col space-y-8">
            {/* Weather Widget */}
            <WeatherWidget />

            {/* Glovo / Command */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h4 className="text-slate-900 dark:text-gray-200 font-bold mb-4">Envie de commander ?</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:0611052696" className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20">
                  <Phone size={18} /> Appel Direct
                </a>
                <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-emerald-500/30 bg-emerald-50 dark:bg-black/20">
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
                  <div className="p-3 text-center">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg tracking-wide group-hover:scale-105 inline-block transition-transform">Commandez sur Glovo</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Footer Bottom */}
        <AnimatedSection animation="fade-up" delay={600} className="border-t border-slate-200 dark:border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-gray-500">
          <p>© 2025 Lecheria Alanda. Fait avec passion.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-amber-500 transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Confidentialité</Link>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
