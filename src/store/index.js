import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

// Создаем новый элемент у с объекта VUEX
//Store это конструктор передаем в него параметры конфигурации
export default new Vuex.Store({
	//Сдесь перечисляем все модули которые есть в нашем приложении
	modules:{
		// counter :counter
		counter
	},
	state:{
		// Ниже можем описать state и здесь
		title : "Hello from store"
	},
	getters:{
		title(state){
			return state.title +"!!!"
		}
	}
})