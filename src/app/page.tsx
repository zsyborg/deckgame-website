import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Classes } from '@/components/Classes'
import { Monsters } from '@/components/Monsters'
import { Gameplay } from '@/components/Gameplay'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Classes />
      {/* <Monsters /> */}
      <Gameplay />
      <Footer />
    </main>
  )
}
