<template>
  <div>
  <h2 v-colored:background.font="'green'">{{title}}</h2>
  <h2 v-colored:color.delay="'blue'">{{title}}</h2>

  <h2 v-font-directive>Local font directives</h2>
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
      carName:'Ford',
      title: "Величие Vue",
    }
  },
  components:{
    appCar: Car
  },
   directives:{
    // 'font-directive'
    fontDirective:{
      bind(el, bindings,vnode){
        el.style.fontSize='40px'
      }
    }
  }

}



</script>

<style>

</style>
