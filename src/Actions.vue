<template>
  <div>
    <button class="btn btn-sucess" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
  </div>   
  </template>
<script>
export default {
 methods:{
  updateCounter(val){
    // this.$emit('counerUpdated',val)
    this.$store.state.counter += val
  }
 }
}

</script>
<style scoped>
</style>
