<template>
  <div class="hello">
    <van-button @click="click">点我提示</van-button>
  </div>
</template>

<script setup lang="ts">
import { Toast } from 'vant';

const click = () => {
  Toast.success('提示信息');
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
