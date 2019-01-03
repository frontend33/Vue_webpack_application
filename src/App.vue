<template>
  <div class="container text-center pt-5">
   <app-counter></app-counter>
   <app-actions></app-actions>  
  </div>
</template>
<script>
import Actions from './Actions.vue'
import Counter from './Counter.vue'
export default {
  // Импортируем только нужные валидатор из библиотеки (взят с api vuelidate)
  components:{
    appCounter:Counter,
    appActions:Actions
  }

}

</script>
<style scoped>
</style>
