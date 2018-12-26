<template>
  <div>
    <h2> {{ title }} </h2>
    <h2> {{ title |  lowercase }} </h2>
    <h2> {{ title |  uppercase }} </h2>
    <!-- Можем применить несколько фильтров
    <h2> {{ title |  uppercase | lowercase }} </h2>
    -->
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filterdedNames ">{{name}}</li>
    </ul>


    <hr>

    <app-list></app-list>

  </div>
</template>

<script>
// Используем миксин что бы не повторять код два раза

import listMixin from './listMixin.js'
export default {
  data() {
    return{
      title: "Величие Vue",
    }
  },
  mixins:[listMixin],
  // Делаем фильтры
  filters:{
    lowercase(value){
      return value.toLowerCase()
    }
  }


}



</script>

<style scoped>

</style>
