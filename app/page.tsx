import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Gestion de Stock Simplifiée
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Application complète pour gérer votre inventaire, ventes et rapports
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/login">
              <Button
                size="lg"
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Se Connecter
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                Créer un Compte
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              {
                icon: "📦",
                title: "Gestion Stock",
                desc: "Suivi en temps réel",
              },
              {
                icon: "🛒",
                title: "Point de Vente",
                desc: "Interface rapide",
              },
              {
                icon: "📊",
                title: "Rapports",
                desc: "Statistiques détaillées",
              },
              {
                icon: "👥",
                title: "Fournisseurs",
                desc: "Gestion contacts",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
