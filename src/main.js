import Vue from 'vue'
import VueResource from "vue-resource"
import App from './App.vue'

Vue.use(VueResource)

// Глобальная настройка Resource Указываем базовый адрес где находится наш сервер
Vue.http.options.root='http://localhost:3000/'
Vue.http.interceptors.push(request=>{
	request.headers.set('Auth','RAND TOKEN '+ Math.random())
})


// Зарегистрировать роутер можно в экземпляре приложения после рендер
new Vue({
  el: '#app',
  render: h => h(App),
  // router:router
})


// render:function(h){
//  h(app)
// }
