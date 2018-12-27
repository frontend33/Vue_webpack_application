<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
          >
        <!-- Если не правильный валидатор required мы выводим сообщение
        Все данные храняся в объекте плагина validations:{}
        Мы обращаемся к определенному контролу и вызываем оперделенные свойства-->
       <div class="invalid-feedback" v-if="!$v.email.required">
        Email field is required
      </div>
      <div class="invalid-feedback" v-if="!$v.email.email">
        This field should be an email
      </div>
      <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
        This email  is already exists
      </div>
      </div>


      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
          >

        <div class="invalid-feedback" v-if="!$v.password.minLength">
         Min length of password is  {{$v.password.$params.minLength.min}}. Now it is {{password.length}}
        </div>
      </div>



      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
          >

        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
         Password should match
        </div>
      </div>
      <button
        class="btn btn-success"
        type="submit"
        :disabled="$v.$invalid"
      >Submit</button>

<!-- :class"{{'is-invalid': $v.email.$error}}" Если есть ошибка мы будем добавлять
  динамический класс  is-invalid к инпуту-->
  <!-- Проверить валидна ли наша вся форма поможет :disabed="$v.$invalid"-->
  </form>
  </div>
</template>



<script>
import { required,email,minLength,sameAs} from 'vuelidate/lib/validators'
export default {
  // Импортируем только нужные валидатор из библиотеки (взят с api vuelidate)
  data() {
    return{
      email:'',
      password:'',
      confirmPassword:''
    }
  },
  methods:{
    onSubmit(){
      console.log('Email',this.email)
      console.log('Password',this.password)
    }
  },
  // Поскольку подключили доп плагин Vuelidate нам доступен новый объект
  validations:{
    email:{
      // В Es 6 если ключ и значение совпадает можно опустить значение оставив только ключ  required:required
      required,
      // email:email
      email,
      // Что бы выполнить проверку с сервера есть ли эмэйл в базе ,
      // создаем функцию которая возвращает булевого значения либо промис
      // uniqEmail:function(newEmail){
      uniqEmail:(newEmail)=>{
        // Валидация пустого значения отвечает валидатор  required
        if(newEmail ==='') return true
        return new Promise((resolve,reject)=>{
          setTimeout(() => {
            const value= newEmail!=='test@mail.ru'
            resolve(value)
          }, 1000);
        })
      }
    },
    password:{
      // minLength Функция замыкания передаем то число что будем валидировать
      minLength:minLength(6)
    },
    confirmPassword:{
      // Передаем строку которая у нас присутствует в инстансе нашей валидации
      // Благодаря валидатору sameAs можем проверять идентичность контролов
      // sameAs: sameAs('password')
      // Можем передать через стрелочную функцию (Если файлы находятся в разных файлах удобнее через vue)
      sameAs: sameAs((vue)=>{
        return vue.password
      })
    }
  }

}



</script>

<style scoped>

</style>
