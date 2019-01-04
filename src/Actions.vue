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
    // this.$store.state.counter += val
    // Используем mutations setter
    // this.$store.commit('changeCounter',val)
    // Если используем actions тогда
    this.$store.dispatch("asyncChangeCouner",{
      //передаем два параметра в диспатч
      counterValue:val,
      timeoutStore:1000
    })
    // Мы будем диспатчить новый actions и после того как actions будет выполнен можно изменять наш state
  }
 }
}

</script>
<style scoped>
</style>

