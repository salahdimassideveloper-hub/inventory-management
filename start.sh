#!/bin/bash

# Script de démarrage du projet Gestion de Stock
# Ce script configure et lance l'application en développement

set -e

echo "🚀 Démarrage de l'application Gestion de Stock..."
echo ""

# Vérifier Node.js
echo "📋 Vérification des prérequis..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez installer Node.js >= 18.0.0"
    exit 1
fi
echo "✅ Node.js $(node --version) détecté"

if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi
echo "✅ npm $(npm --version) détecté"

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Installation des dépendances..."
    npm install
fi

# Vérifier le fichier .env.local
echo ""
echo "⚙️  Configuration de l'environnement..."
if [ ! -f ".env.local" ]; then
    echo "📝 Création du fichier .env.local..."
    cp .env.example .env.local
    echo "⚠️  Assurez-vous de configurer DATABASE_URL dans .env.local"
fi

# Générer le client Prisma
echo ""
echo "🔧 Génération du client Prisma..."
npx prisma generate

# Exécuter les migrations
echo ""
echo "🗄️  Exécution des migrations..."
npx prisma migrate dev --name init 2>/dev/null || echo "ℹ️  Migrations déjà appliquées"

# Seed la base de données
echo ""
read -p "Voulez-vous charger les données d'exemple? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌱 Chargement des données d'exemple..."
    npx prisma db seed
fi

# Lancer le serveur de développement
echo ""
echo "✨ Démarrage du serveur de développement..."
echo "🌐 L'application sera disponible sur http://localhost:3000"
echo ""
echo "Identifiants de test:"
echo "  Admin: admin@example.com / Password123!"
echo "  Manager: manager@example.com / Password123!"
echo "  Vendor: vendor@example.com / Password123!"
echo ""

npm run dev
