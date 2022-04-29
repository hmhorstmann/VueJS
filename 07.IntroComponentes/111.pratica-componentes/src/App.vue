<template>
  <v-app>
    <app-menu />

    <app-toolbar />

    <v-content>
      <app-carrossel />
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import Carrossel from "./components/widgets/Carrossel.vue";

export default {
  components: {
    "app-carrossel": Carrossel,
  },
};
</script>
