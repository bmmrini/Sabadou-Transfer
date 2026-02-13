#!/bin/bash

# Sabadou Transfert - Script de déploiement Docker
# Usage: ./deploy.sh

set -e

echo "🚀 Déploiement de Sabadou Transfert..."

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier que Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier que le fichier .env.production existe
if [ ! -f .env.production ]; then
    echo "❌ Le fichier .env.production n'existe pas."
    echo "📝 Créez-le à partir de .env.production.example"
    exit 1
fi

# Charger les variables d'environnement
export $(cat .env.production | grep -v '^#' | xargs)

# Copier .env.production vers .env pour Docker Compose
echo "📝 Configuration des variables d'environnement..."
cp .env.production .env

echo "📦 Arrêt des containers existants..."
docker-compose down

echo "🏗️  Construction de l'image Docker..."
docker-compose build --no-cache

echo "🚀 Démarrage des containers..."
docker-compose up -d

echo "⏳ Attente du démarrage de la base de données..."
sleep 10

echo "🗄️  Exécution des migrations de base de données..."
docker-compose exec app npm run db:push

echo "✅ Déploiement terminé avec succès!"
echo ""
echo "📊 Status des containers:"
docker-compose ps

echo ""
echo "🌐 L'application est accessible sur http://localhost:5000"
echo "📝 Logs: docker-compose logs -f"
