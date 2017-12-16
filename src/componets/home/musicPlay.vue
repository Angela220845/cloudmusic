<template>
  <div class="wraper">
    <div>
    <!-- <mt-header title="告白气球"> 
  <router-link to="/home/musicList" slot="left">
  <div><span class="mui-icon mui-icon-arrowleft"></span></div>
  </router-link>
  <div slot="right"><span class="mui-icon-extra mui-icon-extra-share"></span></div>
</mt-header>
<div class="singer">周杰伦</div> -->
<list-header :curentHash="toAttr" :pageName="songName"></list-header>
</div>
<!-- 唱盘 -->
<div class="big">
  <div class="mid" ref="circle" :style="{transform: 'rotate(' + de + 'deg)'}">
    <div class="inner">
      <div class="play"><span class="icon"></span></div>
    </div>
  </div>
</div>
<!-- <div class="source">
</div> -->
<div class="share">
  <span class="mui-icon-extra mui-icon-extra-heart"></span>
  <span class="mui-icon mui-icon-download"></span>
  <span class="mui-icon mui-icon-chat"></span>
  <span class="mui-icon mui-icon-more"></span>
</div>

  <video controls autoplay name="media">
  <!-- <source src="http://m10.music.126.net/20171215105204/50ecd014dcbe3f1934e2ea301eb4feca/ymusic/d523/20f4/f979/d72a7f4bb47e6ad60d8c8827d797b8d9.mp3"> -->
  </video>
<div class="musicControl">
  <span class="mui-icon mui-icon-arrowleft"></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
  </div>
</template>
<script>
import "../../../node_modules/mui/fonts/mui-icons-extra.ttf";
import ListHeader from "../common/header.vue";
export default {
  created() {
    this.circledeg();
  },
  components: {
    ListHeader
  },
  data() {
    return {
      de: 2,
      timer: null,
      flag: true,
      step: 0.1,
      toAttr:'/home/musicList',
      songName:'播放中'
    };
  },
  methods: {
    circledeg() {
      var _this = this;
      this.timer = setInterval(function() {
        _this.de = _this.de + 0.1;
      }, 10);
    },
    getSongName(){
      // 通过list页面传过来的歌曲名称，显示到页面上
    }
  }
};
</script>
<style lang="css" scoped>
.wraper {
  width: 375px;
  height: 667px;
  background-image: url(../../assets/images/play-bg.png);
}
.mintui-back:before {
  font-size: 24px;
}
.mui-icon-extra-share:before {
  font-size: 20px;
}
.mint-header {
  background-color: transparent;
  font-size: 18px;
  color: white;
}
.mintui {
  font-size: 22px;
}
.singer {
  width: inherit;
  text-align: center;
  color: white;
  font-size: 16px;
  border-bottom: 1px solid gray;
}
.big {
  width: 280px;
  height: 280px;
  border: 1px solid gray;
  box-shadow: 0px 0px 6px 0px;
  background: gray;
  border-radius: 50%;
  margin: 94px 38px;
}
.inner {
  width: 200px;
  height: 200px;
  border: 3px solid black;
  border-radius: 50%;
  background: url(../../assets/images/timg1.jpg) no-repeat;
  background-size: 194px 194px;
  background-position: center;
}
.mid {
  width: 270px;
  height: 270px;
  /* background-color: #333; */
  background: url(../../assets/images/play.png) 50%;
  border-radius: 50%;
  margin: 4px 4px;
  padding: 36px;
  box-shadow: 0px 0px 6px 0px;
  box-sizing: border-box;
}

.share {
  width: 100%;
  height: 30px;
}
.share span {
  margin-left: 56px;
  font-weight: bold;
}
.mui-icon-extra-heart:before {
  font-size: 24px;
}
.mui-icon-chat:before {
  font-size: 24px;
}
.mui-icon-download:before {
  font-size: 26px;
}
.mui-icon-more:before {
  font-size: 28px;
}

/* .share .mui-icon-extra{
  font-size: 15px
} */
.source {
  width: 100%;
  height: 30px;
  border: 1px solid green;
}
.musicControl {
  width: 100%;
  height: 45px;
  border: 1px solid black;
  padding-top: 5px;
}
.musicControl mui-icon {
  font-size: 30px;
  color: gray;
}
video {
  width: 100%;
  height: 52px;
  background-color: transparent;
}
</style>
