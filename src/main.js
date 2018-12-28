import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// Для регистрации базового роута
import router from './routes.js'

// Для того что бы подключить любую библиотеку и набор
// ее функциональности к Vue js достаточно обратиться к глобальной переменной Vue Vue.use()
Vue.use(VueRouter)


// Зарегистрировать роутер можно в экземпляре приложения после рендер
new Vue({
  el: '#app',
  render: h => h(App),
  // router:router
  router
})


// render:function(h){
//  h(app)
// }
