<template>
  <div>
    <h2>Forms inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>{{name}}</p>

    <!-- textarea -->
    <h2>TextArea</h2>
    <textarea v-model="textarea">{{textarea}}</textarea>
    <p>{{textarea}}</p>
  </div>
</template>

<script>
// Используем миксин что бы не повторять код два раза

export default {
  data() {
    return{
      name: "",
      textarea: 'I am initial text'
    }
  },

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
