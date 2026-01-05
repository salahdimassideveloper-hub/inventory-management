import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rapports",
};

export default function Reports() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Rapports</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "État du Stock",
              desc: "Inventaire complet des produits",
              icon: "📊",
            },
            {
              title: "Rapport de Ventes",
              desc: "Statistiques détaillées des ventes",
              icon: "📈",
            },
            {
              title: "Bilan Fournisseurs",
              desc: "Historique d'achats et paiements",
              icon: "🤝",
            },
            {
              title: "Mouvements de Stock",
              desc: "Journalisation des entrées/sorties",
              icon: "↔️",
            },
            {
              title: "Chiffre d'Affaires",
              desc: "Analyse financière par période",
              icon: "💰",
            },
            {
              title: "Top Produits",
              desc: "Produits les plus vendus",
              icon: "⭐",
            },
          ].map((report, i) => (
            <button
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg hover:border-purple-500 border border-transparent transition text-left"
            >
              <div className="text-3xl mb-3">{report.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {report.title}
              </h3>
              <p className="text-gray-600 text-sm">{report.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
