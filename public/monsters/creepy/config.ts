import { defineMonster } from '../../helpers/monsters'

export default defineMonster({
  name: 'Creepy',
  level: 5,
  goldBounty: 15,
  stats: {
    maxHealth: 36,
    health: 26,
    attack: 12,
    defense: 3,
  },
})
