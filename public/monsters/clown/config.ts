import { defineMonster } from '../../helpers/monsters'

export default defineMonster({
  name: 'Clown',
  level: 3,
  goldBounty: 10,
  stats: {
    maxHealth: 24,
    health: 14,
    attack: 8,
    defense: 4,
  },
})
