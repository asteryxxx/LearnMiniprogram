// commponents/my-event/my-event.js
Component({
  // 组件声明方法要写到methods里面
  methods:{
    handclick(){
      console.log("........")
      this.triggerEvent('increment',{name:'lxx'})
      // 发出事件
    }
  }
  
})
