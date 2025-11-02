export function Classes() {
  const classes = [
    {
      name: 'Warrior',
      emoji: '⚔️',
      color: 'from-red-600 to-orange-500',
      description: 'Master of melee combat with high defense and powerful attacks. Ideal for direct, aggressive strategies.',
      skills: ['Heavy Strike', 'Iron Skin', 'Cleave'],
    },
    {
      name: 'Mage',
      emoji: '✨',
      color: 'from-purple-600 to-blue-500',
      description: 'Wielder of arcane magic with devastating spells. Specializes in crowd control and magical effects.',
      skills: ['Fireball', 'Frost Nova', 'Arcane Missile'],
    },
    {
      name: 'Rogue',
      emoji: '🗡️',
      color: 'from-gray-700 to-gray-500',
      description: 'Swift and cunning assassin focusing on quick strikes and evasion. Master of precision and tactics.',
      skills: ['Backstab', 'Evasion', 'Poison Blade'],
    },
  ]

  return (
    <section id="classes" className="px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cinzel text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-amber-50">
            <span className="inline-block transform -scale-x-100">🤺 </span>Choose Your Hero 🤺
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((heroClass, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${heroClass.color} opacity-20`}></div>

              {/* Content */}
              <div className="relative p-8 bg-dark/70 border border-gold/30 rounded-xl backdrop-blur">
                <div className="text-7xl mb-4">{heroClass.emoji}</div>
                <h3 className="font-cinzel text-3xl font-bold text-gold mb-3">{heroClass.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{heroClass.description}</p>

                <div className="space-y-2">
                  <p className="text-sm text-gold font-bold">Signature Abilities:</p>
                  <ul className="space-y-1">
                    {heroClass.skills.map((skill, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <button className="mt-6 w-full py-2 bg-gradient-to-r from-gold to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition">
                  Select {heroClass.name}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
