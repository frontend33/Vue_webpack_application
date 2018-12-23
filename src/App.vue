<template>
  <div>
  <h1>Parent:{{carName}}</h1>
  <app-car
    v-bind:carName="carName"
    :carYear="carYear">

  </app-car>

  </div>
</template>


<script>
//  import Car from './Car.vue'
export default {
  name: 'app',
  data () {
    return {
     carName: `Ford from parrent`,
      carYear: 2018
    }
  }


//  ,
//  components:{
//    appCar:Car
//  }
}
</script>

<style>

</style>
