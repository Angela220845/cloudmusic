<template>
	<div>
		<mt-header title="多个按钮">
    <mt-button icon="back">返回</mt-button>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
	</div>

</template>
<script>
export default {
  methods:{
    handleClose:function(){
      console.log('渲染');
    }
  }
}
</script>
<style>
.mint-header{
background-color: #d33a31
}

</style>
