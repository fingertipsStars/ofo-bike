// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionText:"拍摄/相册",
    btnColor:"#f2f2f2",
    changeValue:[],
    itemValue: [{
        value: "私锁私用",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "车牌损坏",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "轮胎坏了",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "车锁坏了",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "违规乱停",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "密码不对",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "刹车坏了",
        checkbox: false,
        color: "#b9dd08"

      },
      {
        value: "其他故障",
        checkbox: false,
        color: "#b9dd08"

      }
    ],
    picUrls:[],
    inputValue:{
      number:0,
      desc:""
    }
  },



  changeBox:function(e){
    var _value = e.detail.value;
if(_value.length == 0){
  this.setData({
    btnColor:"#f2f2f2",
    changeValue:[]
  })
}else{
  this.setData({
    btnColor: "#b9dd08",
    changeValue:_value
  })
}
  },

changeNumber:function(e){
  this.setData({
    inputValue: {
      number: e.detail.value,
      desc: this.data.inputValue.desc
    }
  })
},

changeDesc:function(e){
  this.setData({
    inputValue: {
      number: this.data.inputValue.number,
      desc: e.detail.value
    }
  })
},


submit:function(e){

if(this.data.picUrls.length >0 && this.data.changeValue.length >0){
wx.request({
  url: 'https://www.easy-mock.com/mock/5b57dcd003a5844b1c942176/success',

  success:(res)=>{
    wx.showToast({
      title: '发送成功',
      icon:"success"
    })
  }
})


}else{
  wx.showModal({
    title: '请填写完整的反馈信息',
    content: '你愁啥，赶紧去填，干你啊',
    confirmText:"我怂我填",
    cancelText:"老子不填",
    success:(res)=>{
      

if(res.confirm){



}else{

  wx.navigateBack({
    delta:1
  })
}


    }
  })
}

},
  clickPhoto:function(){

    wx.chooseImage({
      success: (res) =>{
        console.log(res);
       var _picUrls = this.data.picUrls;
       var tfs = res.tempFilePaths;
       for(let temp of tfs){
         _picUrls.push(temp);
         this.setData({
           picUrls: _picUrls,
           actionText: "+"
         })
       }

      
      },
    })
  },

  deletePhoto:function(e){
      let index = e.target.dataset.index;
      let _picUrls = this.data.picUrls;
      _picUrls.splice(index,1);
      this.setData({
        picUrls:_picUrls,
       
      })

    if (_picUrls.length == 0) {
      this.setData({
        actionText:"拍摄/相册"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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