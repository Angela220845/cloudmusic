import Vue from "vue";
import App from "./App.vue";
import Mint from "mint-ui";
import VueRouter from "vue-router";
import router from "./router/index.js";
import axios from "axios";
import "mint-ui/lib/style.css";
import "./assets/reset.css";

// -----------------------axios开始-----------------------
Vue.prototype.$axios = axios;
// -----------------------axios结束-----------------------

// ------------------------路由开始------------------------
Vue.use(VueRouter);
// ------------------------路由结束------------------------


// ------------------------MUI开始---------------------
import '../node_modules/mui/css/mui.min.css'
import '../node_modules/mui/css/icons-extra.css'
import '../node_modules/mui/fonts/mui-icons-extra.ttf'
import '../node_modules/mui/fonts/mui.ttf'

import mui from '../node_modules/mui/js/mui.min.js'

Vue.prototype.$mui = mui
// ------------------------MUI结束---------------------

// ------------------------mint UI开始---------------------
Vue.use(Mint);
import {
  Button,
  Cell,
  Tabbar,
  TabItem,
  Search,
  Swipe,
  SwipeItem,
  Navbar,
  Header
} from "mint-ui";

Vue.component(
  Button.name,
  Button,
  Cell.name,
  Cell,
  Tabbar.name,
  Tabbar,
  TabItem.name,
  TabItem,
  Search,
  Swipe.name,
  Swipe,
  SwipeItem.name,
  SwipeItem,
  Header.name,
  Header
);



new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
