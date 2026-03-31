# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume/portfolio website built with Astro, featuring a static site setup for GitHub Pages deployment. The site displays a professional resume managed through TypeScript data files, styled with Tailwind CSS. Uses Bun as the package manager and runtime.

## Key Commands

### Development
- `bun run dev` - Start development server
- `bun run build` - Build production version with Astro static output
- `bun run preview` - Preview production build

### Quality Assurance
- `bun run lint` - Run ESLint

### CI/CD
- `bun install --frozen-lockfile` - Install dependencies with exact versions (used in CI)
- All PRs automatically run lint checks and build verification
- Main branch automatically deploys to GitHub Pages

### Deployment
- Automatic deployment via GitHub Actions on push to main branch
- GitHub Pages serves the static site from the `dist` directory

## Architecture

### File Structure
- `/src/pages/` - Astro pages
- `/src/layouts/` - Astro layout components
- `/src/components/` - Astro components (Sidebar, ThemeToggle, brand icons)
- `/src/styles/` - Global CSS with Tailwind
- `/contents/` - Archived content files (reference only, not used by the site)
- `/public/` - Static assets

### Core Components
- **Layout** (`src/layouts/Layout.astro`) - Root layout with sidebar, dark mode support, and Inter font
- **Index Page** (`src/pages/index.astro`) - Renders resume content from TypeScript data files
- **Sidebar** (`src/components/Sidebar.astro`) - Profile info and contact links
- **ThemeToggle** (`src/components/ThemeToggle.astro`) - Dark/light mode toggle button
- **GithubIcon/TwitterIcon** (`src/components/`) - Custom SVG icon components

### Content Management
Resume content is managed through TypeScript data files in `/src/data/` (`ja.ts`, `en.ts`, `shared.ts`).

### Styling
- Tailwind CSS v4 with `@tailwindcss/vite` plugin and typography plugin
- Dark mode support with manual toggle + OS preference fallback
- Responsive design with mobile-first approach
- Inter font via `@fontsource/inter`

## Development Notes

- Uses TypeScript with Astro strict config
- Package manager: Bun (not npm/yarn)
- Configured for static site deployment on GitHub Pages
- Images are loaded from external sources (GitHub profile pictures)
- Dark mode: `<script is:inline>` in `<head>` for FOUC prevention

## Pull Request Templates
### Japanese/English PR Template
```markdown

## Background / 背景

[English description]
[日本語の説明]

## Changes / 変更内容

[English changes]
[日本語の変更内容]

## Impact scope / 影響範囲

[English impact]
[日本語の影響範囲]

## Testing / 動作確認

- [x] Test item 1 / テスト項目1
- [x] Test item 2 / テスト項目2
```

### Conventional Commits

```bash
<type>[optional scope]: <description>
```
type: feat, fix, refactor, ci, perf, docs, chore
