<template>
  <div>
    <mt-header :title="pTit">
  <router-link :to="preHa" slot="left">
  <div><span class="mui-icon mui-icon-back"></span></div>
  </router-link>
  
  <!-- <div slot="right"><span class="mui-icon-extra mui-icon-extra-share"></span></div> -->
</mt-header>

</div>
</template>
<script>
import "../../../node_modules/mui/fonts/mui-icons-extra.ttf";

export default {
  props: ["curentHash","pTit","preHa"],

  data() {
    return {
    };
  },
  methods: {
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
