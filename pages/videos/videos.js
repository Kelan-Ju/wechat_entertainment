// pages/videos/videos.js
Page({
  // "usingComponents": {
  //   "waterfallView": "../../component/waterfallView/waterfallView" 
  // },
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
    this.getData()
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
      url: 'https://api.apiopen.top/todayVideo',
      success: function(res) {
        console.log('视频数据请求成功：',res.data.result)
        var array = res.data.result
        // 将空数据清除
        for(var i=0; i<array.length; i++) {
          if(array[i].data.content == null) {
            array.splice(i, 1)
          }
        }
        that.setData({
          dataArray: array
        })
      }
    })
  },

  play: function(res) {
    // console.log('播放连接：', res.currentTarget.dataset)
    var playUrl = res.currentTarget.dataset.playUrl
    var photoUrls = res.currentTarget.dataset.photoUrls
    if (playUrl != null) {
      var title = res.currentTarget.dataset.title
      var description = res.currentTarget.dataset.description
      wx.navigateTo({
        url: 'playingView/playingView?playUrl=' + encodeURIComponent(playUrl) + '&title=' + title + '&description=' + description
      })
    } else {
      wx.previewImage({
        current: photoUrls[0],
        urls: photoUrls
      })
    }
  },

  // fillData: function(isPull, goods) {
  //   let view = this.selectComponent('#waterfallView');
  //   view.fillData(isPull, goods);
  // },
})