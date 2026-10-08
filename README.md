# AFRI-RESILIENCE AI — Premium React/Next.js Application

AI-enabled intelligence platform for climate risk, food systems, water security and livelihoods across African regions.

## Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18 + Tailwind CSS
- **Charts:** Recharts
- **Language:** TypeScript
- **Data:** Mock API layer (easily replaceable with real endpoints)

## Project Structure

```
src/
  app/
    page.tsx              Landing page with hero, features, impact sections
    dashboard/
      page.tsx            Interactive analytics dashboard
    layout.tsx            Root layout
    globals.css           Tailwind styles
  components/
    Navbar.tsx            Navigation header
    KPICard.tsx           Key performance indicator cards
    ChartCard.tsx         Recharts wrapper (line/bar charts)
    AlertItem.tsx         Alert/warning item component
    InterventionProgress.tsx  Progress tracker
    RegionCard.tsx        Region risk score card
  lib/
    types.ts              TypeScript interfaces
    data.ts               Mock/demo data
    api.ts                API endpoints (mock)
```

## Features

### Landing Page
- Premium hero section with resilience score scorecard
- 5 intelligence engines overview
- Resilience loop (Predict → Prepare → Act → Measure → Learn)
- Impact section with target metrics
- CTA for partnerships

### Dashboard
- **KPI Grid:** Resilience score, active alerts, communities, interventions
- **Interactive Charts:**
  - Rainfall anomaly (line chart)
  - Food security by region (bar chart)
  - Water stress index (line chart)
- **Region Risk Cards:** Click to select region and update scores
- **Priority Alerts:** High/medium/low severity filtering
- **Action Tracker:** Intervention progress with status indicators
- **Fully Responsive:** Mobile-first design

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Petroo-2/afri-resilience-ai.git
cd afri-resilience-ai

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Live Data Integration

To connect real data:

1. **Update API Endpoints** in `src/lib/api.ts`
2. **Mock Data** in `src/lib/data.ts` can be replaced with real API calls
3. **Examples:**
   - REST API: Use `axios` or `fetch`
   - GraphQL: Add Apollo Client
   - CSV/Google Sheets: Parse and transform data
   - Real-time: WebSocket or Server-Sent Events

```typescript
// Example: Replace mock with real API
export async function fetchRegions() {
  const response = await fetch('https://api.example.com/regions');
  return response.json();
}
```

## GitHub Project Board Setup

Create a GitHub Project with these columns:
- **Backlog** — Ideas and future work
- **Ready** — Prioritized backlog items
- **In Progress** — Currently being worked on
- **Review** — Code review and QA
- **Done** — Completed tasks

### Suggested Issues/Epics

**Epic: Product UI/UX Overhaul**
- [ ] Premium landing page design
- [ ] Dark mode implementation
- [ ] Accessibility audit (WCAG 2.1)

**Epic: Dashboard Analytics**
- [ ] KPI cards and metrics
- [ ] Real charting library integration
- [ ] County-level filtering
- [ ] Alert severity classification

**Epic: Live Data Integration**
- [ ] Connect to live resilience database
- [ ] Set up data refresh scheduler
- [ ] Add error handling and retry logic

**Epic: Decision Support**
- [ ] Intervention recommendation engine
- [ ] Risk scoring algorithm
- [ ] Predictive alerts

**Epic: Deployment & QA**
- [ ] Vercel/Netlify deployment
- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing

## Environment Variables

Create a `.env.local` file (not committed to git):

```
NEXT_PUBLIC_API_BASE=http://localhost:3000/api
NEXT_PUBLIC_ENVIRONMENT=development
```

## Scripts

```bash
npm run dev          # Development server (hot reload)
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript check
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t afri-resilience .
docker run -p 3000:3000 afri-resilience
```

## Next Steps

1. **Replace mock data** with real API endpoints
2. **Add authentication** (OAuth/JWT)
3. **Implement real-time updates** (WebSocket)
4. **Add SMS/WhatsApp alerts** (Twilio/MessageBird)
5. **Build API backend** (FastAPI/Node.js/Django)
6. **Set up database** (PostgreSQL/PostGIS)
7. **Add ML/AI models** for risk scoring

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -am 'Add feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Create a Pull Request

## License

MIT License © 2026 Tanz Innovations & Research

## Contact

info@tanzinnovations.com
