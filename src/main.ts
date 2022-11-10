import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
// import p from './stores/pinia';
import { createPinia } from 'pinia';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
// import 'vant/es/notify/style';
// import 'vant/es/image-preview/style';

import '@/assets/less/common.less';

import VConsole from 'vconsole';

import i18n from './locales';

if (process.env.NODE_ENV !== 'production') new VConsole();
createApp(App).use(createPinia()).use(router).use(i18n).mount('#app');
