# BuildAtScale.tv

A website for sharing videos about AI tools, web development, DevOps, and database systems. Built with Astro and deployed on Cloudflare Pages.

## Features

- **Video Integration**: Fetches and displays YouTube videos using the YouTube Data API
- **Newsletter**: Email newsletter subscription via Resend
- **Dark Mode**: Tailwind CSS-powered dark mode support
- **Progressive Loading**: Optimized video loading with thumbnails
- **Video Modal**: Embedded YouTube player with modal interface
- **Content Requests**: Form for viewers to request video topics

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Content-focused web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com) with Workers
- **Email**: [Resend](https://resend.com) for newsletter functionality
- **Video**: YouTube Data API v3

## Project Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Astro components
│   ├── content/       # Content collections (videos)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Routes (index.astro)
│   └── utils/         # Utility functions (YouTube API)
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js v22 (see `.nvmrc` for exact version)
- YouTube API key (for fetching video data)
- Resend API key (for newsletter functionality)

### Installation

```sh
npm install
```

### Environment Variables

Copy the example environment file and add your API keys:

```sh
cp .env.example .dev.vars
```

Required environment variables:

| Variable | Description |
| :------- | :---------- |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key ([Get one here](https://console.cloud.google.com/apis/credentials)) |
| `RESEND_API_KEY` | Resend API key for newsletter functionality |

For production deployment, set these as secrets in your Cloudflare Pages project.

## Development

Start the development server:

```sh
npm run dev
```

The site will be available at `http://localhost:4321`

## Build & Deploy

Build for production:

```sh
npm run build
```

Preview production build locally:

```sh
npm run preview
```

Deploy to Cloudflare:

```sh
npm run deploy
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                            |
| `npm run dev`             | Start local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Build and preview with Wrangler dev server      |
| `npm run deploy`          | Build and deploy to Cloudflare Pages            |
| `npm run cf-typegen`      | Generate TypeScript types for Cloudflare        |

## Site URL

https://buildatscale.tv

## About

BuildAtScale is a platform for learning in public - sharing real experiments, failures, and discoveries in AI-assisted development, web development, DevOps, and modern software engineering.
