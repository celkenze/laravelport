<template>
    <div id="exo-4-panel" class="panel text-center bg-secondary container">
        <h1 class="title"></h1>
        <h2 class="mb-5">
                <u>Déplacer les éléments</u>
        </h2>
        <div class="row justify-content-around">
            <div class="bg-light col-md-5 grande1 py-5">
                <div class="bg-info petite py-5" v-if="move1"></div>
        </div>
    <div class="bg-light col-md-5 grande2 py-5" v-cloak>
                        <div class="bg-info petite py-5" v-if="!move1"> {{compte}} </div>
                    </div>
        </div>
        <div class="container d-flex flex-column">
            <button class=" btn btn-warning candm " @click.prevent="move">Click&Move <br> <span> {{compte}} click</span></button>
            <exo4Comp :timerObj="time" class="mx-auto">{{time}}</exo4Comp>
            <timer></timer>
            <!-- <button id="nbrclic" class="btn btn-success" @click.prevent="compte++" >{{compte}} click!</button> -->
        </div>   
    </div>
</template>


<script>
import exo4Comp from "../components/exo4Comp";
import timer from "../components/timer";

export default {
  components: { exo4Comp, timer },
  data() {
    return {
      move1: true,
      compte: 0,
      time: ""
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
