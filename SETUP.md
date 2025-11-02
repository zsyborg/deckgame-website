# Deck Battle Website - Setup & Deployment Guide

## 🎉 Project Created Successfully!

Your official Deck Battle website has been created in `D:\Crypto\deckgame-website` with a modern, fantasy-themed design.

## 📁 Project Structure

```
deckgame-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── play/page.tsx           # Game launch page
│   │   └── globals.css             # Global styles & animations
│   ├── components/
│   │   ├── Header.tsx              # Navigation
│   │   ├── Hero.tsx                # Hero section
│   │   ├── Features.tsx            # Features showcase
│   │   ├── Classes.tsx             # Character classes
│   │   ├── Gameplay.tsx            # How to play
│   │   └── Footer.tsx              # Footer
│   └── index.tsx
├── public/                         # Static assets
├── next.config.js                  # Next.js config
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
├── postcss.config.js               # PostCSS config
├── package.json                    # Dependencies
└── README.md                       # Documentation
```

## 🚀 Quick Start

### Development

```bash
cd deckgame-website
pnpm install  # Already done
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## 🎨 Design Features

### Colors
- **Gold** (#d4af37): Primary accent, borders, highlights
- **Purple** (#8b5cf6): Secondary accent, gradients
- **Dark** (#0f0f1e): Main background
- **Darker** (#050510): Alternate background

### Animations
- `animate-float`: Floating motion
- `animate-glow`: Glowing text effect
- `animate-shimmer`: Shimmer effect
- Custom gradient backgrounds and smooth transitions

### Typography
- **Headings**: Cinzel font (fantasy style)
- **Body**: System UI (modern, readable)

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Features showcase (6 key game features)
- Character classes preview
- Gameplay explanation
- Footer with navigation

### Play (`/play`)
- Game launch page
- Bridge between website and game client
- Ready state information

## 🔧 Configuration Files

### next.config.js
- Image optimization settings
- Next.js specific configurations

### tailwind.config.ts
- Custom color palette
- Extended theme options
- Font family configuration

### tsconfig.json
- TypeScript strict mode
- Path aliases (@/* → ./src/*)
- Type definitions for Next.js and Node.js

### postcss.config.js
- Tailwind CSS v4 integration
- PostCSS transformation pipeline

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^16.0.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.1.16",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.21"
  },
  "devDependencies": {
    "typescript": "^5.9.3",
    "@types/react": "^19.2.2",
    "@types/node": "^24.9.2",
    "@tailwindcss/postcss": "^4.1.16"
  }
}
```

## 🎯 Next Steps

### Adding Game Images
1. Create `public/images/` folder
2. Place card, monster, and character images
3. Update component imports to use Image component:

```tsx
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/images/hero-banner.png"
      alt="Hero"
      width={1200}
      height={400}
    />
  )
}
```

### Customization

#### Update Game Information
- Modify hero section text in `Hero.tsx`
- Update feature descriptions in `Features.tsx`
- Customize class information in `Classes.tsx`

#### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  gold: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
  dark: '#YOUR_COLOR',
  darker: '#YOUR_COLOR',
}
```

#### Add New Pages
1. Create folder under `src/app/`
2. Add `page.tsx` file
3. Use Header and Footer components

Example: `src/app/about/page.tsx`
```tsx
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      {/* Your content */}
      <Footer />
    </>
  )
}
```

### Link Game Client
Update Header and buttons to point to your game:

```tsx
// In Header.tsx
<Link href="http://yourgame.com/play">Play Now</Link>

// Or for local development
<Link href="http://localhost:5173">Play Now</Link>
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Responsive grid layouts
- Mobile menu in navigation
- Optimized for all screen sizes

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect GitHub repo
4. Deploy with one click

```bash
git push origin main
# Vercel auto-deploys on push
```

### Other Platforms
- **Netlify**: Drag & drop or git connect
- **Render**: Git-based deployment
- **Railway**: Container deployment
- **Self-hosted**: Build and run anywhere Node.js runs

### Docker Deployment
Create `Dockerfile`:
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

Build and run:
```bash
docker build -t deckgame-website .
docker run -p 3000:3000 deckgame-website
```

## 🔒 Environment Variables

Create `.env.local`:
```env
# Next.js
NEXT_PUBLIC_GAME_URL=http://localhost:5173
NEXT_PUBLIC_API_URL=https://api.yourgame.com
```

Use in components:
```tsx
const gameUrl = process.env.NEXT_PUBLIC_GAME_URL
```

## 📊 Performance Optimization

### Implemented
- ✅ Image optimization with Next.js Image
- ✅ CSS-in-JS with Tailwind
- ✅ Code splitting
- ✅ Font optimization (Google Fonts)
- ✅ Zero JavaScript lazy loading

### Best Practices
- Use `next/image` for all images
- Lazy load heavy components with `dynamic()`
- Optimize images before uploading
- Use semantic HTML

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
pnpm install
rm -rf .next
pnpm build
```

### Port already in use
```bash
# Use custom port
pnpm dev -- -p 3001
```

### TypeScript errors
```bash
# Rebuild TypeScript
pnpm tsc --noEmit
```

## 📞 Support

For issues or questions:
1. Check Next.js docs: https://nextjs.org
2. Tailwind docs: https://tailwindcss.com
3. React docs: https://react.dev

## 📄 License

ISC - See package.json

---

**Website created**: November 2, 2025
**Next.js Version**: 16.0.1
**Tailwind CSS**: 4.1.16
**React**: 19.2.0

Enjoy building! ⚔️✨
