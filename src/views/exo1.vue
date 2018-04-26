<template>
  <div class="exo1">
      <h1>Exo 1</h1>
     <p> {{msg}} </p> 
  </div>
</template>

<script>
export default {
  name: "exo1",
  data() {
    return {
      msg: "Cameliaaaa"
    };
  }
};
</script>

<style scoped>
.exo1 {
  margin-top: 50px;
}
h1 {
  color: blue;
}
</style>
