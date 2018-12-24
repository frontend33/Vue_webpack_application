<template>
  <div>
  <h1>Parent:{{carName}}</h1>

  <app-counter></app-counter>

  <app-car
    v-bind:carName="carName"
    :carYear="carYear"
    :changeFunc="changeNameToAudi"
    @changeNameEvent="carName=$event"

  >

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
      carYear: 2018,
    }
  },
  methods:{
    changeNameToAudi(){
      this.carName=`Audi`
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
