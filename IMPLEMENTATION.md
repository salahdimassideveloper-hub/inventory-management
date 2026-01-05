# 📦 Gestion de Stock - Application Web

Application web complète de gestion de stock pour librairies et petites boutiques, construite avec **Next.js 14+**, **Prisma**, et **PostgreSQL**.

## 🎯 Fonctionnalités

### Gestion des Utilisateurs
- ✅ Inscription et connexion sécurisée
- ✅ Trois rôles : Vendeur, Gérant, Administrateur
- ✅ Gestion des permissions par rôle
- ✅ Récupération de mot de passe

### Gestion des Produits
- ✅ CRUD complet (Ajouter/Modifier/Supprimer)
- ✅ Code-barres unique
- ✅ Catégorisation hiérarchique
- ✅ Variantes (couleur, taille, etc.)
- ✅ Gestion d'images
- ✅ Dates de péremption
- ✅ Recherche fulltext

### Gestion du Stock
- ✅ Suivi en temps réel des quantités
- ✅ Alertes de stock minimum (configurable)
- ✅ Historique détaillé des mouvements
- ✅ Inventaires périodiques
- ✅ Ajustements manuels avec justification

### Gestion des Ventes
- ✅ Interface de point de vente rapide
- ✅ Recherche par code-barres ou nom
- ✅ Calcul automatique des totaux
- ✅ Application de remises
- ✅ Génération de tickets/factures
- ✅ Historique complet
- ✅ Annulation/Retour de ventes

### Gestion des Fournisseurs
- ✅ Fiches fournisseurs complètes
- ✅ Historique d'achats
- ✅ Suivi des paiements
- ✅ Coordonnées et conditions

### Rapports et Statistiques
- ✅ Tableau de bord en temps réel
- ✅ Chiffre d'affaires (jour/semaine/mois)
- ✅ Top produits vendus
- ✅ Produits en rupture
- ✅ Marge bénéficiaire
- ✅ Graphiques d'évolution
- ✅ Exports PDF/Excel

### Paramètres
- ✅ Configuration de la boutique
- ✅ Gestion des taxes/TVA
- ✅ Unités de mesure
- ✅ Seuils d'alerte
- ✅ Sauvegarde/Restauration

## 🛠️ Stack Technique

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Charts**: Recharts

### Backend
- **API**: Next.js API Routes
- **ORM**: Prisma
- **Database**: PostgreSQL (prod) / SQLite (dev)
- **Authentication**: NextAuth.js
- **Security**: bcryptjs, JWT tokens

### Deployment
- **Frontend/API**: Vercel
- **Database**: Supabase ou Railway

## 📋 Prérequis

- Node.js >= 18.0.0
- npm ou yarn
- PostgreSQL (ou SQLite pour le développement)

## 🚀 Installation

### 1. Cloner le projet
\`\`\`bash
git clone <votre-repo>
cd inventory-management
\`\`\`

### 2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

### 3. Configurer l'environnement
\`\`\`bash
cp .env.example .env.local
\`\`\`

Remplissez les variables :
\`\`\`env
DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db"
NEXTAUTH_SECRET="votre-secret"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="votre-jwt-secret"
\`\`\`

### 4. Générer le client Prisma
\`\`\`bash
npx prisma generate
\`\`\`

### 5. Exécuter les migrations
\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

### 6. Lancer le serveur de développement
\`\`\`bash
npm run dev
\`\`\`

Accédez à [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

\`\`\`
inventory-management/
├── app/
│   ├── (auth)/          # Pages d'authentification
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/     # Pages protégées
│   │   ├── dashboard/
│   │   ├── products/
│   │   ├── sales/
│   │   ├── stock/
│   │   ├── suppliers/
│   │   ├── reports/
│   │   └── settings/
│   ├── api/            # Routes API
│   │   ├── auth/
│   │   ├── products/
│   │   ├── sales/
│   │   ├── stock/
│   │   ├── suppliers/
│   │   └── reports/
│   ├── layout.tsx
│   └── page.tsx
├── components/         # Composants réutilisables
│   ├── ui/
│   ├── forms/
│   ├── layouts/
│   └── providers.tsx
├── hooks/              # Hooks personnalisés
│   └── useApi.ts
├── lib/                # Utilitaires
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── types/              # Définitions TypeScript
├── public/             # Assets statiques
├── middleware.ts       # Middleware d'authentification
└── package.json
\`\`\`

## 🗄️ Modèle de Données

### Entités Principales
- **User**: Utilisateurs du système
- **Product**: Produits en vente
- **Category**: Catégories de produits
- **Supplier**: Fournisseurs
- **Sale**: Ventes enregistrées
- **SaleItem**: Détails des articles vendus
- **StockMovement**: Journalisation des entrées/sorties
- **Settings**: Paramètres de la boutique
- **SupplierPayment**: Suivi des paiements aux fournisseurs
- **AuditLog**: Logs d'activité
- **ProductVariant**: Variantes de produits
- **Inventory**: Inventaires périodiques

## 🔐 Sécurité

- ✅ Validation côté client ET serveur
- ✅ Protection CSRF
- ✅ Rate limiting sur les API
- ✅ Chiffrement des mots de passe (bcrypt)
- ✅ JWT tokens sécurisés
- ✅ Sessions avec timeout
- ✅ Logs d'activité complets
- ✅ Contrôle d'accès par rôle (RBAC)

## 📝 Commandes Utiles

\`\`\`bash
# Développement
npm run dev

# Build
npm run build

# Production
npm run start

# Linting
npm run lint

# Prisma
npx prisma studio           # Interface graphique Prisma
npx prisma migrate dev      # Exécuter les migrations
npx prisma db push         # Synchroniser le schéma
\`\`\`

## 🤝 Rôles et Permissions

| Rôle | Dashboard | Produits | Ventes | Stock | Rapports | Paramètres |
|------|-----------|----------|--------|-------|----------|-----------|
| Vendeur | ✅ | 🔍 | ✅ | 🔍 | 🔍 | ❌ |
| Gérant | ✅ | ✅ | ✅ | ✅ | ✅ | 🔍 |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🐛 Dépannage

### Migration échouée
\`\`\`bash
npx prisma migrate reset
\`\`\`

### Client Prisma introuvable
\`\`\`bash
npx prisma generate
\`\`\`

### Erreur de connexion BD
Vérifiez \`DATABASE_URL\` dans \`.env.local\`

## 📈 Roadmap Future

- [ ] Mode hors ligne (PWA)
- [ ] Scanner de codes-barres via caméra
- [ ] Intégration email pour alertes
- [ ] API de synchronisation multi-magasins
- [ ] Mobile app (React Native)
- [ ] Analytics avancés
- [ ] Intégrations comptables

## 📄 Licence

MIT

## 📞 Support

Pour toute question ou problème, créez une issue sur le repository.

---

**Version**: 0.1.0 | **Date**: 2026
