<template>
  <div class="container pt-2">
    <div class="form-group"> 
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>

    <div class="form-group"> 
      <label for="year">Car name</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>

    <div class="btn btn-success" @click="createCar">create Car</div>
  </div>
</template>
<script>
export default {
  // Импортируем только нужные валидатор из библиотеки (взят с api vuelidate)
  data() {
    return {
        carName :"",
        carYear: 2018
    }
  },
  methods:{
    createCar(){
      const car={
        name:this.carName,
        year:this.carYear
      }
      //если хотим отправить и сохранить на сервере используем метод post
      this.$http.post('http://localhost:3000/cars',car).then(response=>{
          // Что бы получить только нужные значения в объекте возвращаем resoponse.json
          //Для получения чистых данных с севера используем промис распарсим первый объект response c вызывом метода json
          return response.json()
      }).then(newCar=>{
        // В объекте newCar хранятся данные с сервера
        console.log(newCar)
      })
      //Метод post передает нам промис который нужно обработать

    }
  }
}

</script>
<style scoped>
</style>
