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
      <li v-for="name of filtededNames ">{{name}}</li>
    </ul>

  </div>
</template>

<script>

export default {
  data() {
    return{
      title: "Величие Vue",
      names:['Kostya','Fedor','Igor','Dima'],
      searchName: ''
    }
  },
  computed:{
    filtededNames(){
      return this.names.filter(name=>{
        // Если вся конструкция != -1 , нашли строку name тогда оставляем, если нет удаляем
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
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
