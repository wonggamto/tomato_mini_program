// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:'我是一条信息',
      classNumber:2,
      visibled:false,
      array: [
        {
        id:1,
        text:1
      },
      {
        id:2,
        text:2
      },
      {
        id:3,
        text:3
      },
    ],
    str:'我是一条消息',
    arr:[1,2,3,4],
    obj:{id:1,text:'我是信息1'},
    active:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('1 onload')
      console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('2 onReady')
  },
 
  /**
   * 生命周期函数--监听页面显示
   */

  onShow: function () {
    console.log('3 onShow')
    // 改变str 的值
    this.setData({str:'我是改变后的值'})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('4 onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('5 onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('6 onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('7 onReachBottom')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('8 onShareAppMessage')

  },
  reversStr(){
    // 自定义函数,点击按钮反转字符串
    this.setData({str:this.data.str.split('').reverse().join('')})
  },
  pushArr(){
    // 自定义函数，点击按钮push一个元素,使用push 会报错，所以用 concat
    // let last = this.data.arr(this.data.arr.length-1)
    // let newItem = last +1
    // this.setData({arr:this.data.arr.push(newItem)})
    // 获取最后一项,并且加一
    let last = this.data.arr[this.data.arr.length -1] + 1
    let newArr = [last]
    this.data.arr = this.data.arr.concat(newArr)
    this.setData({arr:this.data.arr})
  },
  changeObj(){
    // 自定义函数，修改对象里面的值
    // 自己想到的方法
    // let str = '我是信息2'
    // this.setData({obj:{...this.data.obj,text:str}})
    视频中的方法
    this.setData({"obj.text":"我是信息2"})
    // 如果直接修改，会报错
    // this.obj.text = "我是信息2"
    // this.setData({obj:this.obj})
  },
  changeClass(){
    // 自定义函数，动态 改变元素的class
    this.setData({active:this.data.active = !this.data.active})
    console.log(this.data.active)
  }
})
