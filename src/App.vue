<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <!-- <router-link> отвечает за  -->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Тег который говорит куда нужно рендерить определенный роут отвечает   <router-vue>-->
    <router-view></router-view>
    <!-- На месте данного тега будет рендерится  тот компонент который соответствует текущему роуту
        {Который мы описали в routes.js}-->
  </div>
</template>
<script>
export default {
  // Импортируем только нужные валидатор из библиотеки (взят с api vuelidate)
  data() {
    return {

    }
  },
}

</script>
<style scoped>
</style>
