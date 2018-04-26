<template>
  <div id="app">
    <div id="exo">
      <!-- <router-link class="btn" :to="element.name">{{element.name}}</router-link> -->
      <h1>Titolo Ex DOM Vue.js</h1>
      <router-link v-for="element in boutons" :key="element.name" :class="element.color" class="btn mr-3" :to="element.name">{{element.name}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boutons: [
        { name: "exo1", color: "btn-success" },
        { name: "exo2", color: "btn-light" },
        { name: "exo3", color: "btn-warning" },
        { name: "exo4", color: "btn-info" },
        { name: "exo5", color: "btn-success" },
        { name: "exo6", color: "btn-light" },
        { name: "exo7", color: "btn-warning" },
        { name: "exo8", color: "btn-info" },
        { name: "exo9", color: "btn-success" },
        { name: "exo10", color: "btn-light" }
      ]
    };
  }
};
</script>


<style lang="scss">
@import "../scss/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
