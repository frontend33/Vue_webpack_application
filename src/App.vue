<template>
  <div class="container text-center pt-5">
   <app-counter></app-counter>
   <app-second-counter></app-second-counter>
   <hr>
   <app-actions></app-actions>  
  </div>
</template>
<script>
import Actions from './Actions.vue'
import Counter from './Counter.vue'
import SecondCounter from './SecondCounter.vue'
export default {
  // Импортируем только нужные валидатор из библиотеки (взят с api vuelidate)
  components:{
    appCounter:Counter,
    appActions:Actions,
    appSecondCounter:SecondCounter,
  }

}

</script>
<style scoped>
</style>
