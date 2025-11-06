# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for Cyrine Charni (Customer Success & Business Development professional), built with Next.js 14 using the App Router and Tailwind CSS. The site is configured for static export (`output: 'export'` in next.config.js:3) to enable deployment on platforms like Vercel, Netlify, or GitHub Pages.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (generates static files in /out directory)
npm run build

# Preview production build locally
npm start

# Lint code
npm run lint
```

## Architecture & Structure

### Single-Page Application (SPA)
The entire portfolio is a **single client-side React component** (app/page.js:1-541). There are only two files in the app directory:
- `app/layout.js` - Root layout with metadata and HTML structure
- `app/page.js` - Main portfolio component with all sections and content

### Key Architectural Decisions

1. **Client-Side Rendering**: The main page uses `'use client'` directive (app/page.js:1) because it requires browser-specific features (scroll handling, state management)

2. **Static Export Configuration**: The site is configured for static HTML export (next.config.js:3) with unoptimized images (next.config.js:4-6), making it deployable to any static hosting platform

3. **All Content in One Component**: All portfolio sections (Hero, About, Skills, Case Studies, Contact) are defined within a single 541-line component. There are no separate component files or directories

4. **Section Navigation**: Smooth scrolling navigation is implemented via `scrollToSection()` function (app/page.js:18-20) which uses native DOM methods

5. **Scroll State Management**: Navigation bar appearance changes based on scroll position using `isScrolled` state (app/page.js:8) and scroll event listener (app/page.js:10-16)

### Styling Architecture

- **Tailwind CSS**: All styling uses utility classes
- **Custom Color Palette**: Primary pink/purple gradient defined in tailwind.config.js:10-22
- **Global Styles**: Minimal global CSS in app/globals.css (scroll behavior and background gradient)
- **Gradient Patterns**: Heavy use of gradient backgrounds (`from-pink-500 to-purple-600`, `from-gray-50 to-gray-100`)

### Icons
Uses `lucide-react` package for all icons (imported at app/page.js:4)

## Content Customization

### Portfolio Metrics & Data
All professional metrics, case studies, and personal information are hardcoded in app/page.js:
- Contact information (email, phone, LinkedIn): Search for "cyrine.charni12@gmail.com"
- Case studies with metrics: Located in the "Réalisations" section
- Skills and competencies: In the "Compétences" section
- Calendly integration: Line reference for appointment booking link

### SEO & Metadata
All metadata is centralized in app/layout.js:3-13:
- Page title, description, keywords
- OpenGraph tags for social sharing
- Language set to French (`lang="fr"`)

## Deployment Notes

The build output goes to the `/out` directory (created by `npm run build`). The site is ready for deployment to:
- **Vercel**: Recommended platform, automatic deployments from git
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Deploy contents of `/out` directory

## Excluded from Git
Check .gitignore for standard Next.js exclusions:
- `/node_modules`
- `/.next` (development build cache)
- `/out` (production build output)