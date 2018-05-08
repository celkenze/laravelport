<template>
  <div>Secondes écoulée : {{secondeEcoule}} </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      secondeEcoule: 0
    };
  },
  mounted() {
    this.$interval = setInterval(() => {
      console.log("time");
      this.secondeEcoule++;
    }, 1000);
  },
  // ca va supprimer le timer
  destroyed() {
    clearInterval(this.$interval);
  }
};
</script>
