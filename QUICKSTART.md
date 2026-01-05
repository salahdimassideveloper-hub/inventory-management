# 🚀 Guide de Démarrage Rapide

## Option 1: Script Automatique (Recommandé)

### Sur Windows
```bash
start.bat
```

### Sur macOS/Linux
```bash
chmod +x start.sh
./start.sh
```

## Option 2: Installation Manuelle

### 1. Prérequis
- Node.js >= 18.0.0
- npm ou yarn
- PostgreSQL (ou SQLite pour dev)

### 2. Cloner et installer
```bash
cd inventory-management
npm install
```

### 3. Configuration
```bash
cp .env.example .env.local
```

Éditez `.env.local` et remplissez:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/inventory"
NEXTAUTH_SECRET="votre-secret"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="votre-jwt-secret"
```

### 4. Configurer la base de données
```bash
# Générer le client Prisma
npx prisma generate

# Exécuter les migrations
npx prisma migrate dev --name init

# Optionnel: Charger les données d'exemple
npx prisma db seed
```

### 5. Démarrer le serveur
```bash
npm run dev
```

Accédez à: **http://localhost:3000**

---

## 👥 Comptes de Test

Après le seed, les comptes suivants sont disponibles:

| Email | Mot de Passe | Rôle |
|-------|--------------|------|
| admin@example.com | Password123! | Administrateur |
| manager@example.com | Password123! | Gérant |
| vendor@example.com | Password123! | Vendeur |

---

## 📚 Commandes Utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer production
npm run start

# Linting
npm run lint

# Prisma Studio (GUI base de données)
npx prisma studio

# Reset base de données
npx prisma migrate reset

# Voir les migrations
npx prisma migrate status
```

---

## 🐛 Problèmes Courants

### "Database connection error"
→ Vérifiez votre `DATABASE_URL` dans `.env.local`

### "Prisma client not found"
```bash
npx prisma generate
```

### "Port 3000 déjà utilisé"
```bash
npm run dev -- -p 3001
```

### "Migrations non appliquées"
```bash
npx prisma migrate deploy
```

---

## 📖 Documentation

- [README.md](./README.md) - Documentation complète
- [CHANGES.md](./CHANGES.md) - Liste des modifications
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Détails d'implémentation

---

## 🎯 Prochaines Étapes

1. ✅ Vérifier que le serveur démarre sans erreur
2. ✅ Se connecter avec un compte de test
3. ✅ Explorer le dashboard et les pages
4. ✅ Ajouter quelques produits et fournisseurs
5. ✅ Effectuer une vente test

---

## 💡 Tips

- Les pages sont en **français** par défaut
- Le design est **responsive** (mobile-friendly)
- Les données de test faciles à modifier dans `prisma/seed.ts`
- Utilisez `npx prisma studio` pour inspecter la BD graphiquement

---

**Bon développement! 🎉**
