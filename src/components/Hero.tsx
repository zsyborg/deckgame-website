import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-cover bg-center" style={{
      backgroundImage: 'url(/backgrounds/dark-dungeon.png)',
      backgroundAttachment: 'fixed',
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-items-center justify-center relative z-20">
        <h1 className="font-cinzel text-6xl md:text-7xl mb-6">
          <span className="bg-gradient-to-r from-gold via-accent to-gold bg-clip-text text-transparent animate-glow">
            Deck Battle
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Build your legendary deck. Master strategic combat. Become the ultimate champion in a realm of endless possibilities.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center py-12 hidden">
          <Link
            href="/play"
            className="px-4 my-8 bg-gradient-accent text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-accent/50 transition transform hover:scale-105"
          >
            Enter the Arena
          </Link>
          <Link
            href="#features"
            className="px-4 my-8 border-2 border-gold text-gold font-bold text-lg rounded-lg hover:bg-gold/10 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 mb-12">
          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg backdrop-blur hover:border-gold transition">
            <div className="text-4xl mb-3">🃏</div>
            <h3 className="text-xl font-bold text-gold mb-2">Deck Building</h3>
            <p className="text-gray-400">Craft the perfect deck with unique cards and powerful synergies</p>
          </div>

          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg backdrop-blur hover:border-gold transition">
            <div className="text-4xl mb-3">⚔️</div>
            <h3 className="text-xl font-bold text-gold mb-2">Intense Battles</h3>
            <p className="text-gray-400">Face off against challenging monsters in turn-based combat</p>
          </div>

          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg backdrop-blur hover:border-gold transition">
            <div className="text-4xl mb-3">👑</div>
            <h3 className="text-xl font-bold text-gold mb-2">Hero Classes</h3>
            <p className="text-gray-400">Choose from multiple character classes with unique abilities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
