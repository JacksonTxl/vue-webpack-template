<template>
  <div class="test">
    <div>这是测试背景色</div>
    <span id="hello" v-html="msg"></span>
    <img src="../../src/images/1.jpg"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: this.message
      };
    },
    props: ['message'],
    watch: {
      'message' (val) {
        this.msg = val;
      }
    }
  };
</script>
<style lang="scss" scoped>
  #hello{
    background-color: red;
  }
  .test{
    width: 100px;
    >div{
      background-color: blue;
    }
  }
</style>
