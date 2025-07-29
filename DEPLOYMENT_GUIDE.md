pn# Netlify Deployment Guide for Maps Driving Next.js App

## Overview
This guide documents the deployment configuration for the Maps Driving Next.js application on Netlify. It includes all the fixes implemented to resolve CSS/JS loading issues and provides step-by-step instructions for successful deployment.

## Problem History
The application initially had issues with:
- CSS files returning 404 errors
- JavaScript files not loading
- Website appearing as unstyled HTML
- Netlify plugin conflicts

## Final Working Configuration

### 1. Next.js Configuration (`next.config.js`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['mapsdirectionsdriving.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
```

### 2. Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
  NEXT_TELEMETRY_DISABLED = "1"
  NODE_ENV = "production"

[[redirects]]
  from = "/_next/static/*"
  to = "/_next/static/:splat"
  status = 200

[[redirects]]
  from = "/static/*"
  to = "/static/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-XSS-Protection = "1; mode=block"
```

### 3. Package.json Build Script
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "rm -rf .next && next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Key Configuration Decisions

### Why Static Export (`output: 'export'`)?
- **Reliability**: Static export is more reliable for Netlify deployment
- **No Plugin Conflicts**: Avoids issues with `@netlify/plugin-nextjs` plugin
- **Static Assets**: Ensures all CSS/JS files are properly included in build
- **Simple Deployment**: No server-side rendering complications

### Why Clean Build (`rm -rf .next`)?
- **Cache Busting**: Prevents file name mismatches between builds
- **Fresh Start**: Ensures no cached files interfere with new builds
- **Consistency**: Guarantees consistent build output

### Why No Caching (`max-age=0, must-revalidate`)?
- **Debugging**: Easier to troubleshoot deployment issues
- **Updates**: Ensures latest files are always served
- **Development**: Prevents stale cache issues during development

## Deployment Steps

### Prerequisites
1. Node.js 18+ installed
2. Netlify CLI installed (`npm install -g netlify-cli`)
3. Git repository set up

### Local Testing
```bash
# Install dependencies
npm install

# Test build locally
npm run build

# Verify build output
ls -la out/_next/static/css
ls -la out/_next/static/chunks
```

### Netlify Deployment
```bash
# Login to Netlify (if not already logged in)
netlify login

# Deploy to Netlify
netlify deploy --prod
```

### Manual Deployment via Netlify Dashboard
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Connect your Git repository
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18`
4. Add environment variables:
   - `NEXT_TELEMETRY_DISABLED`: `1`
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_HERE_API_KEY`: Your HERE Maps API key

## Troubleshooting

### Common Issues

#### 1. CSS/JS Files Return 404
**Symptoms**: Website appears unstyled, network tab shows 404 errors
**Solution**: 
- Ensure `output: 'export'` is set in `next.config.js`
- Verify `publish = "out"` in `netlify.toml`
- Check that build generates files in `out/_next/static/`

#### 2. Build Fails with Plugin Error
**Symptoms**: Error about missing `standalone` directory
**Solution**: 
- Remove `@netlify/plugin-nextjs` from `netlify.toml`
- Use static export instead of server-side rendering

#### 3. File Name Mismatches
**Symptoms**: Network requests for files that don't exist
**Solution**: 
- Use clean build script (`rm -rf .next && next build`)
- Clear Netlify cache if needed

#### 4. Caching Issues
**Symptoms**: Old files being served
**Solution**: 
- Set `Cache-Control: public, max-age=0, must-revalidate`
- Force redirects with `force = true`

### Verification Checklist
- [ ] Build completes without errors
- [ ] `out` directory contains `_next/static/css` and `_next/static/chunks`
- [ ] CSS files are present (e.g., `62b86ed974eeb029.css`)
- [ ] JS files are present (e.g., `webpack-*.js`, `main-*.js`)
- [ ] Netlify deployment shows successful build
- [ ] Website loads with proper styling
- [ ] No 404 errors in browser network tab

## Important Notes

### Limitations of Static Export
- **No API Routes**: Server-side API routes won't work
- **No Middleware**: Next.js middleware is disabled
- **No Server-Side Features**: All features must be client-side

### Environment Variables
Make sure these are set in Netlify:
- `NEXT_PUBLIC_HERE_API_KEY`: Required for map functionality
- `NODE_ENV`: Set to `production`
- `NEXT_TELEMETRY_DISABLED`: Set to `1`

### File Structure After Build
```
out/
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
│   └── ...
├── index.html
├── about/
├── faqs/
└── ... (other pages)
```

## Maintenance

### Regular Updates
1. **Dependencies**: Keep Next.js and other packages updated
2. **Build Testing**: Always test builds locally before deploying
3. **Cache Management**: Monitor for caching issues
4. **Performance**: Check build sizes and optimize if needed

### Monitoring
- Check Netlify build logs for errors
- Monitor website performance
- Verify CSS/JS files load correctly
- Test map functionality after deployments

## Support

If issues persist:
1. Check Netlify build logs
2. Verify configuration files match this guide
3. Test with clean build locally
4. Clear Netlify cache if needed
5. Check for environment variable issues

---

**Last Updated**: July 24, 2024
**Next.js Version**: 15.1.7
**Netlify Plugin**: None (using static export) 