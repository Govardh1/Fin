## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useContext)
- **Theme System**: Custom theme provider with light/dark mode support

## Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

## Run the development server
   
   pnpm dev
  
## Build for Production

pnpm build
pnpm start


## Known Limitations
- 1. **Mock Data Only**: All scan data is hardcoded mock data. No real backend integration or data persistence.
- 2. **No Authentication Backend**: Login form is a UI prototype. No user authentication, session management, or database integration. Navigation is client-side only.
- 3. **Static Scan Data**: Scan metrics, progress, and findings don't update in real-time. All data is pre-defined.
- 4. **No Database**: No data persistence. Refreshing the page resets all state to initial mock data.
