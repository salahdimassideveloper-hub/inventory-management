@echo off
REM Script de démarrage du projet Gestion de Stock (Windows)

echo 🚀 Démarrage de l'application Gestion de Stock...
echo.

REM Vérifier Node.js
echo 📋 Vérification des prérequis...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js n'est pas installé. Veuillez installer Node.js ^>= 18.0.0
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js %NODE_VERSION% détecté

REM Installer les dépendances si nécessaire
if not exist "node_modules" (
    echo.
    echo 📦 Installation des dépendances...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Installation des dépendances échouée
        pause
        exit /b 1
    )
)

REM Vérifier le fichier .env.local
echo.
echo ⚙️ Configuration de l'environnement...
if not exist ".env.local" (
    echo 📝 Création du fichier .env.local...
    copy .env.example .env.local >nul
    echo ⚠️ Assurez-vous de configurer DATABASE_URL dans .env.local
)

REM Générer le client Prisma
echo.
echo 🔧 Génération du client Prisma...
call npx prisma generate

REM Exécuter les migrations
echo.
echo 🗄️ Exécution des migrations...
call npx prisma migrate dev --name init 2>nul || echo ℹ️ Migrations déjà appliquées

REM Seed la base de données
echo.
set /p SEED="Voulez-vous charger les données d'exemple? (y/n): "
if /i "%SEED%"=="y" (
    echo 🌱 Chargement des données d'exemple...
    call npx prisma db seed
)

REM Lancer le serveur de développement
echo.
echo ✨ Démarrage du serveur de développement...
echo 🌐 L'application sera disponible sur http://localhost:3000
echo.
echo Identifiants de test:
echo   Admin: admin@example.com / Password123!
echo   Manager: manager@example.com / Password123!
echo   Vendor: vendor@example.com / Password123!
echo.

call npm run dev
pause
