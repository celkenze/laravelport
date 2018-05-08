<template>
  <div>
    <h1>Exo 10</h1>
    <formUser></formUser>
    <pre> {{user}} </pre>
  </div>
</template>



<script>
import formUser from "../components/formUser";

export default {
  components: {
    formUser
  },
  data() {
    return {
      user: {
        nom: "Camelia",
        prenom: "Elkenze"
      }
    };
  }
};
</script>

