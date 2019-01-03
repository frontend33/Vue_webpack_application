<template>
  <h2>Second Counter {{counter}}</h2>
  </template>
<script>
export default {
 computed:{
 	counter(){
 		// Обращаемся к стору function getters 
 		return this.$store.getters.computedCounter
 	}
 }
}

</script>
<style scoped>
</style>
