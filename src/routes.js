import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
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
      // У каждого из объекта routes есть поле children
      {
        path: '/car/:id',
        component: Car,
        children: [
          {
            path:'full',  //localhost:8080/car/id/full
            component:CarFull,
            name:'carFull'
          }
        ]
      }
    ],
    // http://localhost:8080/#/cars чтобы с адреса убрать hash #
    // Браузер будет сохранять историю разных ссылок
    mode : 'history',
    scrollBehavior(to,from,savePosition){
      console.log(to)
      console.log(from)
      console.log(savePosition)
      if(to.hash){
        return {
          selector:to.hash
        }
      }
      return {
        x:0,
        y:100
      }
    }
})
