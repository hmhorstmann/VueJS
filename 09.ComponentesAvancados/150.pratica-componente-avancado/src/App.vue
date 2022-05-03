<template>
  <div id="app">
    <span>
      <button @click="componenteRender = 'Vermelho'" class="vermelho">
        Carregar Componente Vermelho
      </button>
      <button @click="changeColor('Verde')" class="verde">
        Carregar Componente Verde
      </button>
      <button @click="changeColor('Azul')" class="azul">
        Carregar Componente Azul
      </button>
    </span>

    <component :is="componenteRender">
      <!-- <span v-if="componenteRender == 'Vazio'" style="color: black"> -->
      <span v-if="componenteRender == 'Vazio'"> Carrega um Componente! </span>
      <span v-else>
        Conteúdo do Componente <strong>{{ componenteRender }}</strong>
      </span>
    </component>
    <!-- <Vermelho>Conteúdo do Componente <strong>Vermelho</strong></Vermelho>
    <Verde />
    <Azul /> -->
  </div>
</template>

<script>
import Vermelho from "./components/Vermelho.vue";
import Verde from "./components/Verde.vue";
import Azul from "./components/Azul.vue";
import Vazio from "./components/Vazio.vue";

export default {
  name: "app",
  components: { Vermelho, Verde, Azul, Vazio },
  data() {
    return {
      componenteRender: "Vazio",
    };
  },
  methods: {
    changeColor(cor) {
      this.componenteRender = cor;
      // if (cor === 'vermelho') {
      //   this.componenteRender = 'Vermelho'
      // } else if (cor === 'verde') {
      //   this.componenteRender = 'Verde'
      // } else {
      //   this.componenteRender = 'Azeul'
      // }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 10px;
  color: #fff;
  font-size: 1.3rem;
}

.caixa {
  color: #fff;
  font-size: 1.8rem;
  padding: 25px;
  margin: 10px 0px;
}

.vermelho {
  border: 2px solid red;
  background-color: #f54235;
}

.verde {
  border: 2px solid green;
  background-color: #49b057;
}

.azul {
  border: 2px solid blue;
  background-color: #2594f0;
}

.vazio {
  border: 2px solid gray;
  background-color: lightgray;
}
</style>
