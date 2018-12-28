<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-link" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
<!--           <li class="nav-item">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li> -->
          <!-- У   <router-link> есть специальный параметр
           tag="И в него передаем в качестве названия тега который хотим использовать"
          active-class="active" Для выбора активного класса
         -->
          <router-link tag="li" class="nav-link" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>

        <!-- Добавляем еще два роутера с Car 3 и Car 4 -->
          <router-link tag="li" class="nav-link" to="/car/3" active-class="active">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/car/4" active-class="active">
            <a class="nav-link">Car 4</a>
          </router-link>
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
