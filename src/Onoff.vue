<template>
  <div>
   <button
    class="on"
    :class="{'active':value}"
    @click="onChange(true)"
    >On</button>
   <button
    class="off"
    :class="{'active': !value}"
    @click="onChange(false)"
   >Off</button>
  </div>

</template>

<script>

export default {
  props:['value'],
  methods:{
    onChange(newValue){
      console.log(newValue)
      // Когда хотим изменить значение компонента эмитим зарезервированное назвения событие input и передаем значения
      this.$emit('input', newValue)
    }
  }
}



</script>

<style scoped>
  button{
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    margin-right: 20px;
  }
</style>
