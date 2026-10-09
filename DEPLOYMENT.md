# Production Deployment Checklist

## Phase 1: Local Setup ✓

### Prerequisites
- [ ] Node.js 18+ installed
- [ ] Git configured
- [ ] PostgreSQL (local or cloud)
- [ ] Google Cloud project created

### Installation
```bash
git clone https://github.com/Petroo-2/afri-resilience-ai.git
cd afri-resilience-ai
npm install
npm run prisma:generate
```

## Phase 2: Environment Configuration

### Step 1: Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project → "AFRI-RESILIENCE-AI"
3. Enable "Google+ API" in APIs & Services → Library
4. Create OAuth 2.0 Credentials:
   - Go to Credentials → Create Credentials → OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized origins:
     - `http://localhost:3000`
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
5. Copy Client ID and Secret

### Step 2: PostgreSQL Database

**Option A: Vercel PostgreSQL (Recommended)**
1. Vercel Dashboard → Storage → Create Database → PostgreSQL
2. Copy connection string

**Option B: Railway.app**
1. Go to Railway.app → New Project → PostgreSQL
2. Copy PostgreSQL URL

**Option C: Supabase**
1. Go to Supabase.com → New Project
2. Get connection string from Settings

### Step 3: Local .env.local
```bash
cp .env.example .env.local
```

Update with:
```
DATABASE_URL="postgresql://user:password@localhost:5432/afri_resilience"
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your_client_id"
GOOGLE_CLIENT_SECRET="your_client_secret"
NEXT_PUBLIC_API_BASE="http://localhost:3000/api"
```

## Phase 3: Database Setup

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed Kenya county data
node scripts/seed.ts

# (Optional) View database
npm run prisma:studio
```

## Phase 4: Local Testing

```bash
npm run dev
```

Test:
- [ ] http://localhost:3000 → Landing page loads
- [ ] http://localhost:3000/auth/signup → Sign up form works
- [ ] Sign up with email/password
- [ ] http://localhost:3000/auth/signin → Sign in works
- [ ] Sign in with Google (should show login flow)
- [ ] http://localhost:3000/dashboard → Dashboard shows all 47 counties on map
- [ ] Click on counties → Details appear
- [ ] Select favorite counties → Saved in preferences

## Phase 5: Vercel Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add production-ready auth, database, and Kenya map"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Import"

### Step 3: Environment Variables in Vercel

Project Settings → Environment Variables

Add for **Production**:
```
DATABASE_URL=postgresql://...(from Vercel PostgreSQL)
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL=https://your-project.vercel.app
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_BASE=https://your-project.vercel.app/api
```

### Step 4: Update Google OAuth in Google Cloud

1. Go to Google Cloud Console → OAuth 2.0 Client ID
2. Edit to add production domain:
   - Authorized origins:
     - `https://your-project.vercel.app`
   - Authorized redirect URIs:
     - `https://your-project.vercel.app/api/auth/callback/google`

### Step 5: Deploy

1. Vercel auto-deploys on git push
2. Or manually: Vercel Dashboard → Deployments → Redeploy
3. Wait for build to complete (~5 mins)

### Step 6: Test Production

- [ ] https://your-project.vercel.app loads
- [ ] Sign up and sign in work
- [ ] Google OAuth sign-in works
- [ ] Dashboard displays Kenya map with all counties
- [ ] Database queries work
- [ ] User preferences save correctly

## Phase 6: Post-Deployment

### Monitoring
- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (Sentry optional)
- [ ] Monitor database connections

### Security
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set strong NEXTAUTH_SECRET
- [ ] Keep API keys secure (use env vars)
- [ ] Enable rate limiting (optional)
- [ ] Add email verification (optional)

### Performance
- [ ] Test on mobile
- [ ] Test map with all 47 counties
- [ ] Monitor database query performance
- [ ] Consider caching for county data

## Quick Start Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Database
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio

# Database seeding
node scripts/seed.ts
```

## Troubleshooting

### Build Fails
- Run `npm install` locally
- Run `npm run build` locally to test
- Check for TypeScript errors: `npm run type-check`

### Google OAuth Not Working
- Verify redirect URIs in Google Cloud Console
- Check NEXT_PUBLIC_GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
- Ensure NEXTAUTH_URL is correct

### Database Connection Error
- Verify DATABASE_URL is correct
- For Vercel PostgreSQL: copy full connection string with `?schema=public`
- Test locally: `npm run prisma:studio`

### Map Not Loading
- Verify React Leaflet installed: `npm install react-leaflet leaflet`
- Check network requests in browser DevTools
- Verify counties exist in database

## Support

- Docs: See `docs/GOOGLE_OAUTH_SETUP.md`
- Issues: GitHub Issues
- Contact: info@tanzinnovations.com
