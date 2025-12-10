import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  const posts = [
    {
      title: "Les Bienfaits du Lait Frais",
      date: "15 Décembre 2024",
      excerpt: "Découvrez pourquoi le lait frais est essentiel pour votre santé et celle de votre famille.",
      image: "/fresh-milk.jpg",
    },
    {
      title: "Recettes de Jus Maison",
      date: "10 Décembre 2024",
      excerpt: "Apprenez comment préparer des jus naturels délicieux et sains avec nos conseils d'experts.",
      image: "/fresh-juice-recipes.jpg",
    },
    {
      title: "Produits Laitiers Artisanaux",
      date: "5 Décembre 2024",
      excerpt: "Explorez nos méthodes traditionnelles de fabrication des fromages et yaourts.",
      image: "/artisanal-dairy-products.jpg",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-amber-900 dark:text-amber-500 mb-4">Notre Blog</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12">Conseils, recettes et actualités de Lecheria Alanda</p>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-transparent dark:border-slate-800"
              >
                <div className="flex flex-col md:flex-row">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full md:w-64 h-64 md:h-auto object-cover"
                  />
                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-amber-600 dark:text-amber-400 font-semibold text-sm">{post.date}</p>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2 mb-4">{post.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <a
                      href="#"
                      className="inline-block mt-6 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    >
                      Lire Plus
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
