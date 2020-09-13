// commponents/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"我是默认的标题",
      observer:function(newV,oldV){
        // 也可以监听属性的变化
        // 哈哈哈哈 我是默认的标题
        //  嘻嘻嘻嘻 我是默认的标题
         console.log(newV,oldV)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  externalClasses:['titleclass']
})
