import Vue from 'vue'
import VueResource from "vue-resource"
import App from './App.vue'

Vue.use(VueResource)

// Зарегистрировать роутер можно в экземпляре приложения после рендер
new Vue({
  el: '#app',
  render: h => h(App),
  // router:router
})


// render:function(h){
//  h(app)
// }
