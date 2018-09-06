// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 34,
    longitude: 114
  },
  bindcontroltap: function(e) {
    switch (e.controlId) {
      case 1:
        this.moveToCenter();
        break;
      case 2:

        if (this.timer) {
          wx.navigateBack({
            delta: 1
          })
        } else {
          wx.scanCode({
            success: () => {
              wx.showLoading({
                title: "正在获取密码",

              })
              wx.request({
                url: "https://www.easy-mock.com/mock/5b57dcd003a5844b1c942176/ofo-number#!method=get",
                success: (res) => {
                  console.log(res);
                  wx.hideLoading();
                  wx.redirectTo({
                    url: '../scanResult/index?password=' + res.data.data.password + '&number=' + res.data.data.number,
                    success: () => {
                      wx.showToast({
                        title: "密码获取成功",
                        duration: 1000
                      })
                    }
                  })
                }
              })
            }
          });

        }
        break;
      case 3:
        wx.navigateTo({
          url: '../warn/index',
        })
    break;
    case 4:
    wx.navigateTo({
      url: '../my/index',
    })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.timer = options.timer;


    wx.getLocation({
      success: (res) => {
        // console.log(res);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })

    wx.getSystemInfo({
      success: (res) => {

        console.log(res);
        this.setData({
          controls: [{
              id: 1,
              iconPath: "../../images/location.png",
              position: {
                width: 50,
                height: 50,
                left: 20,
                top: res.windowHeight - 80
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: "../../images/use.png",
              position: {
                width: 70,
                height: 70,
                left: res.windowWidth / 2 - 35,
                top: res.windowHeight - 100
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: "../../images/warn.png",
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 80
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: "../../images/avatar.png",
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 150
              },
              clickable: true
            },
            {
              id: 5,
              iconPath: "../../images/marker.png",
              position: {
                width: 30,
                height: 45,
                left: res.windowWidth / 2 - 15,
                top: res.windowHeight / 2 - 45
              }
            }
          ]
        })

      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  moveToCenter: function() {
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.mapctx = wx.createMapContext("ofo-map"),
      this.moveToCenter();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})