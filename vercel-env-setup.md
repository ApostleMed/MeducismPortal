# Vercel Environment Variables Setup

You need to add these environment variables to your Vercel project:

## Required Environment Variables

### Database Configuration
1. `DATABASE_URL` - Your PostgreSQL database connection string
   - Get this from your Neon/PostgreSQL provider
   - Format: `postgresql://username:password@host:port/database`

### Authentication Configuration  
2. `REPL_ID` - Your Replit project ID (for authentication)
3. `REPLIT_DOMAINS` - Your deployed domain
   - Set this to: `meducism-portal.vercel.app`
4. `SESSION_SECRET` - A secure session secret
   - Generate a random string (32+ characters)
   - Example: `your-super-secure-session-secret-here-32chars-minimum`
5. `ISSUER_URL` - Set to `https://replit.com/oidc`

### Node.js Configuration
6. `NODE_ENV` - Set to `production`

## How to Add Environment Variables in Vercel:

1. Go to your Vercel dashboard
2. Select your project: meducism-portal
3. Go to Settings → Environment Variables
4. Add each variable with its value
5. Make sure to set them for "Production", "Preview", and "Development" environments
6. Redeploy your project after adding all variables

## Database Setup
You'll also need to create a PostgreSQL database (like Neon) and get the connection string for the DATABASE_URL variable.