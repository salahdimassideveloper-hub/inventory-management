import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nouvelle Vente",
};

export default function NewSale() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/sales">
            <span className="text-green-600 hover:text-green-700">
              ← Retour aux ventes
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left - Panier */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-6">
                Point de Vente
              </h1>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Chercher par code-barres ou nom..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                  autoFocus
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-gray-600 text-center">
                  Scannez un code-barres ou recherchez un produit pour commencer
                </p>
              </div>

              {/* Articles du panier */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Produit
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">
                        Qté
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">
                        P.U.
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">
                        Total
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                        Panier vide
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right - Résumé */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Résumé</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Sous-total</span>
                  <span className="font-semibold">€0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Remise</span>
                  <span className="font-semibold">€0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">TVA (20%)</span>
                  <span className="font-semibold">€0.00</span>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-bold text-green-600">€0.00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                  Valider la Vente
                </Button>
                <Link href="/sales" className="block">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Annuler
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (optionnel)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
