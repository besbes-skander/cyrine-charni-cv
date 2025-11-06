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

### Modular TypeScript Architecture
The portfolio is built with a **modular component architecture** using TypeScript:
- `app/page.tsx` - Main page container that composes all sections
- `app/layout.tsx` - Root layout with metadata and HTML structure
- `app/components/` - Organized component library:
  - `sections/` - 7 major section components (Hero, About, Skills, etc.)
  - `ui/` - 10 reusable UI components (StatCard, MotivationCard, etc.)
  - `layout/` - Navigation and Footer components
- `app/types/index.ts` - TypeScript interfaces for all data structures
- `app/utils/iconMap.tsx` - Icon mapping utility for Lucide icons
- `data/` - 10 JSON files containing all portfolio content
- `config/site.config.ts` - **Centralized configuration file** (see Configuration section below)

### Key Architectural Decisions

1. **TypeScript**: Full type safety with interfaces for all data structures

2. **Client-Side Rendering**: Components use `'use client'` directive because they require browser-specific features (scroll handling, state management)

3. **Static Export Configuration**: The site is configured for static HTML export (next.config.js:3) with unoptimized images, making it deployable to any static hosting platform

4. **Data-Driven**: All content is separated into JSON files in `/data` directory, making it easy to update without touching code

5. **Configuration-Based**: Contact information and external links are centralized in `config/site.config.ts` for easy updates

6. **Section Navigation**: Smooth scrolling navigation is implemented via `scrollToSection()` function (app/page.tsx:55-57) which uses native DOM methods

7. **Scroll State Management**: Navigation bar appearance changes based on scroll position using `isScrolled` state and scroll event listener (app/page.tsx:47-53)

### Styling Architecture

- **Tailwind CSS**: All styling uses utility classes
- **Custom Color Palette**: Primary pink/purple gradient defined in tailwind.config.js:10-22
- **Global Styles**: Minimal global CSS in app/globals.css (scroll behavior and background gradient)
- **Gradient Patterns**: Heavy use of gradient backgrounds (`from-pink-500 to-purple-600`, `from-gray-50 to-gray-100`)

### Icons
Uses `lucide-react` package for all icons, with a centralized icon mapping utility in `app/utils/iconMap.tsx`

## Configuration

### Site Configuration (`config/site.config.ts`)
**This is the main file to edit for contact information and external links:**

```typescript
export const siteConfig = {
  contact: {
    email: 'cyrine.charni12@gmail.com',
    phone: '07 44 19 69 09',
    phoneRaw: '0744196909', // For tel: links
  },
  links: {
    linkedin: 'https://linkedin.com/in/cyrine-charni',
    calendly: 'https://calendly.com/cyrine-charni',
  },
}
```

**To update contact information:**
1. Edit `config/site.config.ts`
2. No rebuild needed - just refresh the browser in dev mode
3. For production, run `npm run build`

## Content Customization

### Portfolio Data Files
All content is organized in JSON files in `/data`:
- `personal-info.json` - Name, title, location, professional info (non-contact)
- `navigation.json` - Navigation menu items
- `hero-stats.json` - Statistics shown on hero section (150+ contracts, 80K€)
- `about.json` - Journey, motivations, values
- `skills.json` - Core skills and tool stack
- `case-studies.json` - 3 detailed case studies with metrics
- `job-search.json` - Job search criteria
- `hobbies.json` - Personal interests
- `contact.json` - Contact section content
- `footer.json` - Footer text

### SEO & Metadata
All metadata is centralized in `app/layout.tsx`:
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