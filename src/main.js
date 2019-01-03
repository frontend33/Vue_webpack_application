import Vue from 'vue'
import App from './App.vue'
import store from './store'



// Зарегистрировать роутер можно в экземпляре приложения после рендер
new Vue({
  el: '#app',
  // store:store
  store,
  render: h => h(App),
  // router:router
})


// render:function(h){
//  h(app)
// }
