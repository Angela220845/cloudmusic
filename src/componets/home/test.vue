<template>
    <button @click="sendParams">传递</button>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "test message"
    };
  },
  methods: {
    sendParams() {
      this.$router.push({
        path: "yourPath",
        name: "要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找",
        params: {
          name: "name",
          dataObj: this.msg
        }
        /*query: {
                name: 'name', 
                dataObj: this.msg
            }*/
      });
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style scoped></style>
----------------------------------------
// 组件b
<template>
    <h3>msg</h3>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "test message"
    };
  },
  methods: {
    sendParams() {
      this.$router.push({
        path: "yourPath",
        name: "要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找",
        params: {
          name: "name",
          dataObj: this.msg
        }
        /*query: {
                name: 'name', 
                dataObj: this.msg
            }*/
      });
    }
  }
};
</script>
<style scoped></style>