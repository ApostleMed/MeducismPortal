# Deployment Guide - Meducism Platform

## Auto-Deploy to Vercel Setup

### Step 1: Prepare Your GitHub Repository

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `meducism-platform`
   - Set as Public or Private (your choice)
   - Do NOT initialize with README (we have one already)

2. **Push your code to GitHub**
   ```bash
   # In your project directory
   git init
   git add .
   git commit -m "Initial commit: Meducism platform"
   git branch -M main
   git remote add origin https://github.com/yourusername/meducism-platform.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign in with your GitHub account

2. **Import your project**
   - Click "New Project"
   - Select your `meducism-platform` repository
   - Vercel will auto-detect it as a Node.js project

3. **Configure build settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 3: Set Environment Variables

In your Vercel dashboard, go to Project Settings > Environment Variables and add:

**Production Environment Variables:**
```
DATABASE_URL=your-production-database-url
SESSION_SECRET=your-super-secret-session-key-different-from-dev
REPL_ID=your-replit-app-id
REPLIT_DOMAINS=www.meducism.org,meducism.org
ISSUER_URL=https://replit.com/oidc
NODE_ENV=production
```

### Step 4: Set Up Custom Domain (www.meducism.org)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Domains" tab
   - Add `www.meducism.org` and `meducism.org`

2. **Configure DNS (at your domain registrar):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.19.61
   ```

3. **SSL Certificate:**
   - Vercel automatically provides free SSL
   - Your site will be available at https://www.meducism.org

### Step 5: Auto-Deployment

✅ **Done!** Now every time you push to your main branch:

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. Vercel automatically:
   - Detects the push
   - Builds your application
   - Deploys to www.meducism.org
   - Takes about 1-2 minutes

### Step 6: Database Setup

You'll need a production PostgreSQL database. Options:

1. **Neon (Recommended - Free tier)**
   - Sign up at https://neon.tech
   - Create database
   - Use connection string in `DATABASE_URL`

2. **Supabase (Alternative)**
   - Sign up at https://supabase.com
   - Create project
   - Use PostgreSQL connection string

3. **Vercel Postgres (Paid)**
   - Available in Vercel dashboard
   - Seamless integration

### Step 7: Run Database Migrations

After setting up your production database:

```bash
# Set production DATABASE_URL temporarily
export DATABASE_URL="your-production-database-url"
npm run db:push
```

## Monitoring & Updates

- **Deployments:** View at https://vercel.com/dashboard
- **Logs:** Available in Vercel dashboard under "Functions" tab
- **Analytics:** Built-in traffic analytics in Vercel
- **Updates:** Just push to GitHub - automatic deployment!

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `npm run build` works locally

**Domain not working?**
- DNS changes can take 24-48 hours
- Verify DNS settings with your registrar
- Check domain configuration in Vercel

**Database connection issues?**
- Verify DATABASE_URL is correct
- Ensure database accepts connections from Vercel IPs
- Check if database is running

## Support

- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Create issues in your repository
- Community: Vercel Discord or GitHub Discussions