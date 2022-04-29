<template>
  <div class="contador">
    <button @click="subtrair">-</button>
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <!-- 110. -->
    <!-- <div>blue</div> -->
  </div>
</template>

<script>
export default {
  name: "Contador_",
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<!-- <style> -->
<style scoped>

/* 110. */
/* div {
  border: 1px solid blue;
} */

.contador span {
  border-bottom: 1px solid #ccc;
  height: 3px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: coral;
  color: white;
  margin-left: 10px;
  outline: none;
}

/* .contador button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: coral;
  color: white;
  margin-left: 10px;
  outline: none;
} */
</style>


<!-- 108. -->
<!--
<template>
  <div class="contador">
    <button @click="subtrair">-</button>
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
  </div>
</template>

<script>
export default {
  name: "Contador_",
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style>
.contador span {
  border-bottom: 1px solid #ccc;
  height: 3px;
  padding: 5px 25px;
}
.contador button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: coral;
  color: white;
  margin-left: 10px;
  outline: none;
}
</style>
-->