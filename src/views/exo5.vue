<template>
   <div id="exo-5-panel" class="panel">
                <h2>Générer des éléments du DOM</h2>
                <p>Cliquer sur le bouton ci-dessous pour générer des oeufs.</p>
                <button class="add-egg btn btn-success" @click.prevent="toGenerate">Ajouter un oeuf</button>
                <div class="panier">
                    <img :src="image" alt="" v-for="(element,index) in Panier" :key="index">

                </div>
            </div>
</template>

<script>
export default {
  data() {
    return {
      Panier: [],
      image: require("../assets/egg.png")
    };
  },
  methods: {
    toGenerate() {
      this.Panier.push(this.image);
      console.log(this.Panier);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 20%;
}
</style>


