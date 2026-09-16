# MoraSpirit — Member Availability Dashboard

A small React + Tailwind dashboard for the MoraSpirit Web Pillar task. It fetches
the member directory, and lets you check any member's availability on a chosen date.

## Stack

- React 18 + Vite
- Tailwind CSS
- No extra state library — each member card owns its own check via a small
  `useState`/`fetch` flow, and the member list loads once via a `useMembers` hook.

## Structure

```
src/
  api/client.js          - the two API calls (get members, check availability)
  hooks/useMembers.js     - loads the member list, exposes loading/error state
  components/
    Header.jsx            - title, member count, date picker
    MemberGrid.jsx         - responsive grid (1 / 2 / 3 / 4 columns)
    MemberCard.jsx          - one member, "Check availability" button, result
    StatusIndicator.jsx     - green/red status readout
    LoadingState.jsx        - skeleton grid while members load
    ErrorState.jsx           - retry UI if the member list fails to load
  App.jsx                 - wires it all together
```

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder — deploy it as-is to Vercel, Netlify, or
GitHub Pages (Vite's default build settings work with all three out of the box).

## Notes on behaviour

- The member grid is responsive at Tailwind's `sm`, `md`, and `lg` breakpoints:
  1 column by default, 2 from `sm`, 3 from `md`, 4 from `lg` up.
- Availability is checked per member, per card, so one slow/failed request
  never blocks the rest of the grid.
- A failed `/api/members` load shows a retry state; a failed availability
  check shows an inline error on that one card.
