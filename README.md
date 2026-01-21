# BuildAtScale.tv

[![Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE.svg?logo=astro)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020.svg?logo=cloudflare)](https://pages.cloudflare.com)

A website for sharing videos about AI tools, web development, DevOps, and database systems. Built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

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
│   └── pages/         # Routes (index.astro)
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- YouTube API key (for fetching video data)
- Resend API key (for newsletter functionality)

### Installation

```sh
npm install
```

### Environment Variables

Copy the example environment file and fill in your API keys:

```sh
cp .env.example .dev.vars
```

Required variables:

| Variable | Description | How to Get |
| :------- | :---------- | :--------- |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `RESEND_API_KEY` | Resend email service key | [Resend Dashboard](https://resend.com/api-keys) |

For production deployment, set these as environment variables in your Cloudflare Pages project settings.

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

## License

This project is proprietary. All rights reserved.
