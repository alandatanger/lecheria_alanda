import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Politique de Cookies | Lecheria Alanda",
    description: "Détails sur l'utilisation des cookies par Lecheria Alanda et gestion de vos préférences.",
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
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Qu'est-ce qu'un cookie ?</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site web.
                            Il permet à son émetteur d'identifier le terminal dans lequel il est enregistré, pendant la durée de validité ou d'enregistrement du cookie.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pourquoi utilisons-nous des cookies ?</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Lecheria Alanda utilise des cookies pour :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                            <li>Assurer le bon fonctionnement du site (cookies techniques).</li>
                            <li>Mémoriser vos préférences (thème sombre/clair, langue, consentement).</li>
                            <li>Analyser l'audience et la fréquentation du site pour améliorer votre expérience (Google Analytics).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Types de cookies utilisés</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                                    <tr>
                                        <th className="p-4 font-semibold">Nom</th>
                                        <th className="p-4 font-semibold">Type</th>
                                        <th className="p-4 font-semibold">Finalité</th>
                                        <th className="p-4 font-semibold">Durée</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="bg-white dark:bg-slate-900">
                                        <td className="p-4 text-slate-900 dark:text-white font-medium">cookie_consent</td>
                                        <td className="p-4 text-amber-600 dark:text-amber-500">Nécessaire</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">Mémorise votre choix concernant les cookies.</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">12 mois</td>
                                    </tr>
                                    <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                        <td className="p-4 text-slate-900 dark:text-white font-medium">thème</td>
                                        <td className="p-4 text-amber-600 dark:text-amber-500">Fonctionnel</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">Sauvegarde votre préférence (Mode sombre/clair).</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">Persistant</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-slate-900">
                                        <td className="p-4 text-slate-900 dark:text-white font-medium">_ga, _gid</td>
                                        <td className="p-4 text-blue-600 dark:text-blue-400">Statistique</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">Google Analytics : Distinction des utilisateurs uniques et analyse du trafic.</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400">13 mois</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Gestion de vos préférences</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Lors de votre première visite, un bandeau vous informe de la présence de cookies et vous invite à indiquer votre choix.
                            Vous pouvez à tout moment modifier vos paramétrages en supprimant les cookies de votre navigateur ("cookie_consent") pour faire réapparaître le bandeau.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
