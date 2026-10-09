# Google OAuth Setup Guide

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g., "AFRI-RESILIENCE-AI")
3. Enable the Google+ API:
   - Click "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click "Enable"

4. Create OAuth 2.0 Credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "+ Create Credentials" → "OAuth client ID"
   - Choose "Web application"
   - Name: "AFRI-RESILIENCE"
   - Add Authorized JavaScript origins:
     - `http://localhost:3000` (development)
     - `https://your-vercel-url.vercel.app` (production)
   - Add Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://your-vercel-url.vercel.app/api/auth/callback/google`
   - Click "Create"

5. Copy your credentials:
   - `Client ID` → `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
   - `Client Secret` → `GOOGLE_CLIENT_SECRET`

## Step 2: Set Up PostgreSQL Database

### Option A: Vercel PostgreSQL (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to "Storage" tab
4. Click "Create Database" → "PostgreSQL"
5. Follow the prompts
6. Copy the connection string

### Option B: Railway.app

1. Go to [Railway.app](https://railway.app/)
2. New Project → PostgreSQL
3. Copy the database URL from "Connect" tab

### Option C: Supabase

1. Go to [Supabase](https://supabase.com/)
2. New Project
3. Copy PostgreSQL connection string from Project Settings

## Step 3: Environment Variables Setup

### Local Development (.env.local)

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/afri_resilience"

# NextAuth
NEXTAUTH_SECRET=$(openssl rand -base64 32)  # Generate a random secret
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your_client_id_here"
GOOGLE_CLIENT_SECRET="your_client_secret_here"

# API
NEXT_PUBLIC_API_BASE="http://localhost:3000/api"
```

### Vercel Production

In Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add:
   - `DATABASE_URL` → Your PostgreSQL connection string
   - `NEXTAUTH_SECRET` → Generate: `openssl rand -base64 32`
   - `NEXTAUTH_URL` → `https://your-project.vercel.app`
   - `NEXT_PUBLIC_GOOGLE_CLIENT_ID` → Your Google Client ID
   - `GOOGLE_CLIENT_SECRET` → Your Google Client Secret
   - `NEXT_PUBLIC_API_BASE` → `https://your-project.vercel.app/api`

3. Redeploy after adding env vars

## Step 4: Initialize Database

```bash
# Install dependencies
npm install

# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to view database
npm run prisma:studio
```

## Step 5: Seed Database with Kenya County Data

```bash
node scripts/seed-counties.js
```

## Step 6: Test Locally

```bash
npm run dev
```

Visit:
- `http://localhost:3000` → Landing page
- `http://localhost:3000/auth/signin` → Sign in
- `http://localhost:3000/auth/signup` → Sign up with Google
- `http://localhost:3000/dashboard` → Dashboard (requires login)

## Troubleshooting

### "Google OAuth callback failed"
- Check redirect URIs in Google Console match your domain
- Verify `NEXT_PUBLIC_GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set

### "Database connection error"
- Verify `DATABASE_URL` is correct
- For Vercel PostgreSQL, copy the entire connection string with `?schema=public`
- Run `npm run prisma:generate` to regenerate Prisma Client

### "User already exists"
- Database constraint issue - check if user email exists
- For testing: delete user from database and retry

## Production Checklist

- [ ] Google OAuth credentials created and verified
- [ ] PostgreSQL database provisioned and connected
- [ ] All environment variables set in Vercel
- [ ] Database migrations applied
- [ ] Kenya county seed data loaded
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Email verification setup (optional, for enhanced security)
- [ ] Rate limiting configured (optional)

