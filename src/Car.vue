<template>
    <div class="car">
      <h3>Name:{{carName}}</h3>
      <p>Year: {{carYear}}</p>
    </div>
</template>


<script>
  export default {
//  Можно передать параметры в data и передать параметры из другого файла методом props
    props:[`carName`,`carYear`],
//    data:function()



//    data(){
//      return {
//        carYear: 2018
//      }
//    }
  }

</script>

<style>
  .car{
    border:1px solid black;
  }
  .car h3{
    margin-bottom: 5px;
  }
</style>
