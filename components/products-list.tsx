"use client"

const products = [
  {
    id: 1,
    name: "Jus d'Orange Frais",
    description: "Jus d'orange pressé frais chaque matin",
    price: 25,
    category: "Jus Naturels",
    image: "/fresh-orange-juice.png",
  },
  {
    id: 2,
    name: "Jus de Citron Naturel",
    description: "Citron frais pressé sans sucre ajouté",
    price: 20,
    category: "Jus Naturels",
    image: "/fresh-lemon-juice.jpg",
  },
  {
    id: 3,
    name: "Jus de Fraise",
    description: "Mélange savoureux de fraises fraîches",
    price: 30,
    category: "Jus Naturels",
    image: "/strawberry-juice-fresh.jpg",
  },
  {
    id: 4,
    name: "Fromage Local",
    description: "Fromage artisanal fait maison",
    price: 80,
    category: "Fromages",
    image: "/artisanal-cheese.png",
  },
  {
    id: 5,
    name: "Yaourt Nature",
    description: "Yaourt frais naturel sans conservateurs",
    price: 15,
    category: "Yaourts",
    image: "/fresh-yogurt-natural.jpg",
  },
  {
    id: 6,
    name: "Yaourt aux Fruits",
    description: "Yaourt avec fruits frais",
    price: 18,
    category: "Yaourts",
    image: "/yogurt-with-fruits.jpg",
  },
  {
    id: 7,
    name: "Lait Frais 1L",
    description: "Lait frais collecté quotidiennement",
    price: 25,
    category: "Lait",
    image: "/fresh-milk-bottle.jpg",
  },
  {
    id: 8,
    name: "Lait Demi-Écrémé",
    description: "Lait demi-écrémé frais de qualité",
    price: 22,
    category: "Lait",
    image: "/semi-skimmed-milk.jpg",
  },
]

export default function ProductsList() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Tous Nos Produits</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez notre gamme complète de produits laitiers et jus naturels de qualité.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">{product.price} DH</span>
                  <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors font-semibold">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
