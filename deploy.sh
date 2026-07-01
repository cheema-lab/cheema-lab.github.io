#!/usr/bin/env sh

# Script to deploy to GitHub Pages on Windows or Unix
# Usage: npm run deploy (on Unix/Mac) or npm run deploy:windows (on Windows)

set -e

echo "🏗️  Building project..."
npm run build

echo "📤 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://cheemalab.github.io"
