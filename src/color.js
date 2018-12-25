export default {
  // Метод вызывается тогда когда наша директива инициализируется
  bind(el,bindings,vnode ){
    // const arg= bindings.arg
    console.log("bind")
    // el.style.color=bindings.value
    // Передаем свои аргументы
    // el.style[arg]=bindings.value

    // Создаем свои модификаторы
    //Внутри данного объекта и хранятся те модификаторы которые передаем внутрь директивы
    const fontModifier = bindings.modifiers['font']

    if(fontModifier){
      el.style.fontSize = '30px'
    }

    const delayModifier= bindings.modifiers['delay']

    let delay=0;

    if( delayModifier){
      delay =2000
    }
    setTimeout(()=>{
        const arg= bindings.arg
        el.style[arg]=bindings.value
      }, delay);
  },
  /*
  // Жизненные циклы директив
  inserted(el,bindings,vnode){
    console.log("inserted")
  },
  // oldVnode В данном параметре хранится старая dom Node до update

  update(el,bindings,vnode,oldVnode){
    console.log("update")
  },

  componentUpdated(el,bindings,vnode,oldVnode){
    console.log("componentUpdated")
  },
  unbind(){
    console.log("unbind")
  }
*/

}
