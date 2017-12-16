<template>
  <div class="wraper">
    <list-header :curentHash="toAttr" :pageName="songName"></list-header>
    <div>
    <div class="mui-card">
      <div class="mui-card-content mui-card-media">
        <img src="../../assets/images/type1.png" alt="">
        <div class="title"><p>{{info.type}}</p><p>网易云音乐</p> </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="type">
    <span>标签</span> ：
    <span class="mui-badge mui-badge-success">华语</span>
    <span class="mui-badge mui-badge-success">流行</span>
    <div>{{info.description}}</div>
    </div>
    
    <div class="music-list">歌曲列表</div>
 <ul class="mui-table-view" v-for="(item,index) in MusicList" :key="index"> 
        <li class="mui-table-view-cell">
          <router-link class="mui-navigate-right" to="/home/musicList/musicPlay">
              <span>{{item.id}}  {{item.title}}<span> - {{item.singer}}</span></span>
          </router-link>
        </li>
    </ul>
  </div>    
</div>
</template>
<script>
import ListHeader from "../common/header.vue";
export default {

  created() {
    this.getMusicList();
  },
  data() {
    return {
      MusicList: [],
      info: [],
      toAttr:'/home',
      songName:'歌曲列表'
    };
  },
  components: {
    ListHeader
  },
  methods: {
    getMusicList: function() {
      this.$axios
        .get("http://www.sosoapi.com/pass/mock/static/8635/music/play")
        .then(res => {
          if (res) {
            this.info = res.data[0];
            this.MusicList = res.data[0].data;
            // this.songName = this.MusicList[0].title
          }
        });
    }
      }
};
</script>


<style lang="css" scoped>
/* .wraper{
  padding: 0px 10px;
} */
.mui-card-media {
  color: black;
}
.title {
  float: left;
  line-height: 30px;
  margin: 20px;
}
.title span:nth-child(1) {
  display: block;
  margin-left: 5px;
}
.title p:nth-child(1) {
  font-size: 18px;
  color: black;
}
.title p:nth-child(2) {
  font-size: 16px;
}
/* .mui-card{
  margin-top: 30px;;
} */
.mui-card img {
  display: inline-block;
  float: left;
  width: 127px;
  height: 127px;
}
.type {
  font-size: 15px;
  color: #8f8f94;
}
.type div {
  margin: 5px;
}
.mui-badge,
.mui-badge-success {
  color: #666;
  border: 1px solid #ccc;
  background-color: white;
}
.music-list {
  color: #666;
  font-size: 12px;
  background-color: #eeeff0;
  margin-top: 10px;
}
.mui-navigate-right span {
  font-size: 16px;
}
.mui-navigate-right span span {
  font-size: 14px;
  color: gray;
}
</style>

