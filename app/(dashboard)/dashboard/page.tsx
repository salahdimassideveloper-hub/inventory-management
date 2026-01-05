import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau de Bord",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Tableau de Bord
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Produits", value: "0", icon: "📦" },
            { label: "Ventes (Aujourd'hui)", value: "€0", icon: "💰" },
            { label: "Stock Bas", value: "0", icon: "⚠️" },
            { label: "Fournisseurs", value: "0", icon: "🤝" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Dernières Ventes
            </h2>
            <p className="text-gray-500">Aucune vente pour le moment</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Produits en Rupture
            </h2>
            <p className="text-gray-500">Aucun produit en rupture</p>
          </div>
        </div>
      </div>
    </div>
  );
}
