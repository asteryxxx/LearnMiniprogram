// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemclick(event){
      const index = event.currentTarget.dataset.index;
      console.log(event)
      this.setData({
        currentindex:index
      })
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]})
    },
    increnum(num){
      this.setData({
        count:this.data.count+num
      })
    }
  }
})
