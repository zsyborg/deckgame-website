export function Gameplay() {
  return (
    <section id="gameplay" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cinzel text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
            How to Play
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-accent">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-2">Create Your Character</h3>
                <p className="text-gray-400">Choose your hero class and customize your starting deck with powerful cards that match your playstyle.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-accent">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-2">Build Your Strategy</h3>
                <p className="text-gray-400">Draw cards each turn and strategically play them to deal damage, defend, and control the battlefield.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-accent">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-2">Defeat Monsters</h3>
                <p className="text-gray-400">Overcome challenging enemies with unique abilities. Learn their patterns and adapt your strategy accordingly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-accent">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-2">Upgrade & Advance</h3>
                <p className="text-gray-400">Between battles, use your gold to purchase new cards, heal items, and upgrade your deck for tougher challenges.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-gold rounded-xl blur-2xl opacity-20"></div>
            <div className="relative bg-dark/80 border border-gold/30 rounded-xl p-8 backdrop-blur">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-3xl font-bold text-gold mb-4">Turn-Based Strategy</h3>
                <p className="text-gray-300 mb-6">Each turn, you have limited resources to play cards. Plan ahead, anticipate enemy moves, and execute devastating combos.</p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-dark/50 p-4 rounded-lg border border-gold/20">
                    <div className="text-4xl mb-2">🃏</div>
                    <p className="text-sm text-gray-300">Card Draw</p>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-lg border border-gold/20">
                    <div className="text-4xl mb-2">💪</div>
                    <p className="text-sm text-gray-300">Damage Output</p>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-lg border border-gold/20">
                    <div className="text-4xl mb-2">🛡️</div>
                    <p className="text-sm text-gray-300">Defense</p>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-lg border border-gold/20">
                    <div className="text-4xl mb-2">✨</div>
                    <p className="text-sm text-gray-300">Special Effects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
