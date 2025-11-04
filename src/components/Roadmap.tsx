import React from 'react';

const roadmapData = {
  roadmap: [
    {
      phase: "Q4 2025",
      milestones: [
        {
          title: "Game Development Completion",
          description: "Complete game development for initial release.",
        },
        {
          title: "Token Creation",
          description: "Create and distribute tokens for the game's economy.",
        },
      ],
    },
    {
      phase: "Q1 2026",
      milestones: [
        {
          title: "Game Launch",
          description: "Launch the game on mainnet and make it available to the public.",
        },
        {
          title: "New Card Packs",
          description: "Release new card packs and game modes to keep the game fresh and exciting.",
        },
      ],
    },
    {
      phase: "Q2 2026",
      milestones: [
        {
          title: "NFT Integration",
          description: "Integrate NFTs into the game, allowing players to collect and trade unique digital assets.",
        },
      ],
    },
    {
      phase: "Q3 2026",
      milestones: [
        {
          title: "Tournaments and Competitions",
          description: "Host tournaments and competitions to foster a sense of community and competition.",
        },
        {
          title: "Partnerships and Collaborations",
          description: "Establish partnerships with other Solana-based projects and gaming companies.",
        },
      ],
    },
    {
      phase: "Q4 2026",
      milestones: [
        {
          title: "Game Engine Upgrade",
          description: "Upgrade the game engine to improve performance, security, and scalability.",
        },
        {
          title: "New Game Modes",
          description: "Release new game modes and features to keep the game exciting and challenging.",
        },
      ],
    },
  ],
};

const Roadmap = () => {
  return (
    <section className="py-12 border-2 backdrop-blur" id="roadmap">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Roadmap</h2>
        <div className="relative">
          {/* Vertical line: centered on md+, moved to left on small screens */}
          <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 h-full w-1 bg-blue-500" />
          
          {roadmapData.roadmap.map((phase, index) => (
            <div
              key={phase.phase}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Phase indicator */}
              <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full border-4 border-black z-10" />
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 pt-8">{phase.phase}</h3>
                  <div className="space-y-4">
                    {phase.milestones.map((milestone) => (
                      <div key={milestone.title} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="text-sm md:text-xl font-semibold text-white mb-1 md:mb-2">{milestone.title}</h4>
                        <p className="text-gray-300 text-sm md:text-base">{milestone.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for alternating layout (hidden on mobile) */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;