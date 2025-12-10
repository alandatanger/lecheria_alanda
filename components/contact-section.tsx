"use client"

import { MapPin, Phone, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">Nous Contacter</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Rendez-nous visite ou contactez-nous pour plus d'informations sur nos produits.
          </p>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-children">
          {/* Address */}
          <AnimatedSection animation="scale" delay={0} className="bg-green-50 dark:bg-green-950/30 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-green-700 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Adresse</h3>
            <p className="text-gray-700 dark:text-gray-300">
              87 Rue 17
              <br />
              Tanger 90000
              <br />
              Maroc
            </p>
          </AnimatedSection>

          {/* Phone */}
          <AnimatedSection animation="scale" delay={100} className="bg-orange-50 dark:bg-orange-950/30 rounded-2xl p-8 text-center border border-orange-200 dark:border-orange-800">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Téléphone</h3>
            <a
              href="tel:+212611052696"
              className="text-gray-700 dark:text-gray-300 text-lg font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              +212 6 11 05 26 96
            </a>
          </AnimatedSection>

          {/* Hours */}
          <AnimatedSection animation="scale" delay={200} className="bg-red-50 dark:bg-red-950/30 rounded-2xl p-8 text-center border border-red-200 dark:border-red-800">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Horaires</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Lun - Sam: 08:00 - 19:00
              <br />
              Dimanche: Fermé
            </p>
          </AnimatedSection>
        </div>

        {/* Map Section */}
        <AnimatedSection animation="fade-up" delay={300} className="rounded-2xl overflow-hidden shadow-lg mb-12">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.3087873922906!2d-5.810101!3d35.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88f2c3f3f3f3f%3A0x0!2sTanger!5e0!3m2!1sfr!2sma!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection animation="scale" delay={400} className="max-w-2xl mx-auto bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Envoyez-nous un Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+212 6 XX XX XX XX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Votre message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 dark:bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
