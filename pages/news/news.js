//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    newsData: null,
    categoryData: null,
    category: 'tech'
  },
  
  onLoad: function () {
    this.getNetData();
  },

  //获取数据
  getNetData: function() {
    var that = this;
    wx.request({
      url: 'https://www.apiopen.top/journalismApi',
      fail: function(res) {
        console.log('数据请求失败：', res);
      },
      success: function (res) {
        var newsData = res.data.data
        console.log('数据请求成功：', newsData);
        that.setData({
          newsData: newsData,
          categoryData: newsData.tech
        })
        // for (var key in newsData) {
        //   console.log('遍历数据：')
        // }
      },
    });
  }, 

  categoryClick: function(e) {
    var item = e.currentTarget.dataset.item
    var key = e.currentTarget.dataset.key
    var that = this
    this.setData({
      categoryData: item,
      category: key
    })
  },

  // 查看详情
  viewDetail: function(e) {
    wx.navigateTo({
      url: 'detail/detail?linkUrl=' + e.currentTarget.dataset.data.link
    })
  },

  previewImage: function(res) {
    var currentUrl = res.currentTarget.dataset.url
    var items = res.currentTarget.dataset.items
    // console.log('图片数组：', currentUrl, items)
    var array = new Array()
    for (var obj in items) {
      array.push(items[obj].url)
    }
    wx.previewImage({
      urls: array,
      current: currentUrl
    })
  }
})