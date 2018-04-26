<template>
  <div id="exo-7-panel" class="panel bg-light container mt-5">
                <div class="row pt-3 mb-4">
                    <div class="col-10">
                        <input type="text" class="input1 rounded" v-model="value" placeholder="enter a task..">
                    </div>
                    <div class="col-2">
                        <button class="btn btn-success text-white btnok" @click.prevent="ajouter">OK</button>
                    </div>
                </div>
                <div class="row pb-3 d-flex justify-content-around filtres">
                    <button class="btn btn-info active" data-infor="all">ALL</button>
                    <button class="btn btn-info" data-infor="todo">TO DO</button>
                    <button class="btn btn-info" data-infor="done">DONE</button>
                </div>
                <div class="divs">
                    <div id="bouton-all" class="div ALL active">
                        <ul class="liste list-group bg-light">
                          <exo7Comp :texte="element" v-for="(element,index) in maList" :key="index"> </exo7Comp>
                            <!-- <li class="list-group-item">
                        <div class="float-right">
                            <i class="fas fa-check"></i>
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </li> -->
                        </ul>
                    </div>
                    <div id="bouton-todo" class="div TO DO">

                    </div>
                    <div id="bouton-done" class="div DONE">

                    </div>
                </div>
            </div>
</template>

<script>
import exo7Comp from "../components/exo7Comp";

export default {
  components: {
    exo7Comp
  },
  data() {
    return {
      value: "",
      maList: [],
      num: 0
    };
  },
  methods: {
    ajouter() {
      this.maList.push(this.value);
      num++;
      this.newText = this.value;
      this.value = "";
    }
  }
};
</script>

<style lang="scss" scoped>
#exo-7-panel {
  width: 491px;
  height: 380px;
  border-radius: 5%;

  .input1 {
    width: 300px;
    height: 37px;
  }

  .liste {
    li {
      list-style: none;
      background-color: white;
      padding: 7px;
      border-radius: 12px;
      margin-bottom: 17px;
    }
    svg {
      path:hover {
        color: #ff00ff;
      }
    }
    svg {
      path {
        color: #808080;
        border-bottom-right-radius: 10px;
        float: right;
      }
    }
  }
  // transition-property: font-size
  // transition-duration: 4s
} // transition-delay: 2s
.buttons {
  float: right;
  button {
    border-radius: 18px;
  }
}
#listComp {
  li {
    .buttons {
      .complete {
        background-color: #ff00ff;
        opacity: 0.5;
        svg {
          path {
            color: white;
            border-bottom-right-radius: 10px;
            float: right;
          }
        }
      }
    }
  }
}

.div {
  display: none;
  &.active {
    display: block;
  }
}
</style>
