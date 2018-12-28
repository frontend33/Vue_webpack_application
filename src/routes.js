import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
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
    ],
    // http://localhost:8080/#/cars чтобы с адреса убрать hash #
    // Браузер будет сохранять историю разных ссылок
    mode : 'history'
})
