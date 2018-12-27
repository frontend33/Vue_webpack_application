<template>
  <div>
    <!-- Создаем компонент и добавляем директиву v-model со значением switched
      по умолчанию передает свойство в компонент свойство называется value в пропсах компонента Onoff.vue
    -->
      <app-onoff v-model="switched"></app-onoff>
      <div>
        <h3 v-if="switched">Component is enabled</h3>
        <h3 v-else>Component is disabled</h3>
      </div>
  </div>

</template>

<script>
// Используем миксин что бы не повторять код два раза
import Onoff from './Onoff.vue'
export default {
  data() {
    return{
      switched: false
    }
  },
  components:{
    appOnoff:Onoff
  },
  // так могу следить а объектами их значениями и т д
  watch:{
    switched(switched){
      console.log(switched)
    }
  }

}



</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }
  p{
    white-space: pre;
  }
</style>
