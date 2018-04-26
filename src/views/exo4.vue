<template>
    <div id="exo-4-panel" class="panel text-center bg-secondary container">
        <h1 class="title"></h1>
        <h2 class="mb-5">
                <u>Déplacer les éléments</u>
        </h2>
        <div class="row justify-content-around">
            <div class="bg-primary col-md-5 grande1 py-5">
                <div class="bg-danger petite py-5" v-show="move1"></div>
        </div>
    <div class="bg-primary col-md-5 grande2 py-5">
                        <div class="bg-danger petite py-5" v-show="!move1"></div>
                    </div>
        </div>
        <div class="container d-flex flex-column">
            <button class=" btn btn-warning candm " @click.prevent="move">Click&Move <br> <span> {{compte}} click</span></button>
            <!-- <button id="nbrclic" class="btn btn-success" @click.prevent="compte++" >{{compte}} click!</button> -->
        </div>   
    </div>
</template>


<script>
import compteur from "../components/exo4Comp";

export default {
  name: "exo4",
  data() {
    return {
      move1: true,
      compte: 0
    };
  },
  methods: {
    move() {
      this.move1 = !this.move1;
      this.compte++;
    }
  }
};
</script>

// <style lang="scss" scoped>
.candm {
  margin-left: 44%;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-right: 44%;
}
#nbrclic {
  margin-left: 44%;
  margin-right: 44%;
}
</style>
