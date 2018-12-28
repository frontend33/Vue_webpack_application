<template>
  <h1>Car id {{id}}</h1>

</template>



<script>
export default{
  data(){
    return {
      // Что бы получить доступ к id обращаемся к системной переменной которая предоставляет библиотека vue-router
      // id: this.$router.currentRoute.params['id']
      id: this.$route.params['id']
    }
  },
  watch:{
    $route(toR,fromR){
      this.id=toR.params['id']
    }
  }
}

</script>

<style scoped>

</style>
