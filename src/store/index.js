import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Создаем новый элемент у с объекта VUEX
//Store это конструктор передаем в него параметры конфигурации
export default new Vuex.Store({
	// объект который описывает состояние всего приложения
	state:{
		counter: 10
	}
})