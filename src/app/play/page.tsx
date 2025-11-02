import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function PlayPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-20 px-6">
        <div className="max-w-2xl text-center">
          <div className="text-7xl mb-6 animate-float">⚔️</div>
          <h1 className="font-cinzel text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-accent to-gold bg-clip-text text-transparent">
              Ready for Battle?
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            The game client is loading. Prepare yourself for an epic adventure filled with strategic deck-building and thrilling combat encounters.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="px-10 py-4 bg-gradient-accent text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-accent/50 transition transform hover:scale-105">
              Launch Game
            </button>
            <Link
              href="/"
              className="px-10 py-4 border-2 border-gold text-gold font-bold text-lg rounded-lg hover:bg-gold/10 transition"
            >
              Return Home
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gold mb-2">Strategic Depth</h3>
              <p className="text-gray-400">Master complex tactics and card synergies</p>
            </div>

            <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-gold mb-2">Epic Battles</h3>
              <p className="text-gray-400">Face legendary monsters and bosses</p>
            </div>

            <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-gold mb-2">Endless Replayability</h3>
              <p className="text-gray-400">Infinite combinations and strategies</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
