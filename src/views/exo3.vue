<template>
  <div id="exo-3-panel" class="panel">
    <h2>welcome
        <span>{{valueText}}</span>
    </h2>
    <p>écriver dans l'input ci-dessous le nom de la personne qvous voulez accueillir <br>lorsque vous cliquez sur le bouton "go" le nom que voavez ajouterdans l'input sera alors mis dans
    le span du h2 et l'input sera alors vidé de toute contenAttention,interdiction de toucher à l'html
    </p>
    <form action="">
        <input type="text" v-model="value">
        <button type="submit" @click.prevent="GO">go</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "exo3",
  data() {
    return {
      valueText: "inconnu",
      value: ""
    };
  },
  methods: {
    GO() {
      this.valueText = this.value;
      this.value = "";
    }
  }
};
</script>

