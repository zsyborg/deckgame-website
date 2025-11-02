'use client'

import Image from 'next/image'
import { useState } from 'react'
import { monsters } from '@/data/monsters'

export function Monsters() {
  const [sortBy, setSortBy] = useState<'level' | 'health' | 'attack' | 'defense'>('level')

  const sortedMonsters = [...monsters].sort((a, b) => {
    switch (sortBy) {
      case 'level':
        return b.level - a.level
      case 'health':
        return b.stats.maxHealth - a.stats.maxHealth
      case 'attack':
        return b.stats.attack - a.stats.attack
      case 'defense':
        return b.stats.defense - a.stats.defense
    }
  })

  return (
    <section id="monsters" className="py-20 px-6 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cinzel text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
            Monster Gallery
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Face over 19 unique monsters with varying difficulty levels. Study their stats and prepare your deck accordingly.
        </p>

        {/* Sort Controls */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {['level', 'health', 'attack', 'defense'].map((stat) => (
            <button
              key={stat}
              onClick={() => setSortBy(stat as any)}
              className={`px-6 py-2 rounded-lg font-bold transition capitalize ${
                sortBy === stat
                  ? 'bg-gradient-accent text-white shadow-lg shadow-accent/50'
                  : 'bg-dark/50 border border-gold/30 text-gold hover:border-gold'
              }`}
            >
              Sort by {stat}
            </button>
          ))}
        </div>

        {/* Monsters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMonsters.map((monster) => (
            <div
              key={monster.id}
              className="group relative overflow-hidden rounded-xl border border-gold/20 hover:border-gold/50 transition bg-dark/50 backdrop-blur hover:shadow-2xl hover:shadow-gold/20"
            >
              {/* Monster Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-dark to-darker">
                <Image
                  src={monster.artwork}
                  alt={monster.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                {/* Level Badge */}
                <div className="absolute top-3 right-3 bg-gradient-accent text-white font-bold px-3 py-1 rounded-full text-sm">
                  Lv. {monster.level}
                </div>
              </div>

              {/* Monster Info */}
              <div className="p-6">
                <h3 className="font-cinzel text-2xl font-bold text-gold mb-4">{monster.name}</h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-dark/50 p-3 rounded-lg border border-gold/20">
                    <p className="text-xs text-gray-400 mb-1">❤️ Health</p>
                    <p className="text-lg font-bold text-gold">{monster.stats.maxHealth}</p>
                  </div>
                  <div className="bg-dark/50 p-3 rounded-lg border border-gold/20">
                    <p className="text-xs text-gray-400 mb-1">⚔️ Attack</p>
                    <p className="text-lg font-bold text-accent">{monster.stats.attack}</p>
                  </div>
                  <div className="bg-dark/50 p-3 rounded-lg border border-gold/20">
                    <p className="text-xs text-gray-400 mb-1">🛡️ Defense</p>
                    <p className="text-lg font-bold text-blue-400">{monster.stats.defense}</p>
                  </div>
                  <div className="bg-dark/50 p-3 rounded-lg border border-gold/20">
                    <p className="text-xs text-gray-400 mb-1">💰 Gold</p>
                    <p className="text-lg font-bold text-yellow-400">{monster.goldBounty}</p>
                  </div>
                </div>

                {/* Difficulty Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Difficulty</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition ${
                          i < Math.ceil(monster.level / 2)
                            ? 'bg-gradient-to-r from-accent to-gold'
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg text-center">
            <div className="text-4xl mb-3">👹</div>
            <p className="text-gray-400 mb-2">Total Monsters</p>
            <p className="text-3xl font-bold text-gold">{monsters.length}</p>
          </div>
          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg text-center">
            <div className="text-4xl mb-3">📈</div>
            <p className="text-gray-400 mb-2">Max Level</p>
            <p className="text-3xl font-bold text-accent">{Math.max(...monsters.map(m => m.level))}</p>
          </div>
          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg text-center">
            <div className="text-4xl mb-3">💰</div>
            <p className="text-gray-400 mb-2">Total Gold Reward</p>
            <p className="text-3xl font-bold text-yellow-400">{monsters.reduce((sum, m) => sum + m.goldBounty, 0)}</p>
          </div>
          <div className="p-6 bg-dark/50 border border-gold/30 rounded-lg text-center">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-gray-400 mb-2">Avg. Stats</p>
            <p className="text-sm font-bold text-gold">
              HP: {Math.round(monsters.reduce((sum, m) => sum + m.stats.maxHealth, 0) / monsters.length)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
