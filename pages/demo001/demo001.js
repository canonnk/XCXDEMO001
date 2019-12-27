// pages/demo001/demo001.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    returnData: '无数据'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 发起网络请求
   */
  ,submitRequest: function() {
    console.log('submitRequest start')
    wx.request({
      url:'http://geekdata.cc:10005/api/SYS_Account/Login',
      method:'POST',
      data: {
        UserName:'wb-test',
        Password:'abc.123'
      },
      success (res) {
        let x = [];
        for(let i = 0; i <= 100000; ++i) {
          x.push(res.data);
        }
        wx.setStorage({
          key:'userinfo',
          data:x
        })
        console.log(res.data)
      }
    })
    console.log('submitRequest end')
  }

  /**
   * 读取本地数据
   */
  ,readLocalData: function( ) {
    console.log('readLocalData end')
    wx.getStorage({
      key:'userinfo',
      success(res) {
        console.log(res.data)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        console.log(res)
      }
    })
    console.log('readLocalData end')
  }

  /**
   * 清除本地数据
   */
  ,clearLocalData: function( ) {
    console.log('clearLocalData end')
    wx.clearStorage({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        console.log(res)
      }
    })
    console.log('clearLocalData end')
  }

  /**
   * 调整取数据
   */
  , jumt() {
    wx.navigateTo({
      url: '/pages/demo002/demo002',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})