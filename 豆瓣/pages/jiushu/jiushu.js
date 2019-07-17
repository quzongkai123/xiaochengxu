// pages/jiushu/jiushu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindkanguo: function () {
    wx.navigateTo({
      url: '../kanguo/kanguo'
    })
  },
  bindxiangkan: function () {
    wx.navigateTo({
      url: '../xiangkan/xiangkan'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.request({
      url: "https://douban.uieee.com/v2/movie/top250",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.subjects)
        _this.setData({
          subjects: res.data.subjects
        })
      }
    })
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/1292052",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          subjects_xsk: res.data
        })
      }
    }),
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/1292052/comments",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          subjects_dp: res.data
        })
      }
    }),
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/1292052/reviews",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          subjects_cp: res.data
        })
      }
    })

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

  }
})