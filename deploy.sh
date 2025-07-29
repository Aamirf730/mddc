#!/bin/bash

# Netlify Deployment Script for Maps Driving Next.js App
# This script automates the deployment process

echo "🚀 Starting Netlify deployment for Maps Driving Next.js App"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

echo "✅ Netlify CLI version: $(netlify --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Verify build output
echo "🔍 Verifying build output..."
if [ ! -d "out/_next/static/css" ]; then
    echo "❌ CSS directory not found in build output"
    exit 1
fi

if [ ! -d "out/_next/static/chunks" ]; then
    echo "❌ Chunks directory not found in build output"
    exit 1
fi

echo "✅ Build verification passed"

# Check if user is logged in to Netlify
if ! netlify status &> /dev/null; then
    echo "🔐 Please log in to Netlify..."
    netlify login
fi

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
netlify deploy --prod

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site is now live on Netlify"
    echo "📝 Check the deployment URL above"
else
    echo "❌ Deployment failed"
    exit 1
fi

echo "=================================================="
echo "🎉 Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Check your website loads correctly"
echo "2. Verify CSS and JS files are loading (no 404 errors)"
echo "3. Test the map functionality"
echo "4. Update environment variables in Netlify dashboard if needed"
echo ""
echo "📚 For troubleshooting, see DEPLOYMENT_GUIDE.md" 