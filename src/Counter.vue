<template>
  <h1>Counter:{{counter}}</h1>
</template>

<script>
import {eventEmitter} from './main'
  export default{
    data(){
      return {
        counter: 0
      }
    },
    // Говорит о том что компонент создан , но при этом еще не заложен в dom дереве
    created(){

      eventEmitter.$on('counterUpdated',(num)=>{
        // num передал папаметр 2 что бы всегда увеличивал на 2
        this.counter+=num
      })
    }

  }
</script>
