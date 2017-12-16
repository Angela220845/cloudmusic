<template>
  <div>
    <mt-tabbar class="parent">
      <router-link to="/home">
      <mt-tab-item id="首页">首页</mt-tab-item>
      </router-link>

      <router-link to="/type">
      <mt-tab-item id="分类">分类</mt-tab-item>
      </router-link>

      <router-link to="/find">
      <mt-tab-item id="发现">发现</mt-tab-item>
      </router-link>

      <!-- <button @click="sendNum">发发</button> -->

      <router-link to="/my" ref="sendRoute">
      <mt-tab-item id="账号" ref="sendName"><span>账号</span></mt-tab-item>
      </router-link>

  </mt-tabbar>
  <!-- 底部导航 -->
<router-view></router-view>
  </div>
  
</template>
<script>
import Bus from '../bus.js'
export default {
  updated() {
    this.sendNum()
  },
  data() {
    return {
      indexRoute: this.$refs.sendRoute,
      title: "账号",//
      curentPage:'/home'
    };
  },
  methods: {
    sendNum: function() {
      Bus.$emit('tellmy',{
        title:this.title,
        curentPage:this.curentPage
        });
    }
  }
};
</script>

<style>
.mint-tabbar {
  background-color: #d33a31;
  height: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
}
.mint-swipe {
  width: 100%;
}
.mint-tabbar a {
  font-size: 16px;
  width: 25%;
}
.mint-tabbar .mint-tab-item {
  width: 100%;
  display: block;
  margin-top: 10px;
}
.mint-tabbar .mint-tab-item-label {
  font-size: 16px;
  color: black;
}
.router-link-exact-active,
.router-link-active {
  background-color: white;
}
</style>
