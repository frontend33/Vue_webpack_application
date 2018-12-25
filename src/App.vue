<template>
  <div>
  <h1></h1>

  <app-counter></app-counter>

  <app-car carName="Mazda">
  <h2 slot="title">{{carName}}</h2>
  <p slot="name"> Lorem ipsum dolor.</p>
  </app-car>

  </div>
</template>


<script>
import Car from './Car.vue'

//  import Car from './Car.vue'
export default {
  data(){
    return{
      carName:'Ford'
    }
  },
  components:{
    appCar: Car
  }
}



</script>

<style>

</style>
