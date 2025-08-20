# Vercel Deployment Guide for Meducism Platform

## Current Issue
Your Vercel deployment is showing raw code instead of the UI because of missing configuration and environment variables.

## Step 1: Add Environment Variables in Vercel

Go to your Vercel dashboard and add these environment variables:

### Database
- `DATABASE_URL`: Your PostgreSQL connection string from Neon or another provider
  - Format: `postgresql://username:password@host:port/database?sslmode=require`
  - You'll need to sign up for a free database at neon.tech or supabase.com

### Authentication (Required for Replit Auth)
- `REPL_ID`: Get this from your Replit project (looks like a UUID)
- `REPLIT_DOMAINS`: Set to `meducism-portal.vercel.app`  
- `SESSION_SECRET`: Generate a secure random string (32+ characters)
- `ISSUER_URL`: Set to `https://replit.com/oidc`

### Environment
- `NODE_ENV`: Set to `production`

## Step 2: Database Setup
1. Sign up for a free Neon PostgreSQL database at neon.tech
2. Create a new database
3. Copy the connection string and add it to Vercel as `DATABASE_URL`

## Step 3: Get Replit Auth Credentials
1. In your Replit project, check the environment variables or secrets
2. Copy `REPL_ID` value
3. Add it to Vercel environment variables

## Step 4: Redeploy
After adding all environment variables, redeploy your Vercel project.

## Why This Happens
- The Vercel build is failing because required environment variables are missing
- Without proper configuration, the frontend build fails and shows raw code
- The Node.js runtime needs to be set to 20.x for modern features

## Fixed Issues in Latest Update
✓ Updated Node.js runtime to 20.x
✓ Added proper build configuration 
✓ Created environment variable guide
✓ Fixed frontend authentication handling