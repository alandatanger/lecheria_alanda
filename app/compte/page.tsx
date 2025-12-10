import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function ComptePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-amber-900 mb-4">Mon Compte</h1>
          <p className="text-center text-gray-600 text-lg mb-12">Gérez votre compte et vos commandes</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Connexion</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  Se Connecter
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Créer un Compte</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom Complet"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  S'Inscrire
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
