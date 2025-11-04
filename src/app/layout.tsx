import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Shoden - Epic Card Combat Game',
  description: 'Engage in strategic deck-building battles in a fantasy realm. Choose your hero, build your deck, and defeat powerful monsters.',
  keywords: 'card game, deck building, fantasy, solana, battle',
  openGraph: {
    title: 'Shoden - Epic Card Combat Game',
    description: 'Strategic deck-building battles in a fantasy realm',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <Analytics/>
         {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/gold-coins.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/gold-coins.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/gold-coins.png  " />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <body className="">
          {children}
        </body>
    </html>
  )
}
