<template>

  <section class="form container bg-warning w-25 p-4">
    <h2 class="mb-5"><u><strong>Formulaire</strong></u></h2>
   <!-- champPrenom -->
   <div class="field">
     <label for="" class="mr-2">Prenom</label>
     <input type="text" v-model="user.prenom">
   </div>
    <!-- champNom -->
   <div class="field field2">
     <label for="" class="mr-2">Nom</label>
     <input type="text" v-model="user.nom">
   </div>
   <button class="btn btn-info mt-4" type="submit">Envoyer</button>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'formUser',
    props: ['user'] ,
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.field2 {
  margin-left: 19px;
}
</style>

