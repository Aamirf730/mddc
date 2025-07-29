# Environment Variables Setup for Cloudflare Pages

## Required Environment Variables

To enable map functionality, you need to set up the following environment variable in your Cloudflare Pages dashboard:

### HERE Maps API Key

**Variable Name:** `NEXT_PUBLIC_HERE_API_KEY`

**How to get a HERE Maps API key:**
1. Go to [HERE Developer Portal](https://developer.here.com/)
2. Create a free account
3. Create a new project
4. Generate an API key for JavaScript/REST API
5. Copy the API key

### How to Set Environment Variables in Cloudflare Pages:

1. **Go to your Cloudflare Pages dashboard**
2. **Select your project (mddc)**
3. **Go to "Settings" tab**
4. **Click on "Environment variables"**
5. **Add the following variable:**
   - **Variable name:** `NEXT_PUBLIC_HERE_API_KEY`
   - **Value:** Your HERE Maps API key
   - **Environment:** Production (and Preview if needed)
6. **Save the changes**
7. **Trigger a new deployment**

### Alternative: Use a Different Map Service

If you don't want to use HERE Maps, you can:
1. Replace the map implementation with Google Maps, Mapbox, or OpenStreetMap
2. Use a free map service that doesn't require API keys
3. Implement a simple map placeholder

### Current Status

- ✅ Website loads and displays properly
- ⚠️ Map functionality requires API key configuration
- ✅ All other features work without API keys

## Testing

After setting up the environment variable:
1. Trigger a new deployment in Cloudflare Pages
2. Wait for the build to complete
3. Test the map functionality on your website
4. Verify that directions and routing work properly 