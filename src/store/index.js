import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Создаем новый элемент у с объекта VUEX
//Store это конструктор передаем в него параметры конфигурации
export default new Vuex.Store({
	// объект который описывает состояние всего приложения
	state:{
		counter: 0
	},
	mutations:{
		changeCounter(state,payload){
			state.counter+=payload
		}
	},
	//для работы с асинхронными запросами
	actions:{
		// Можно сделать деконструкцию объекта указав сразу вытаскиваем нужный объект
		// asyncChangeCouner(context,payload){
		asyncChangeCouner({commit},payload){
			setTimeout(function() {
				// Вызываем функцию которая вызовет mutations и изменит наш state
				commit("changeCounter",payload.counterValue)
			}, payload.timeoutStore);
		}
	},
	//Позволяет изменить state и отдать на отрисовку компонентам
	getters:{
		computedCounter(state){
			return state.counter * (2+3*6)
		}
	}
})