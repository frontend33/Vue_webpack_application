import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'

//До инициализации подключаем компонент
Vue.component('app-car',Car)

new Vue({
  el: '#app',
  render: h => h(App)
})


// render:function(h){
//  h(app)
// }
