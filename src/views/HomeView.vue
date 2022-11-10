<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/imgs/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>{{store.counter}}</div>
    <van-button @click="clickAdd">+</van-button>

    <van-button @click="clickLogin">登陆</van-button>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useStore } from '@/stores/pinia';
import { login } from '@/services/user';
const store = useStore();

const clickAdd = () => {
  // store.counter++;
  store.updateCounter();
  console.log(store);
};

const clickLogin = () => {
  console.log(123);
  login(false);
};
</script>
