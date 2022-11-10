// import en from './en';
import zh from './zh';
import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
const i18n = createI18n({
  fallbackLocale: 'zh',
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  locale: 'zh',
  messages: { zh },
});

export default i18n;
