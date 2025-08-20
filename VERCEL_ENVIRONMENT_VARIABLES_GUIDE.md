# Step-by-Step: Adding Environment Variables in Vercel

## 🎯 Your Variables to Add:
```
NODE_ENV=production
REPL_ID=975c5ad5-4e31-417a-b6b4-40d94502fed1
REPLIT_DOMAINS=meducism-portal.vercel.app
SESSION_SECRET=be804d73b72ea21c5520e139d0a93849c0f10ab255ca1661c5d055dc398cb8cd
ISSUER_URL=https://replit.com/oidc
```

## 📍 Exact Steps in Vercel Dashboard:

### Step 1: Go to Your Project
1. Visit: https://vercel.com/dashboard
2. Click on your `meducism-portal` project

### Step 2: Open Settings
1. Click the **"Settings"** tab at the top
2. In the left sidebar, click **"Environment Variables"**

### Step 3: Add Each Variable
For **EACH** variable above, do this:

1. Click the **"Add Variable"** button (blue button)
2. **Name**: Enter the variable name (like `NODE_ENV`)
3. **Value**: Enter the variable value (like `production`)
4. **Environments**: Check ALL THREE boxes:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
5. Click **"Save"**

### Step 4: Repeat for All Variables
Do Step 3 five times for these variables:
- `NODE_ENV` = `production`
- `REPL_ID` = `975c5ad5-4e31-417a-b6b4-40d94502fed1`
- `REPLIT_DOMAINS` = `meducism-portal.vercel.app`
- `SESSION_SECRET` = `be804d73b72ea21c5520e139d0a93849c0f10ab255ca1661c5d055dc398cb8cd`
- `ISSUER_URL` = `https://replit.com/oidc`

### Step 5: Add Your Database URL
**Variable 6:**
- Name: `DATABASE_URL`
- Value: `postgresql://neondb_owner:npg_kAyT0z8HLGhm@ep-orange-hill-ad3plx02-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
- Check all 3 environments ✅

### Step 6: Redeploy
1. Go to **"Deployments"** tab
2. Find your latest deployment
3. Click the **three dots** (⋯) → **"Redeploy"**

## ✅ Result
After redeploying, your Meducism platform will display the beautiful healthcare-themed UI instead of raw code!

## 🎥 Visual Guide
The Environment Variables section looks like this:
```
Settings → Environment Variables → Add Variable
[Name Field] [Value Field] [Environment Checkboxes] [Save Button]
```

## Need Help?
If you can't find the Settings tab or Environment Variables section, let me know!