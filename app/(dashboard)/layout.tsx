import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Gestion de Stock",
    default: "Gestion de Stock",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { href: "/dashboard", label: "📊 Tableau de Bord" },
    { href: "/products", label: "📦 Produits" },
    { href: "/sales", label: "🛒 Ventes" },
    { href: "/stock", label: "📈 Stock" },
    { href: "/suppliers", label: "🤝 Fournisseurs" },
    { href: "/reports", label: "📑 Rapports" },
    { href: "/settings", label: "⚙️ Paramètres" },
  ];

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white shadow-lg overflow-y-auto">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">📦 Stocks</h1>
          <p className="text-sm text-slate-400 mt-1">Gestion d'Inventaire</p>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="px-4 py-3 rounded-lg hover:bg-slate-800 transition cursor-pointer">
                {item.label}
              </div>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400">Connecté en tant que</p>
            <p className="font-semibold text-white">Utilisateur</p>
            <button className="text-sm text-slate-400 hover:text-white mt-2 w-full text-left">
              Déconnexion
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Tableau de Bord
          </h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="text-gray-600 hover:text-gray-900">🔔</button>
            <button className="text-gray-600 hover:text-gray-900">👤</button>
          </div>
        </div>

        {/* Page Content */}
        <div>{children}</div>
      </main>
    </div>
  );
}
