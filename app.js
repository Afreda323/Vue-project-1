new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    log: [],
  },
  methods: {
    reset() {
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack() {},
    specialAttack() {},
    heal() {},
    giveUp() {},
  },
})
