import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Cookies | Lecheria Alanda",
  description: "Details sur l'utilisation des cookies par Lecheria Alanda et gestion de vos preferences.",
}

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-handwriting font-bold text-center text-amber-700 dark:text-amber-500 mb-8 animate-fade-up">
          Politique de Cookies
        </h1>

        <div className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 animate-fade-up delay-100">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Un cookie est un petit fichier depose sur votre terminal lors de la visite d&apos;un site web. Il permet
              de memoriser certaines informations utiles a la navigation, comme vos preferences ou des donnees de mesure
              d&apos;audience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pourquoi utilisons-nous des cookies ?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Lecheria Alanda utilise des cookies pour :</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
              <li>Assurer le bon fonctionnement du site.</li>
              <li>Memoriser vos preferences essentielles.</li>
              <li>Mesurer l&apos;audience du site avec Google Analytics, uniquement avec votre accord.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Types de cookies utilises</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Nom</th>
                    <th className="p-4 font-semibold">Type</th>
                    <th className="p-4 font-semibold">Finalite</th>
                    <th className="p-4 font-semibold">Duree</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="p-4 text-slate-900 dark:text-white font-medium">alanda_cookie_consent_v1</td>
                    <td className="p-4 text-amber-600 dark:text-amber-500">Necessaire</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Memorise votre choix concernant les cookies.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">12 mois</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                    <td className="p-4 text-slate-900 dark:text-white font-medium">alanda_cookie_analytics_v1</td>
                    <td className="p-4 text-blue-600 dark:text-blue-400">Statistique</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Autorise ou non la mesure d&apos;audience.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">12 mois</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-900">
                    <td className="p-4 text-slate-900 dark:text-white font-medium">_ga, _gid</td>
                    <td className="p-4 text-blue-600 dark:text-blue-400">Statistique</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Google Analytics : analyse du trafic et des visites.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">13 mois maximum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Gestion de vos preferences</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Lors de votre premiere visite, un bandeau vous permet d&apos;accepter, de refuser ou de personnaliser les
              cookies statistiques. Vous pouvez rouvrir ce panneau a tout moment depuis le footer du site via le lien
              "Gerer mes cookies".
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
