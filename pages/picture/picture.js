// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getData: function() {
    var that = this
    wx.request({
      url: 'https://www.apiopen.top/meituApi',
      success: function(res) {
        console.log('美图数据：', res.data.data)
        var array = res.data.data
        var newArray = new Array()
        for(var i=0; i<array.length; i++) {
          newArray.push(array[i].url)
        }
        that.setData({
          dataArray: newArray
        })
      }
    })
  },

  previewImage: function(res) {
    var url = res.currentTarget.dataset.url
    var urls = res.currentTarget.dataset.urls
    wx.previewImage({
      current: url,
      urls: urls,
    })
  }
})