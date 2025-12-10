import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductsList from "@/components/products-list"

export default function ProduitsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ProductsList />
      </main>
      <Footer />
    </>
  )
}
