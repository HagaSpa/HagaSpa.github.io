# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume/portfolio website built with Next.js 15, featuring a static export setup for GitHub Pages deployment. The site displays a professional resume parsed from Markdown with frontmatter, styled with Tailwind CSS.

## Key Commands

### Development
- `yarn dev` - Start development server on localhost:3000
- `yarn build` - Build production version with Next.js static export
- `yarn start` - Start production server

### Quality Assurance  
- `yarn lint` - Run ESLint and text linting (checks both code and content)
- `yarn lint:text` - Run textlint on markdown files (Japanese language rules)

### CI/CD
- `yarn install --frozen-lockfile` - Install dependencies with exact versions (used in CI)
- All PRs automatically run lint checks and build verification
- Main branch automatically deploys to GitHub Pages

### Deployment
- `yarn deploy` - Build and prepare for GitHub Pages (creates `.nojekyll`)
- Automatic deployment via GitHub Actions on push to main branch


## Architecture

### File Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - React components (Sidebar, BrandIcons, type definitions)
- `/contents/` - Markdown content files (currently `resume.md`)
- `/public/` - Static assets

### Core Components
- **Layout** (`src/app/layout.tsx`) - Root layout with sidebar and main content areas
- **Home Page** (`src/app/page.tsx`) - Dynamically renders resume content from markdown
- **Sidebar** (`src/components/Sidebar.tsx`) - Profile info and contact links
- **BrandIcons** (`src/components/BrandIcons.tsx`) - Custom SVG icons for social platforms

### Content Management
Resume content is stored in `/contents/resume.md` with frontmatter for metadata. The file uses gray-matter for parsing and remark for markdown-to-HTML conversion.

### Styling
- Tailwind CSS with typography plugin for prose styling
- Responsive design with mobile-first approach
- Custom color scheme using slate and blue palettes

### Static Export Configuration
- Next.js configured for static export (`output: 'export'`)
- Images are unoptimized for static hosting
- Trailing slashes enabled for GitHub Pages compatibility

### Text Quality
Extensive textlint configuration for Japanese content quality, including rules for:
- Technical writing standards
- Typography and spacing
- Language-specific grammar rules

## Development Notes

- Uses TypeScript throughout
- Configured for static site deployment on GitHub Pages
- Resume content supports Japanese language with specialized linting rules
- Images are loaded from external sources (GitHub profile pictures)

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
 