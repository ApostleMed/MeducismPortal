# Complete Vercel Deployment Guide from Scratch

## Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign Up" 
3. Choose "Continue with GitHub" (recommended for easier repo access)

## Step 2: Connect Your GitHub Repository
1. In Vercel Dashboard, click "New Project"
2. Click "Import Git Repository"
3. Find your `MeducismPortal` repository
4. Click "Import"

## Step 3: Configure Project Settings (IMPORTANT - Node.js Version Here)

### Build & Development Settings:
- **Framework Preset**: Other
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### Node.js Version Configuration:
**Option A: In Project Settings (Recommended)**
1. After importing, go to Project Settings
2. Click "General" tab
3. Scroll to "Node.js Version"
4. Select **"20.x"** from dropdown

**Option B: Using .nvmrc file (Alternative)**
Create `.nvmrc` file in your project root:
```
20
```

**Option C: Using engines in package.json (Alternative)**
Add to your package.json:
```json
{
  "engines": {
    "node": "20.x"
  }
}
```

## Step 4: Add Environment Variables
In Project Settings → Environment Variables, add these 6 variables:

| Variable Name | Value |
|---------------|-------|
| `NODE_ENV` | `production` |
| `REPL_ID` | `975c5ad5-4e31-417a-b6b4-40d94502fed1` |
| `REPLIT_DOMAINS` | `your-project-name.vercel.app` |
| `SESSION_SECRET` | `be804d73b72ea21c5520e139d0a93849c0f10ab255ca1661c5d055dc398cb8cd` |
| `ISSUER_URL` | `https://replit.com/oidc` |
| `DATABASE_URL` | `postgresql://neondb_owner:npg_kAyT0z8HLGhm@ep-orange-hill-ad3plx02-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require` |

**Important**: Check all environments (Production, Preview, Development) for each variable.

## Step 5: Deploy
1. Click "Deploy" button
2. Wait for build to complete
3. Your Meducism platform will be live!

## Current Project Status
Your project is already configured with:
- ✅ Proper Vercel configuration (`vercel.json`)
- ✅ Serverless function setup (`api/app.js`)
- ✅ Build process working correctly
- ✅ Static files properly generated

## Recommended Node.js Version
Use **Node.js 20.x** for best compatibility with your current setup.

## After Deployment
Your domain will be: `https://your-project-name.vercel.app`
The platform will show the beautiful Meducism healthcare-themed UI.

## Troubleshooting
If deployment fails, check:
1. Node.js version is set to 20.x
2. All 6 environment variables are added
3. Build command is `npm run build`
4. Output directory is `dist/public`