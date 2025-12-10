import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ProductsPreview from "@/components/products-preview"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <HeroSection />
        <AboutSection />
        <ProductsPreview />
      </main>
      <Footer />
    </>
  )
}
