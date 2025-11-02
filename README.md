# Deck Battle - Official Website

A fantasy-themed official website for the Deck Battle card game, built with Next.js, React, Tailwind CSS, and TypeScript.

## Features

- 🎨 **Modern Design**: Fantasy-inspired aesthetic with gradient backgrounds and smooth animations
- 📱 **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- ⚡ **Performance**: Optimized with Next.js for fast loading and great performance
- 🎭 **Interactive**: Smooth animations and hover effects throughout
- 🌙 **Dark Theme**: Beautiful dark theme with gold and purple accents

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Font**: Google Fonts (Cinzel for headings)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.19.0 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd deckgame-website
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Production Build

Build for production:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── play/
│   │   └── page.tsx        # Game launch page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features showcase
│   ├── Classes.tsx         # Character classes showcase
│   ├── Gameplay.tsx        # How to play section
│   └── Footer.tsx          # Footer with links
└── ...
```

## Pages

- **Home** (`/`): Main landing page with hero, features, classes, and gameplay sections
- **Play** (`/play`): Game launch page with call-to-action buttons

## Styling

The website uses Tailwind CSS with custom theme colors:
- **Gold**: `#d4af37` - Primary accent color
- **Purple/Accent**: `#8b5cf6` - Secondary accent
- **Dark**: `#0f0f1e` - Main background
- **Darker**: `#050510` - Darker background

### Custom Animations

- `animate-float`: Smooth floating animation
- `animate-glow`: Glowing text effect
- `animate-shimmer`: Shimmer effect for highlights

## Images

The website uses emoji and text-based design. To add actual game images:

1. Place images in `public/images/`
2. Use Next.js Image component for optimization
3. Update image paths in components

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ CSS-in-JS with Tailwind for minimal CSS
- ✅ Lazy loading for sections
- ✅ Optimized fonts with Google Fonts
- ✅ Code splitting and tree-shaking

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

ISC

## Contact

For questions or support, visit the official Discord or GitHub repository.
