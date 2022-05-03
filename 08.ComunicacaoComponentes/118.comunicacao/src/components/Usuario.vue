<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>
      Nome é <strong>{{ nome }}</strong>
    </p>
    <p>
      Idade é <strong>{{ idadeInicial }}</strong>
    </p>
    <button @click="alterarNome">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <!-- <app-usuario-info
        :nome="nome"
        @nomeMudou="nome = $event.antigo + $event.antigo"
      /> -->
      <app-usuario-info
        :nome="nome"
        :idade="idade"
        @nomeMudou="nome = $event"
        :reiniciarFn="reinicializarNome"
      />
      <!-- <app-usuario-info /> -->
      <app-usuario-editar 
        :idade="idade" 
        @idadeMudou="idade = $event" 
      />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

// const idadeInicial = 28;

export default {
  name: "Usuario_",
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Hiago",
      idadeInicial: 28,
      idade: 28,
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Murilo";
    },
    reinicializarNome() {
      this.nome = "Hiago";
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
