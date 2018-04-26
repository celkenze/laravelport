<template>
    <div id="exo-6-panel" class="panel align-item-center">
        <h2>Création calculatrice</h2>
        <div class="container" id="calculatrice">
            <div class="row ml-1">
                <div class="resultat text-right mr-5"></div>
                <input type="text" class="affichage text-right" v-model="value">
            </div>
            <div class="row">
                <div class="col-md-3 col-lg-3"  v-for="element in boutons" :key="element.name">
                    <button class="btn btn-success col-md-3" @click.prevent="fonction" > {{element.name}} 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      boutons: [
        { name: "0" },
        { name: "1" },
        { name: "2" },
        { name: "+" },
        { name: "3" },
        { name: "4" },
        { name: "5" },
        { name: "-" },
        { name: "6" },
        { name: "7" },
        { name: "8" },
        { name: "*" },
        { name: "9" },
        { name: "C" },
        { name: "=" },
        { name: "/" }
      ]
    };
  },
  methods: {
    ajouterCfr() {
      //   this.value += this.chiffres;
    }
  }
};
</script>


<style lang="scss" scoped>
#calculatrice {
  width: 200px;
  height: 200px;
  background-color: #eeeeee;
  border: 2px solid #cccccc;
  margin: auto;
  padding-left: 5px;
  padding-bottom: 5px;
}
// .col {
//   height: 16.66%;
//   width: 25%;
// }
#exo-6-panel {
  width: 0%;
  margin-left: 35%;
  h2 {
    white-space: nowrap;
  }
}
</style>



// operate(element){
//       console.log("operate..");
//       this.formula +=element;
//       // console.log("this.formula:");
//       // console.log(this.formula);
//     },
//     equal(){
//       console.log("equal..");
//       this.result = eval(this.formula);
//       // console.log("this.formula:");
//       // console.log(this.formula);
//     },
//     cleanResult(){
//       console.log("cleanResult..");
//       this.result = 0;
//     },
//     cleanAll(){
//       console.log("cleanAll..");
//       this.formula = "";
//       this.result = 0;
//     },
//     drop(){
//         console.log("drop..");
//         this.formula = this.formula.slice(0, -1);
//     },
//     square(){
//         console.log("square..");
//         console.log(eval(this.formula));
//         eval(this.formula)<0? this.formula = "Can not suqre the negative value" : this.result=Math.sqrt(eval(this.formula));
//    },
//    devided(){
//         console.log("devided.."); 
//         this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula="1/("+this.formula+")";this.equal();
//    },
//    toggle(){
//         console.log("toggle.."); 
//         this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula.startsWith("-")?this.formula = Math.abs(eval(this.formula)).toString(): this.formula="-("+this.formula+")";
//         this.equal();
//    }