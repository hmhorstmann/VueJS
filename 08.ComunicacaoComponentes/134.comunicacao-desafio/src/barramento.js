import Vue from 'vue'

export default new Vue({
	methods: {
		setUsuarioSelecionado(usuario) {
			console.log('click', usuario)
			this.$emit('usuarioSelecionado', usuario)
		},
		onUsuarioSelecionado(callback) {
			console.log('alo?')
			this.$on('usuarioSelecionado', callback)
		}
	}
})