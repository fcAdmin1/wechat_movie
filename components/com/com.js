// components/com/com.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true,
  },
  properties: {
    propA: {
      type: Array,
      value: [],
      observer: function() {
        console.log('---')
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    b: '08097t8'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click() {
      var eventDetail = {
        name: 'james',
        test: [13243,2534345]
      }
      const options = {
        test: 'slkdjflskjdf'
      }
      this.triggerEvent('click_btn', eventDetail, options)
    }
  }
})
