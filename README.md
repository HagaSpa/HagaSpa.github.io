# Personal Portfolio Website

A modern, responsive portfolio website built with Astro and deployed on GitHub Pages. Features a clean, professional design with dark mode support and resume content parsed from Markdown via Content Collections.

## Features

- **Static Site Generation**: Optimized for GitHub Pages deployment
- **Dark Mode**: Manual toggle + OS preference fallback with FOUC prevention
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Resume content managed through Markdown with Content Collections
- **Quality Assurance**: Comprehensive linting for both code and content
- **Japanese Language Support**: Specialized text linting rules

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS v4 with Typography plugin
- **Content**: Astro Content Collections (Markdown with frontmatter)
- **Language**: TypeScript
- **Package Manager / Runtime**: Bun
- **Deployment**: GitHub Pages (static output)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (required)

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
git clone https://github.com/HagaSpa/HagaSpa.github.io.git
cd HagaSpa.github.io
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build

```bash
bun run build
```

Static files are generated in the `dist` directory.

### Preview

```bash
bun run preview
```

## Content Management

Resume content is stored in `/contents/resume.md` with frontmatter for metadata. Edit this file to update your portfolio information.

## Customization

- **Styling**: Modify Tailwind classes in components or `src/styles/global.css`
- **Layout**: Edit `src/layouts/Layout.astro` and `src/components/`
- **Content**: Update markdown files in `/contents/`
- **Assets**: Add files to `/public/`

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build production version (static output to `dist/`)
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint and text linting
- `bun run lint:text` - Run textlint on markdown content

## Project Structure

```
├── src/
│   ├── components/    # Astro components (Sidebar, ThemeToggle, icons)
│   ├── layouts/       # Layout components
│   ├── pages/         # Astro pages
│   ├── styles/        # Global CSS
│   └── content.config.ts
├── contents/          # Markdown content files
├── public/            # Static assets
├── astro.config.mjs
└── package.json
```

## Deployment

This site is configured for automatic deployment to GitHub Pages. Push to the main branch to trigger deployment.

## License

This project is open source and available under the [MIT License](LICENSE).
