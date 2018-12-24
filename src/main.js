import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'
import Counter from './Counter.vue'
export const eventEmitter=new Vue()

//До инициализации подключаем компонент
Vue.component('app-car',Car)

Vue.component("app-counter",Counter)

new Vue({
  el: '#app',
  render: h => h(App)
})


// render:function(h){
//  h(app)
// }
