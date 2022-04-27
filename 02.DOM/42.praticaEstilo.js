new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		armazenaClass3: '',
		armazenaClass4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '50px'
		},
		width: 0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let teste = 0
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 2
				this.width = `${valor}%`
				if (valor == 100) {
					clearInterval(temporizador)
				}
			}, 50)
		},
		setPerigo(event) {
			if (event.target.value == 'true') {
				this.perigo = true
			} else if (event.target.value == 'false') {
				this.perigo = false
			}
		},
	}
})
