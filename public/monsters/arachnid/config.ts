import { defineMonster } from '../../helpers/monsters'

export default defineMonster({
  name: 'Arachnid',
  level: 4,
  goldBounty: 5,
  stats: {
    maxHealth: 16,
    health: 12,
    attack: 4,
    defense: 2,
  },
})
