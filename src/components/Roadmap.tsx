import React from 'react';

const roadmapData = {
  roadmap: [
    {
      phase: "Q4 2024",
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
      phase: "Q1 2025",
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
      phase: "Q2 2025",
      milestones: [
        {
          title: "NFT Integration",
          description: "Integrate NFTs into the game, allowing players to collect and trade unique digital assets.",
        },
      ],
    },
    {
      phase: "Q3 2025",
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
      phase: "Q4 2025",
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
    <section className="py-16 border-2 backdrop-blur" id='roadmap'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Roadmap</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />
          
          {roadmapData.roadmap.map((phase, index) => (
            <div key={phase.phase} className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              {/* Phase indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10" />
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{phase.phase}</h3>
                  <div className="space-y-4">
                    {phase.milestones.map((milestone) => (
                      <div key={milestone.title} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;