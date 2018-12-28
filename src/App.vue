<template>
    <div class="container">
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
    return{

    }
  },
}

</script>

<style scoped>

</style>
