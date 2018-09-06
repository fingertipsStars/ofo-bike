// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfor:{
      useUrl:"",
      nickName:"未登录"
    },
    actionText:"登录",
    btnType:"primary"
  },



login:function(){
if(this.data.actionText ==="登录"){

  wx.login({
    success:()=>{
     wx.getUserInfo({
       success:(res)=>{
         this.setData({
           userInfor:{
             useUrl:res.userInfo.avatarUrl,
             nickName: res.userInfo.nickName
           },
           actionText:"退出登录",
           btnType:"warn"
         })


         wx.setStorage({
           key: 'userInfor',
           data: {
              userInfor: {
             useUrl: res.userInfo.avatarUrl,
             nickName: res.userInfo.nickName
           },
           actionText: "退出登录",
           btnType: "warn"
           }
         })

       }
     })
    }
  })
}else{
  wx.removeStorage({
    key: 'userInfor'
  })

  this.setData({
    userInfor: {
      useUrl: "",
      nickName: "未登录"
    },
    actionText: "登录",
    btnType: "primary"
  })

}
},


  moveToWallet:function(){
wx.navigateTo({
  url: '../money/index',
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getStorage({
        key: 'userInfor',
        success: (res)=> {
          // console.log(res);
          this.setData({
            userInfor:{
              useUrl:res.userInfor.useUrl,
              nickName:res.userInfor.nickName
            },
            actionText:res.actionText,
            btnType:res.btnType
          })
        },
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