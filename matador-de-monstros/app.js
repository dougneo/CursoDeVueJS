new Vue({
    el: '#jogo',
    data: {
        newGame: true,
        lifeJogador: 100,
        lifeMonstro: 100,
        
    },
    methods: {
        ataque() {
            let atkjogador = Math.round(10 * Math.random())
            let atkmonstro = Math.round(6 * Math.random())
            this.lifeJogador -= atkjogador
            this.lifeMonstro -= atkmonstro
        },
        ataqueespecial() {
            let atkjogador = Math.round(6 * Math.random())
            let atkmonstro = Math.round(10 * Math.random())
            this.lifeJogador -= atkjogador
            this.lifeMonstro -= atkmonstro
        },
        curar() {
            let curarjogador = Math.round(10 * Math.random())
            let atkmonstro = Math.round(10 * Math.random())
            this.lifeJogador += curarjogador
            this.lifeMonstro -= atkmonstro
        },
        desistir() {
            let reset = 100
            this.lifeJogador = reset
            this.lifeMonstro = reset
        }
    },
})