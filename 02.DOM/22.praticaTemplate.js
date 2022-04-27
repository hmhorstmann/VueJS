new Vue({
    el: '#desafio',
    data: {
        nome: 'Hiago Murilo',
        idade: 28,
        linkImage: 'https://source.unsplash.com/400x400',
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
    },
    methods: {
        random() {
            return Math.random().toFixed(2)
        }
    },
    computed: {
        idadex3() {
            return this.idade*3
        },
        getRandom() {
            return Math.random().toFixed(2)
        }
    }
})