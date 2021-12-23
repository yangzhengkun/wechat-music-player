// index.js
// 获取应用实例
const app = getApp()
const url = "http://49.234.110.108:4290/"
const singer = "姣宝"
Page({
  data: {
    item: 0,
    tab: 0,

    playlist: [
      {
        id: 1,
        title: '姣宝-你曾是少年',
        singer: singer,
        src: url + '姣宝-你曾是少年.mp3',
        coverImgUrl: '/pages/images/c1.jpg'
      },
      {
        id: 2,
        title: '姣宝-为了你',
        singer: singer,
        src: url + '姣宝-为了你.mp3',
        coverImgUrl: '/pages/images/c2.jpg'
      },
      {
        id: 3,
        title: '姣宝-独家记忆',
        singer: singer,
        src: url + '姣宝-独家记忆.mp3',
        coverImgUrl: '/pages/images/c3.jpg'
      },
      {
        id: 4,
        title: '姣宝-第一百个我',
        singer: singer,
        src: url + '姣宝-第一百个我.mp3',
        coverImgUrl: '/pages/images/c4.jpg'
      },
      {
        id: 5,
        title: '姣宝-奇妙能力歌',
        singer: singer,
        src: url + '姣宝-奇妙能力歌.mp3',
        coverImgUrl: '/pages/images/c5.jpg'
      },
      {
        id: 6,
        title: '姣宝-天黑黑',
        singer: singer,
        src: url + '姣宝-天黑黑.mp3',
        coverImgUrl: '/pages/images/c6.jpg'
      },
      {
        id: 7,
        title: '姣宝-静悄悄',
        singer: singer,
        src: url + '姣宝-静悄悄.mp3',
        coverImgUrl: '/pages/images/c7.jpg'
      },
      {
        id: 8,
        title: '姣宝-当你',
        singer: singer,
        src: url + '姣宝-当你.mp3',
        coverImgUrl: '/pages/images/c8.jpg'
      },
      {
        id: 9,
        title: '姣宝-如果只如初见',
        singer: singer,
        src: url + '姣宝-如果只如初见.mp3',
        coverImgUrl: '/pages/images/c9.jpg'
      },
      {
        id: 10,
        title: '姣宝-讲真的',
        singer: singer,
        src: url + '姣宝-讲真的.mp3',
        coverImgUrl: '/pages/images/c1.jpg'
      },
      {
        id: 11,
        title: '姣宝-我走以后',
        singer: singer,
        src: url + '姣宝-我走以后.mp3',
        coverImgUrl: '/pages/images/c2.jpg'
      },
      {
        id: 12,
        title: '姣宝-往后余生',
        singer: singer,
        src: url + '姣宝-往后余生.mp3',
        coverImgUrl: '/pages/images/c3.jpg'
      },
      {
        id: 13,
        title: '姣宝-慢慢喜欢你',
        singer: singer,
        src: url + '姣宝-慢慢喜欢你.mp3',
        coverImgUrl: '/pages/images/c4.jpg'
      },
      {
        id: 14,
        title: '姣宝-云烟成雨',
        singer: singer,
        src: url + '姣宝-云烟成雨.mp3',
        coverImgUrl: '/pages/images/c5.jpg'
      },
      {
        id: 15,
        title: '姣宝-光',
        singer: singer,
        src: url + '姣宝-光.mp3',
        coverImgUrl: '/pages/images/c6.jpg'
      },
      {
        id: 16,
        title: '姣宝-五十年以后',
        singer: singer,
        src: url + '姣宝-五十年以后.mp3',
        coverImgUrl: '/pages/images/c7.jpg'
      },
      {
        id: 17,
        title: '姣宝-喜欢',
        singer: singer,
        src: url + '姣宝-喜欢.mp3',
        coverImgUrl: '/pages/images/c8.jpg'
      },
      {
        id: 18,
        title: '姣宝-暖暖',
        singer: singer,
        src: url + '姣宝-暖暖.mp3',
        coverImgUrl: '/pages/images/c9.jpg'
      },
      {
        id: 19,
        title: '姣宝-再见只是陌生人',
        singer: singer,
        src: url + '姣宝-再见只是陌生人.mp3',
        coverImgUrl: '/pages/images/c1.jpg'
      },
      {
        id: 20,
        title: '姣宝-春风吹',
        singer: singer,
        src: url + '姣宝-春风吹.mp3',
        coverImgUrl: '/pages/images/c2.jpg'
      },
      {
        id: 21,
        title: '姣宝-童话镇',
        singer: singer,
        src: url + '姣宝-童话镇.mp3',
        coverImgUrl: '/pages/images/c3.jpg'
      },
      {
        id: 22,
        title: '姣宝-原来爱情这么伤',
        singer: singer,
        src: url + '姣宝-原来爱情这么伤.mp3',
        coverImgUrl: '/pages/images/c4.jpg'
      },
      {
        id: 23,
        title: '姣宝-白月光与朱砂痣',
        singer: singer,
        src: url + '姣宝-白月光与朱砂痣.mp3',
        coverImgUrl: '/pages/images/c5.jpg'
      }
    ],

    state: 'paused',/*播放状态码*/
    playIndex: 0,
    play: {
      currentTime: '00:00',
      duration: '00:00',
      percent: 0,
      title: '',
      singer: '',
      coverImgUrl: '/pages/images/C.jpg',
    },

  },

  /*滚动条js函数*/
  sliderChange: function (e) {
    var second = e.detail.value * this.audioCtx.duration / 100
    this.audioCtx.seek(second)
  },

  /*播放/暂停音乐js函数*/
  play: function () {
    this.audioCtx.play()
    this.setData({ state: 'running' })
  },
  pause: function () {
    this.audioCtx.pause()
    this.setData({ state: 'paused' })
  },

  audioCtx: null,

  /*播放列表键 */
  change: function (e) {
    this.setMusic(e.currentTarget.dataset.index)
    this.play()
  },

  onReady: function (index) {
    this.audioCtx = wx.createInnerAudioContext()
    var that = this
    //播放失败检测
    this.audioCtx.onError(function () {
      console.log('播放失败：' + that.audioCtx.src)
    })
    //播放结束后自动换下一曲
    this.audioCtx.onEnded(function () {
      that.next()
    })
    //自动更新播放速度
    this.audioCtx.onPlay(function () { })
    this.audioCtx.onTimeUpdate(function () {
      that.setData({
        'play.duration': formatTime(that.audioCtx.duration),
        'play.currentTime': formatTime(that.audioCtx.currentTime),
        'play.percent': that.audioCtx.currentTime / that.audioCtx.duration * 100
      })
    })
    //默认选择第一曲
    this.setMusic(0)
    //格式化时间
    function formatTime(time) {
      var minute = Math.floor(time / 60) % 60;
      var second = Math.floor(time) % 60;
      return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)
    }
  },

  setMusic: function (index) {
    var music = this.data.playlist[index]
    this.audioCtx.src = music.src
    this.setData({
      playIndex: index,
      'play.title': music.title,
      'play.singer': music.singer,
      'play.coverImgUrl': music.coverImgUrl,
      'play.currentTime': '00:00',
      'play.duration': '00:00',
      'play.percent': 0
    })
  },

  next: function () {
    var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
    this.setMusic(index)
    if (this.data.state === 'running') {
      this.play()
    }
  },

  changeItem: function (e) {
    this.setData({
      item: e.target.dataset.item
    })
  },

  changePage: function (e) {
    this.setData({
      item: e.target.dataset.page
    })
  },

  changeTab: function (e) {
    this.setData({
      tab: e.detail.current
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
