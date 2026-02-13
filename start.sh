#!/bin/sh
set -e

echo "🔍 Waiting for PostgreSQL to be ready..."

# Wait for PostgreSQL to be ready
until PGPASSWORD=$DB_PASSWORD psql -h "postgres" -U "sabadou_user" -d "sabadou_transfert" -c '\q' 2>/dev/null; do
  echo "⏳ PostgreSQL is unavailable - sleeping"
  sleep 2
done

echo "✅ PostgreSQL is ready!"

echo "🗄️  Running database migrations..."
npm run db:push || {
  echo "⚠️  Migration failed, but continuing..."
}

echo "🚀 Starting application..."
exec node dist/index.cjs
