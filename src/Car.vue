<template>
    <div class="car">
      <h3>Name:{{carName}} / {{reverseName}}</h3>
      <p>Year: {{carYear}}</p>
      <button @click="changeName">change Name</button>
      <button @click="changeFunc">change from parrent</button>
      <button @click="updateCounter">Update</button>
    </div>
</template>


<script>
  import {eventEmitter} from './main'
  export default {
//  Можно передать параметры в data и передать параметры из другого файла методом props
//    props:[`carName`,`carYear`],
//    Можно передать props как объект
    props:{
      carName:{
        type:String,
        required:true,
        default:`default Name`
      },
//      Либо просто указав тип
      carYear:Number,
      changeFunc: Function,
    },
    methods:{
      changeName(){
        this.carName=`Mazda`
        this.$emit(`changeNameEvent`,this.carName)
      },
      updateCounter(){
        // this.$emit("counterUpdated",this.counter+1)
        // Вторым параметром можем написать на сколько хотим увеличить
        eventEmitter.$emit('counterUpdated',2)
      }
    },
    computed:{
      reverseName(){
        return this.carName.split('').reverse().join('')
      }
    }
//    data:function()



//    data(){
//      return {
//        carYear: 2018
//      }
//    }
  }

</script>

<style>
  .car{
    border:1px solid black;
  }
  .car h3{
    margin-bottom: 5px;
  }
</style>
