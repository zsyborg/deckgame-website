export function Features() {
  const features = [
    {
      icon: '🎮',
      title: 'Dynamic Combat System',
      description: 'Experience thrilling turn-based battles where strategy and deck composition matter. Every decision shapes your path to victory.',
    },
    {
      icon: '🛡️',
      title: 'Multiple Character Classes',
      description: 'Choose from unique hero classes, each with distinct abilities, starting decks, and playstyles to master.',
    },
    {
      icon: '🏆',
      title: 'Progressive Difficulty',
      description: 'Face increasingly challenging monsters as you progress, with epic boss encounters that test your skills to the limit.',
    },
    {
      icon: '💎',
      title: 'Extensive Card Pool',
      description: 'Hundreds of cards with unique effects, allowing for countless deck combinations and strategies to explore.',
    },
    {
      icon: '🛍️',
      title: 'Dynamic Shop System',
      description: 'Between battles, visit the shop to upgrade your deck, purchase healing items, and prepare for tougher enemies.',
    },
    {
      icon: '⚡',
      title: 'Real-Time Effects',
      description: 'Watch as card effects unfold with beautiful animations and sound effects that bring your strategy to life.',
    },
  ]

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cinzel text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-amber-50 py-2">
            ✨ Game Features ✨
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-dark/50 border border-gold/20 rounded-xl backdrop-blur hover:border-gold/50 transition transform hover:scale-105 flex flex-col justify-center items-center text-center"
            >
              <div className="text-5xl mb-4 group-hover:animate-float">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
