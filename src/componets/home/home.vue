<template>
  <div>
    <mt-search v-model="value"></mt-search>
    <!-- 搜索框 -->
  <mt-swipe :auto="2000">
    <mt-swipe-item v-for="(item,index) in images" :key="index">
      <img :src="item" alt=""><br><p>{{item}}</p>
    </mt-swipe-item>
  </mt-swipe>
  <!-- 轮播 -->
  <!-- 卡片 -->
  <div class="cards">
      <div><div class="fm"><img src="http://ozt4jt8av.bkt.clouddn.com/FM.png" alt=""></div><p>私人FM</p></div>

      <div><div class="board"><img src="" alt=""><span>20</span></div><p>每日歌曲推荐</p></div>

      <div><div class="hot"><img src="http://ozt4jt8av.bkt.clouddn.com/ph.png" alt=""></div><p>云音乐热歌榜</p></div>

  </div> 

<div class="musicHall">
  <ul>
    <li v-for="(item,index) in musicHall" :key="index">
          <router-link to="/home/musicList">
        <img :src="item.coverImgUrl"><p>{{item.name}}</p>
          </router-link>
          
      </a>
    </li>
  </ul>
</div>

  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.handleSwiperImgs();
    this.getSwiperImg();
  },
  data() {
    return {
      selected: "121",
      value: "找你想听的歌",
      images: [],
      musicHall: []
    };
  },
  methods: {
    handleSwiperImgs: function() {
      for (let i = 1; i < 9; i++) {
        if (i == 1) {
          this.images.push("http://ozt4jt8av.bkt.clouddn.com/" + i + "df.png");
        } else if (i == 4) {
          this.images.push("http://ozt4jt8av.bkt.clouddn.com/" + i + "fd.png");
        } else {
          this.images.push("http://ozt4jt8av.bkt.clouddn.com/" + i + "ds.png");
        }
      }
    },
    getSwiperImg: function() {
      this.$axios
        .get(
          "http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=9"
        )
        .then(res => {
          if (res) {
            // console.log(res.data.playlists[1].coverImgUrl);
            this.musicHall = res.data.playlists;
          }
        });
    }
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
.mint-search {
  height: 52px;
}
.mint-searchbar {
  background-color: #d33a31;
}
.mint-search-list {
  height: 20px;
}
.mintui-search:before {
  font-size: 16px;
}
.mint-searchbar-inner {
  border-radius: 5px;
}

.mint-searchbar-core {
  text-indent: 5px;
}
.mint-searchbar-core {
  color: gray;
}
.mint-searchbar-cancel {
  color: white;
}
.mint-swipe {
  height: 138.88px;
  position: absolute;
  top: 52px;
}
.mint-swipe-items-wrap {
  height: 300px;
  width: 500px;
}
.mint-swipe-item {
  width: 100%;
}
.mint-swipe-item img {
  height: 138.88px;
}
.cards {
  height: 98.25px;
  margin-top: 140px;
  border-bottom: 1px solid #9da79b;
}
.cards > div {
  width: 33%;
  float: left;
  margin-left: 42px;
}
.cards > div p {
  font-size: 12px;
}
.fm {
  border-radius: 50%;
  border: 1px solid #d33a31;
  width: 70px;
}
.board {
  border-radius: 50%;
  border: 1px solid #d33a31;
  width: 70px;
}
.hot {
  border-radius: 50%;
  border: 1px solid #d33a31;
  width: 70px;
}
.cards div {
  width:72px;
  height: 72px;
  box-sizing: border-box;
  text-align: center;
  padding-top: 6px;
}
.cards div img {
  width: 50px;
}
.board {
  line-height: 48px;
}
.board span {
  font-size: 18px;
  color: #d33a31;
}
.title {
  display: block;
}
/* .mint-header {
  background-color: red;
} */
.musicHall {
  width: 100%;
  padding-left: 5px;
  height: 400px;
}
.musicHall li {
  float: left;
  width: 33.3%;
}
.musicHall img {
  width: 112px;
  height: 112px;
}
.musicHall li a p {
  font-size: 12px;
}
/* ------mui引入导致的样式问题------- */
.mint-searchbar-core {
  display: none;
}
</style>
