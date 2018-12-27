import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

// Для того что бы подключить любую библиотеку и набор
// ее функциональности к Vue js достаточно обратиться к глобальной переменной Vue Vue.use()
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})


// render:function(h){
//  h(app)
// }
