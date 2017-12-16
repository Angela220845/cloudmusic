<template>
<div>
  <list-header :curentHash="toAttr" :pageName="songName" ref="s" :pTit="preTitle" :preHa="preHash"></list-header>
  <!-- <div>{{preHash}}{{preTitle}}</div> -->
</div>
</template>
<script>
import ListHeader from "../common/header.vue";
import Bus from '../../bus.js'
export default {
  created() {
  },
  mounted() {
    console.warn(this.$refs.s.$el.innerHTML);
     Bus.$on('tellmy',(e)=>{
      this.preHash = e.curentPage;
      this.preTitle = e.title
    })

  },
  components: {
    ListHeader
  },
  data() {
    return {
      toAttr: "1",
      songName: "2",
      preHash:'',
      preTitle:'',
      

    };
  },
  methods: {

  }
};
</script>
