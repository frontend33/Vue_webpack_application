<template>
  <div>
    <h2>Forms inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>{{name}}</p>

    <!-- textarea -->
    <h2>TextArea</h2>
    <textarea v-model="textarea">{{textarea}}</textarea>
    <p>{{textarea}}</p>


<!-- Все выбранные значения находятся в изначально пустом массиве checkboxSocial-->
    <label>
      <input type="checkbox" value="instagram" v-model="checkboxSocial"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="checkboxSocial"> Vk
    </label>
    <label>
      <input type="checkbox" value="facebook" v-model="checkboxSocial"> Facebook
    </label>

    <hr>

    <ul>
      <li v-for="s in checkboxSocial">{{s}}</li>
    </ul>

    <hr>

    <!-- В радио кнопках можно выбрать одно значение поэтому в функции data
      указываем не массив а пустую строку-->
    <label>
      <input type="radio" value="instagram" v-model="radioSocial"> Instagram
    </label>

    <label>
      <input type="radio" value="vk" v-model="radioSocial"> Vk
    </label>
    <label>
      <input type="radio" value="facebook" v-model="radioSocial"> Facebook
    </label>

    <hr>
    <p>{{radioSocial}}</p>

    <!-- Селекты -->
    <select v-model="social">
      <option v-for="s in socialList">{{s}}</option>
    </select>
    <p>{{social}}</p>

    <input type="text" v-model.number="age">
    <p>{{age}}</p>

  </div>




</template>

<script>
// Используем миксин что бы не повторять код два раза

export default {
  data() {
    return{
      name: "",
      textarea: 'I am initial text',
      checkboxSocial: ["vk"],
      radioSocial: '',
      socialList:["instagram","vk","facebook"],
      social:"vk",
      age: 20
    }
  },
  watch: {
      age(val){
        console.log(val)
        console.log(typeof val)
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
