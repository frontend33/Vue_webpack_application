<template>
  <div>
   <h4>Car name: {{$route.query.name}}</h4>
   <h5>Car year:{{year}}</h5>

  <div class="scroll"></div>
  <h6 id="scroll">Hello from the bottom</h6>
  </div>
</template>
<script>

export default {
	computed:{
		year(){
			return this.$route.query.year
		}
	},
	//Можно ставить защиту роутов прямо в компоненте
	beforeRouteEnter(to,fromR,next){
		console.log("beforeRouteEnter")
		next(true)
	}
}

</script>

<style scoped>
	.scroll{
		width: 100px;
		height: 1000px;
		background: #ccc;
	}

</style>
