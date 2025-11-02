export interface Monster {
  id: string
  name: string
  level: number
  goldBounty: number
  stats: {
    maxHealth: number
    attack: number
    defense: number
  }
  artwork: string
}

export const monsters: Monster[] = [
  {
    id: 'ancient-giant',
    name: 'Ancient Giant',
    level: 7,
    goldBounty: 10,
    stats: {
      maxHealth: 15,
      attack: 4,
      defense: 5,
    },
    artwork: '/monsters/ancient-giant/artwork.png',
  },
  {
    id: 'arachnid',
    name: 'Arachnid',
    level: 4,
    goldBounty: 5,
    stats: {
      maxHealth: 8,
      attack: 5,
      defense: 2,
    },
    artwork: '/monsters/arachnid/artwork.png',
  },
  {
    id: 'bone-dragon',
    name: 'Bone Dragon',
    level: 8,
    goldBounty: 10,
    stats: {
      maxHealth: 20,
      attack: 8,
      defense: 8,
    },
    artwork: '/monsters/bone-dragon/artwork.png',
  },
  {
    id: 'clown',
    name: 'Clown',
    level: 3,
    goldBounty: 4,
    stats: {
      maxHealth: 6,
      attack: 3,
      defense: 1,
    },
    artwork: '/monsters/clown/artwork.png',
  },
  {
    id: 'creepy',
    name: 'Creepy',
    level: 2,
    goldBounty: 3,
    stats: {
      maxHealth: 5,
      attack: 2,
      defense: 1,
    },
    artwork: '/monsters/creepy/artwork.png',
  },
  {
    id: 'devil-mallow',
    name: 'Devil Mallow',
    level: 6,
    goldBounty: 8,
    stats: {
      maxHealth: 12,
      attack: 6,
      defense: 4,
    },
    artwork: '/monsters/devil-mallow/artwork.png',
  },
  {
    id: 'evil-sorcerer',
    name: 'Evil Sorcerer',
    level: 9,
    goldBounty: 12,
    stats: {
      maxHealth: 18,
      attack: 10,
      defense: 6,
    },
    artwork: '/monsters/evil-sorcerer/artwork.png',
  },
  {
    id: 'gargoyle',
    name: 'Gargoyle',
    level: 5,
    goldBounty: 7,
    stats: {
      maxHealth: 14,
      attack: 4,
      defense: 7,
    },
    artwork: '/monsters/gargoyle/artwork.png',
  },
  {
    id: 'ghoul',
    name: 'Ghoul',
    level: 3,
    goldBounty: 4,
    stats: {
      maxHealth: 7,
      attack: 4,
      defense: 2,
    },
    artwork: '/monsters/ghoul/artwork.png',
  },
  {
    id: 'haunting-spirit',
    name: 'Haunting Spirit',
    level: 4,
    goldBounty: 5,
    stats: {
      maxHealth: 9,
      attack: 6,
      defense: 3,
    },
    artwork: '/monsters/haunting-spirit/artwork.png',
  },
  {
    id: 'hulking-giant',
    name: 'Hulking Giant',
    level: 6,
    goldBounty: 8,
    stats: {
      maxHealth: 16,
      attack: 7,
      defense: 4,
    },
    artwork: '/monsters/hulking-giant/artwork.png',
  },
  {
    id: 'imp',
    name: 'Imp',
    level: 1,
    goldBounty: 2,
    stats: {
      maxHealth: 3,
      attack: 2,
      defense: 1,
    },
    artwork: '/monsters/imp/artwork.png',
  },
  {
    id: 'orc',
    name: 'Orc',
    level: 5,
    goldBounty: 6,
    stats: {
      maxHealth: 12,
      attack: 6,
      defense: 3,
    },
    artwork: '/monsters/orc/artwork.png',
  },
  {
    id: 'ronin',
    name: 'Ronin',
    level: 7,
    goldBounty: 9,
    stats: {
      maxHealth: 14,
      attack: 8,
      defense: 5,
    },
    artwork: '/monsters/ronin/artwork.png',
  },
  {
    id: 'the-black-cat',
    name: 'The Black Cat',
    level: 5,
    goldBounty: 7,
    stats: {
      maxHealth: 10,
      attack: 5,
      defense: 4,
    },
    artwork: '/monsters/the-black-cat/artwork.png',
  },
  {
    id: 'the-council',
    name: 'The Council',
    level: 10,
    goldBounty: 15,
    stats: {
      maxHealth: 25,
      attack: 10,
      defense: 10,
    },
    artwork: '/monsters/the-council/artwork.png',
  },
  {
    id: 'troll',
    name: 'Troll',
    level: 6,
    goldBounty: 8,
    stats: {
      maxHealth: 18,
      attack: 6,
      defense: 5,
    },
    artwork: '/monsters/troll/artwork.png',
  },
  {
    id: 'watcher-from-the-deep',
    name: 'Watcher from the Deep',
    level: 8,
    goldBounty: 11,
    stats: {
      maxHealth: 17,
      attack: 7,
      defense: 7,
    },
    artwork: '/monsters/watcher-from-the-deep/artwork.png',
  },
  {
    id: 'zombie-hoard',
    name: 'Zombie Hoard',
    level: 4,
    goldBounty: 5,
    stats: {
      maxHealth: 10,
      attack: 3,
      defense: 2,
    },
    artwork: '/monsters/zombie-hoard/artwork.png',
  },
]
