new Vue({
    el: '#desafio',
    data: {
        valor: '',
        conteudoAlert: 'Achtung!!',
    },
    methods: {
        exibirAlert() {
            alert(`Estou Alertando: ${this.conteudoAlert}`)
        },
        eventoKey(event) {
            this.conteudoAlert = event.target.value //??? pq nao atualiza na hora?
            this.valor = event.target.value
        },
    }
})