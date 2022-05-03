<template>
  <div class="citacao">
    <slot name="fonte"></slot>
    <slot></slot>
    <div class="autor">
      <slot name="autor"></slot>
    </div>
    <!-- {{ texto }} -->
  </div>
</template>

<script>
export default {
  name: "Citacao_",
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  // props: {
  //     texto: String,
  // },
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

.autor {
  float: right;
}

h1 {
  color: red;
}
</style>
