<template>
  <div class="container">
    <div class="bar" :style="{ width: `${progress}%`, transition: isBack ? transition : '' }" />
    <div class="button" :style="{ left: `${btn}`, transition: isBack ? transition : '' }" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <span class="label">滑动确认</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const transition = 'all 0.1s';
const progress = ref(0);
const btn = ref('4px');
const isBack = ref(false);

const emit = defineEmits(['success']);

const getPercent = (e: any) => {
  const currentWidth = e.touches[0].clientX;
  const totalWidth = e.target.parentElement.clientWidth;
  if (currentWidth <= 32) btn.value = '4px';
  else if (currentWidth >= totalWidth - 32) btn.value = 'calc(100% - 58px)';
  else btn.value = `${currentWidth - 27}px`;
  return ((currentWidth / totalWidth) * 100) | 0;
};

const touchMap: any = {};
let currentTouchIdx = 0;
const handleTouchStart = (e: any) => {
  currentTouchIdx++;
  touchMap[currentTouchIdx] = false;
  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchEnd);
};

const handleTouchMove = (e: any) => {
  progress.value = getPercent(e);
};

const handleTouchEnd = () => {
  isBack.value = true;
  setTimeout(async () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
    if (progress.value >= 100) {
      if (touchMap[currentTouchIdx]) return;
      touchMap[currentTouchIdx] = true;
      emit('success');
      progress.value = 0;
      btn.value = '4px';
    } else if (progress.value != 0) {
      progress.value = 0;
      btn.value = '4px';
    }
    setTimeout(() => {
      isBack.value = false;
    }, 60);
  }, 100);
};
</script>

<style lang="less" scoped>
.container {
  background-color: #d8d8d8;
  width: 100%;
  border-radius: 16px;
  padding: 4px;
  position: relative;
  overflow: hidden;
  height: 56px;
}

.button {
  position: absolute;
  width: 54px;
  height: 48px;
  border-radius: 12px;
  padding: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .line {
    width: 2px;
    height: 14px;
    background-color: #222;
    border-radius: 2px;
    pointer-events: none;
    z-index: 1;
  }

  .line:not(:first-child) {
    margin-left: 6px;
  }
}

.bar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #222;
  z-index: inherit;
}

.label {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
</style>
