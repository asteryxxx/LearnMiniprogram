// components/my-slot/my-slot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
// 让使用者可以给组件传入数据
    title:{
      type:String
    }
  },

  /**
   * 定义组件的初始数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表，需要在methods方法里定义
   */
  methods: {
  },
  options:{//组件的配置选项
    multipleSlots:true
  },
  externalClasses:['']
  // 外界给组件传入额外的样式

  // 可以监听data数据/properties的数据改变
  ,observers:{
    count:function(newValue){
      // 这里是没有oldvalue的
      console.log(newValue)
    }
  },
// 1:组件可以监听页面的声明周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在的页面显示出来...');
    },
    hide(){
      console.log('监听组件所在的页面隐藏出来...');
    }
  },
  //2:监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('created........')
    }
  }
})
