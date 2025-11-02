import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deck Battle - Epic Card Combat Game',
  description: 'Engage in strategic deck-building battles in a fantasy realm. Choose your hero, build your deck, and defeat powerful monsters.',
  keywords: 'card game, deck building, fantasy, rpg, battle',
  openGraph: {
    title: 'Deck Battle - Epic Card Combat Game',
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
      <body className="bg-gradient-dark">
        {children}
      </body>
    </html>
  )
}
