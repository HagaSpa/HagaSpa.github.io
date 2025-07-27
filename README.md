# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and deployed on GitHub Pages. Features a clean, professional design with resume content parsed from Markdown.

## 🚀 Features

- **Static Site Generation**: Optimized for GitHub Pages deployment
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Resume content managed through Markdown with frontmatter
- **Quality Assurance**: Comprehensive linting for both code and content
- **Japanese Language Support**: Specialized text linting rules

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with Typography plugin
- **Content**: Markdown with gray-matter and remark
- **Language**: TypeScript
- **Deployment**: GitHub Pages with static export (SSG by next.js)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 22
- yarn or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/HagaSpa/HagaSpa.github.io.git
cd HagaSpa.github.io

# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Export

```bash
# Build for production
yarn build
# or
npm run build

# Export static files
yarn export
# or
npm run export
```

## 📝 Content Management

Resume content is stored in `/contents/resume.md` with frontmatter for metadata. Edit this file to update your portfolio information.

## 🎨 Customization

- **Styling**: Modify Tailwind classes in components
- **Layout**: Edit components in `/src/components/`
- **Content**: Update markdown files in `/contents/`
- **Assets**: Add images to `/public/`

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production version
- `yarn export` - Export static files
- `yarn lint` - Run ESLint and text linting

## 📁 Project Structure

```
├── src/
│   ├── app/           # Next.js App Router pages
│   └── components/    # React components
├── contents/          # Markdown content files
├── public/           # Static assets
└── README.md
```

## 🚀 Deployment

This site is configured for automatic deployment to GitHub Pages. Push to the main branch to trigger deployment.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests for improvements.
