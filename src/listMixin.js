export default {
    data() {
        return {
          searchName: '',
          names:['Kostya','Fedor','Igor','Dima'],
        }
      },
      computed:{
        filterdedNames(){
          return this.names.filter(name=>{
            // Если вся конструкция != -1 , нашли строку name тогда оставляем, если нет удаляем
            return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
          })
        }
      },
  }
