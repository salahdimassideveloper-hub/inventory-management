import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Connexion",
};

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
            Connexion
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Accédez à votre compte
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="vous@exemple.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Se Connecter
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <Link href="/forgot-password">
              <p className="text-center text-sm text-purple-600 hover:text-purple-700">
                Mot de passe oublié ?
              </p>
            </Link>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600">
              Pas encore de compte ?{" "}
              <Link href="/register">
                <span className="text-purple-600 hover:text-purple-700 font-medium">
                  inscrire
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
