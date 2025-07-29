# Quick Deployment Guide

## 🚀 Deploy to Netlify in 3 Steps

### Option 1: Automated Deployment (Recommended)
```bash
# Run the deployment script
./deploy.sh
```

### Option 2: Manual Deployment
```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to Netlify
netlify deploy --prod
```

## 📋 Prerequisites
- Node.js 18+ installed
- Netlify account
- Netlify CLI installed (`npm install -g netlify-cli`)

## 🔧 Configuration Files
The following files are already configured for deployment:
- `next.config.js` - Next.js configuration
- `netlify.toml` - Netlify deployment settings
- `package.json` - Build scripts

## 🌐 Environment Variables
Set these in your Netlify dashboard:
- `NEXT_PUBLIC_HERE_API_KEY` - Your HERE Maps API key
- `NODE_ENV` - Set to `production`
- `NEXT_TELEMETRY_DISABLED` - Set to `1`

## ❓ Troubleshooting
If you encounter issues:
1. Check `DEPLOYMENT_GUIDE.md` for detailed troubleshooting
2. Verify all configuration files match the guide
3. Ensure environment variables are set correctly
4. Test build locally before deploying

## 📚 More Information
- **Detailed Guide**: See `DEPLOYMENT_GUIDE.md`
- **Configuration**: All settings are documented in the guide
- **Support**: Check the troubleshooting section for common issues 