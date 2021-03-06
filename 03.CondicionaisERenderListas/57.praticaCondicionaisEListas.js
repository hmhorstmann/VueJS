new Vue({
	el: '#desafio',
	data: {
		ligado: true,
		// cores: ['preto', 'branco', 'cinza'],
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
	},
	methods: {
		toggle() {
			this.ligado = !this.ligado
		}
	}
});
