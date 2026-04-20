"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { commonTranslations } from "@/lib/translations"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = commonTranslations.contactPage[language]

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up animate-visible">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{t.title}</h1>
            <div className="h-1 w-24 bg-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-up animate-visible delay-100">
            <div className="space-y-8 bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{t.phone}</h3>
                  <a href="tel:0611052696" className="text-slate-600 dark:text-gray-400 hover:text-amber-500 transition-colors text-lg">
                    0611052696
                  </a>
                  <p className="text-sm text-slate-500 dark:text-gray-500 mt-1">{t.phoneNote}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{t.address}</h3>
                  <p className="text-slate-600 dark:text-gray-400">87 Rue 17, Tanger 90000</p>
                  <a
                    href="https://maps.app.goo.gl/QHj1BJ4R15DSzLK19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm mt-3 font-medium border border-amber-500/30 px-4 py-2 rounded-full hover:bg-amber-500/10 transition-all"
                  >
                    {t.openMap}
                    <MapPin size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{t.hours}</h3>
                  <p className="text-slate-600 dark:text-gray-400">{t.days}</p>
                  <p className="text-slate-900 dark:text-white font-medium mt-1">07:00 - 00:00</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-2 h-[500px] shadow-2xl dark:shadow-none border border-slate-200 dark:border-slate-800 relative z-0">
              <iframe
                src="https://maps.google.com/maps?q=Lecheria%20Alanda%20Tanger&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl grayscale-[50%] hover:grayscale-0 transition-all duration-500 ease-in-out"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

