<template>
  <div>
    <h1>Cars Page</h1>
      <ul>
        <!-- Что бы работала наша ссылка необходимо забайдить to
        и Добавляем динамический атрибут key для повторяющегося элемента -->
        <router-link
          tag="li"
          v-for="car in 5"
          :to="'/car/'+ car"
          :key="car"
          >
          <a>Car {{car}}</a>
        </router-link>
      </ul>
  </div>
</template>



<script>
export default{

}

</script>

<style scoped>

</style>
