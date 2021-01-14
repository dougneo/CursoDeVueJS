new Vue({
    el: '#desafio',
    data: {
        nome: 'Douglas',
        idade: 30,
        foto: 'https://picsum.photos/400'
    },
    methods: {
        x3: function() {
            var anos = this.idade
            anos *= 3
            return anos
        },
        aleatorio: function() {
            ale = Math.random()
            return ale
        }
    }
})