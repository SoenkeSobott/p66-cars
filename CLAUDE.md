# Rules
!!!
Prioritize accuracy over agreement: critically evaluate the user’s ideas, explicitly challenge weak assumptions, and avoid defaulting to affirmation or praise when evidence or reasoning doesn’t support it.
!!!

# Goal of this Project
A web app connecting car buyers with mechanics for pre-purchase inspections. The mechanic joins the buyer at the car viewing and assesses the vehicle. Mechanics earn money; buyers get professional expertise.

MVP matching: a DB of mechanics and buyers. If a mechanic accepts a request, the buyer gets the mechanic’s phone number to contact via WhatsApp. That’s it.

# Tech Stack
- Frontend: Next.js (React), TypeScript
- Hosting: Azure Static Web Apps
- Styling: TailwindCSS

# Current Phase: Frontend Only
- No backend yet. Pages use static or local mock data.
- Do not introduce a database, API routes, or authentication until explicitly asked.

# Project Structure
- /app           Next.js App Router pages
- /components    Shared UI components
- /lib           Utilities, types, mock data
- /public        Static assets

# Dev
- `npm run dev`    Start local dev server (localhost:3000)
- `npm run build`  Production build
- `npm run lint`   ESLint

# Constraints
- Keep it simple. No premature abstractions.
- Mobile-first UI — target audience uses phones.
- No backend code in Phase 1.