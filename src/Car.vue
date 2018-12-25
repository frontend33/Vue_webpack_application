<template>
  <div>
    <h2>{{carName}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, corporis!</p>
    <slot name='title'></slot>

    <hr>
    <hr>

    <slot name='name'></slot>

  </div>
</template>


<script>
  import {eventEmitter} from './main'
  export default {
    props:['carName']
  }

</script>

<style scoped>
  div{
    border:1px solid black;
    padding: 10px;
  }

  h2{
    color:blue;
  }
</style>
