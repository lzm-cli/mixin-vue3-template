<template>
  <div class="home">
    <van-button @click="clickToAbout">去 About</van-button>
    <img alt="Vue logo" src="@/assets/imgs/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>{{ store.counter }}</div>
    <van-button @click="clickAdd">+</van-button>

    <van-button @click="clickLogin">登陆</van-button>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useStore } from '@/stores/pinia';
import { login } from '@/services/user';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();

const clickAdd = () => {
  // store.counter++;
  store.updateCounter();
  console.log(store);
};

const clickLogin = () => {
  console.log(123);
  login(false);
};

const clickToAbout = () => {
  router.push('/about');
};
</script>
