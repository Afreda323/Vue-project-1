new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    logs: [],
    playing: false,
    hasSpecial: true,
    canHeal: true,
  },
  watch: {
    playerHealth(health) {
      if (health > 100) {
        this.playerHealth = 100
      } else if (health < 0) {
        this.playerHealth = 0
      } else if (health === 0) {
        confirm('You lose!')
        this.reset()
      }
    },
    monsterHealth(health) {
      if (health < 0) {
        this.monsterHealth = 0
      } else if (health === 0) {
        confirm('You Win!')
        this.reset()
      }
    },
  },
  methods: {
    reset() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.logs = []
      this.playing = false
      this.hasSpecial = true
      this.canHeal = true
    },
    play() {
      this.playing = true
    },
    attack() {
      const damage = Math.floor(Math.random() * 20)
      this.monsterHealth = this.monsterHealth - damage
      this.log(damage, 'The monster')
      this.monsterAttack()
    },
    specialAttack() {
      const damage = Math.floor(Math.random() * 40) + 20
      this.hasSpecial = false
      this.monsterHealth = this.monsterHealth - damage
      this.log(damage, 'The monster')
      this.monsterAttack()
      setTimeout(() => {
        this.hasSpecial = true
      }, 5000)
    },
    heal() {
      const hp = Math.floor(Math.random() * -20)
      this.canHeal = false
      this.playerHealth = this.playerHealth - hp
      this.log(hp, 'HEAL! You')
      this.monsterAttack()
      setTimeout(() => {
        this.canHeal = true
      }, 5000)
    },
    giveUp() {
      this.playerHealth = 0
    },
    monsterAttack() {
      const damage = Math.floor(Math.random() * 20)
      this.playerHealth = this.playerHealth - damage
      this.log(damage, 'You')
    },
    log(damage, person) {
      this.logs.push({
        person,
        text: `${damage >= 0 ? 'lost' : 'gained'} ${Math.abs(damage)} hp`,
      })
    },
  },
})
