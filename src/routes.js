import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
// Экспортируем новый экземпляр класса vueRouter
export default new VueRouter({
    routes:[
      {
        // В качестве path мы передаем строку за какой путь отвечает определенный компонент
        path: '',  //localhost:8080
        // В качестве компонента передаем что у нас является страницей Home.vue Cars.vue
        component: Home
      },
      {
        // Название домена + / название роута
        path: '/cars',  //localhost:8080/cars
        // В качестве компонента передаем что у нас является страницей Home.vue Cars.vue
        component: Cars
      },
      // Что бы сказать vue о том что у нас будет какое то динамическое свойство
      // После слэша будет динамическое свойство
      {
        path: '/car/:id',
        component: Car
      }
    ],
    // http://localhost:8080/#/cars чтобы с адреса убрать hash #
    // Браузер будет сохранять историю разных ссылок
    mode : 'history'
})
