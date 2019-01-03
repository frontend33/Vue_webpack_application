<template>
  <h2>Counter {{counter}}</h2>
  </template>
<script>
export default {
 computed:{
 	counter(){
 		// Обращаемся к стору
 		return this.$store.state.counter
 	}
 }
}

</script>
<style scoped>
</style>
