<template>
  <div>
    <h1>Car id {{id}}</h1>
    <button class="btn btn-sm btn-default mb-2" @click="turnBack">Back</button>
    <br>
  <!--   <router-link
      class="btn  btn-info mt-2"
      tag="button"
      :to="'/car/'+ id + '/full'"
      >
      Full info
      </router-link> -->
      <!-- Описываем навигацию к какому роуту нужно обратиться
        вторым параметром params описываем какие параметры необходимо передать в URL
      Используем именованный раут и делать удобную навигацию
      -->

      <router-link
        class="btn  btn-info mt-2"
        tag="button"
        :to="{name:'carFull',params:{id:id}}"
        >
        Full info
      </router-link>
      <hr>

<!-- Для компонента car указываем место куда будем складывать дочерние роуты -->
<!-- Говорим куда будем рендерить дочерние роуты -->
      <router-view></router-view>



  </div>
</template>
<script>
export default {
  data() {
    return {
      // Что бы получить доступ к id обращаемся к системной переменной которая предоставляет библиотека vue-router
      // id: this.$router.currentRoute.params['id']
      id: this.$route.params['id']
    }
  },
  methods:{
    turnBack(){
      // Мы  push в историю браузера новую ссылку и браузер отобразится текущая ссылка и отобразится вся история
      // которая уже происходила при навигации
      this.$router.push('/cars')
    }
  },
  watch: {
    $route(toR, fromR) {
      this.id = toR.params['id']
    }
  }
}

</script>
<style scoped>
</style>
