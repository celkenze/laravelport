<template>
    <div id="exo-2-panel" class="panel">
    <h1>Exo 2</h1>
    <p> {{message}} </p>
    <div class="pointDeMontage">
        <!-- le p créé normalement -->
        <!-- <p> Bonjour, je {{nom}} {{prenom}} et je suis une {{genre}}. </p> -->
    </div>
    <button class="btn btn-success btnseul" @click="reverse" >
    click
    </button>
    <p>Si on click sur le bouton ca va nous renvoyer le message à l'envers</p>
    <div class="bg-white border border-light">
        <h2>Input :</h2>
        <input type="checkbox" v-model="verify">
        <div :class="myClass">
            <button class="btn btn-light" @click="close" >close</button>
            <p class="bg-light" :style="{color : 'white'}"> {{message}} <br> {{question}} </p>
        </div>
    </div>
    <div class="bg-success">
        <p> {{persons}} </p>
        <p> {{ persons[0]+ persons[1] | capitalize('aze', 'aze') }} </p>
        <button class="btn btn-warning" @click="addPerson">Ajouter une personne</button>
    </div>
    </div>
   
</template>

<script>
export default {
  data() {
    return {
      message: "Salut tout le monde",
      question: "Comment allez-vous ?",
      verify: false,
      persons: ["cam", "mehdi", "adele", "salah"]
      //myClass: { "bg-success": this.verify, "bg-info": !this.verify }
    };
  },
  filters: {
    capitalize(value, prefix, suffix) {
      return prefix + value.toUpperCase() + suffix;
    }
  },
  mounted() {
    console.log(this.$el);
  },
  computed: {
    myClass() {
      return {
        "bg-success": this.verify,
        "bg-info": !this.verify
      };
    }
  },
  methods: {
    reverse() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    close() {
      this.verify = !this.verify;
    },
    addPerson() {
      this.persons.push("Camelia");
    }
  }
};

// export default {};
// var Message = Vue.extend({
//   template: "<p> Bonjour, je {{nom}} {{prenom}} et je suis une {{genre}}. </p>",
//   data() {
//     return {
//       nom: "El Kenze",
//       prenom: "Camélia",
//       genre: "fille"
//     };
//   }
// });

// new Message().$mount(".pointDeMontage");
</script>
