<template>
  <div class="back-header-component">
    <header>
      <i v-if="!noIcon" class="iconfont icon-back" @click="clickBack" />

      <span class="title">{{ title }}</span>

      <slot />
    </header>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();

const clickBack = () => router.back();

defineProps({
  title: {
    type: String,
    default: t('back'),
  },
  noIcon: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="less">
.back-header-component {
  margin-bottom: 64px;

  header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    font-weight: 600;
    padding: 0 120px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      flex: 1;
    }
  }

  .icon-back {
    margin-right: 8px;
  }
}
</style>
