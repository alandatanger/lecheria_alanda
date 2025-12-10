"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SimpleImage } from "@/components/simple-image"

const images = [
  "/alanda1.png",
  "/alanda2.png",
  "/alanda3.png",
  "/alanda4.png",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[calc(100vh-6rem)] w-full overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Carousel */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay for text readability */}
          <SimpleImage
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            quality={85}
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 mb-6 drop-shadow-2xl tracking-wide animate-fade-up animate-visible">
          LECHERIA ALANDA
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mb-8 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-scale delay-200 animate-visible"></div>
        <p className="text-xl md:text-3xl text-amber-100 mb-8 font-light tracking-[0.1em] max-w-3xl drop-shadow-lg animate-fade-up delay-300 animate-visible">
          L'EXCELLENCE DU GOÛT ARTISANAL
        </p>
        <p className="text-lg text-gray-200 mb-10 max-w-xl leading-relaxed hidden md:block backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/10 animate-fade-up delay-400 animate-visible">
          Plongez dans un univers de saveurs authentiques. De nos petits déjeuners copieux à nos produits laitiers frais, chaque bouchée est une invitation au voyage.
        </p>
        <div className="flex gap-6 animate-fade-up delay-500 animate-visible">
          <Link
            href="/menu"
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)] border-2 border-transparent tracking-wide animate-pulse-glow"
          >
            DÉCOUVRIR LE MENU
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-white/20 hover:border-white/40 tracking-wide backdrop-blur-sm"
          >
            NOUS TROUVER
          </Link>
        </div>
      </div>
    </div>
  )
}
