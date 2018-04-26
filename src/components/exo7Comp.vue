<template>
  <li class="list-group-item">
    {{texte}}
    <div class="float-right icone">
        <i class="fas fa-check"></i>
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
    </div>
  </li>
</template>

<script lang="js">
  export default  {
    name: 'exo-7-comp',
    props: ['texte'],
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

<style scoped lang="scss">
i {
  color: #ff00ff;
  margin-right: 7px;
}
</style>
