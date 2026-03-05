# VibenVoice

Modern, premium agency website built with Next.js App Router, TypeScript, TailwindCSS, and Framer Motion.

## Stack

- Next.js 16 (App Router)
- TypeScript
- TailwindCSS (local build, no CDN)
- Framer Motion

## Pages

- `/` Home
- `/services`
- `/contact`
- `/book-strategy-call`

## Core UI Components

- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/Philosophy.tsx`
- `components/Services.tsx`
- `components/CTASection.tsx`
- `components/Footer.tsx`

## Contact Form

The contact form currently logs submissions to console through `lib/contact.ts`.
It is structured for easy API upgrade later.

## Run Locally

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```
