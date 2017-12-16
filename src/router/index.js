import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Index from "../componets/index.vue";

import Home from "../componets/home/home.vue";
import MusicList from "../componets/home/musicList.vue";
import MusicPlay from "../componets/home/musicPlay.vue";

import Type from "../componets/type/type.vue";
import Find from "../componets/find/find.vue";
import My from "../componets/my/my.vue";

import Header from "../componets/common/header.vue"

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/index",
      name: "index",
      component: Index,
      redirect:"/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/type",
          name: "type",
          component: Type
        },
        {
          path: "/find",
          name: "find",
          component: Find
        },
        {
          path: "/my",
          name: "my",
          component: My
        }
      ]
    },
    {
      path: "/home/musicList",
      component: MusicList
    },
    {
      path: "/home/musicList/musicPlay",
      component: MusicPlay
    }
  ]
});

export default router;
