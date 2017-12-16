<template>
  <div>
    <mt-header title="账号">
      <router-link to="/home/musicList/musicPlay" slot="right">
      <div><span class="mui-icon mui-icon-mic"></span></div>
      </router-link>
    </mt-header>
</div>
</template>
<script>
import "../../../node_modules/mui/fonts/mui-icons-extra.ttf";

export default {
  data() {
    return {
    };
  },
  methods: {
    setPreHash: function() {
    }
  }
};
</script>

<style>
.mintui-back:before {
  font-size: 24px;
}
/* .mui-icon-extra-share:before {
  font-size: 20px;
} */
.mint-header {
  background-color: #d33a31;
  font-size: 18px;
  color: white;
}

.mintui {
  font-size: 22px;
}
</style>
