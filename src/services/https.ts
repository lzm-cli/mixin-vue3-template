import { $get } from '@/stores/ls';
import axios from 'axios';
import { login } from './user';

export const ServerAPI = process.env.VUE_APP_SERVER;
export const ClientID = process.env.VUE_APP_CLIENT_ID;

export const apis = axios.create({ baseURL: ServerAPI });

apis.interceptors.request.use((config) => {
  let token = $get('token');
  token && (config!.headers!.Authorization = 'Bearer ' + token);
  config.params = { ...config.params, t: Date.now() };
  return config;
});

const backOff = () => new Promise((r) => setTimeout(r, 500));
apis.interceptors.response.use(
  async (res) => {
    let { data, error } = res.data || {};
    if (error) {
      if (error.code === 401) {
        await login(false);
        return apis(res.config);
      }
      return error;
    }
    return data;
  },
  async (e) => {
    if (Number(e && e.response && e.response.status) >= 500) {
      await backOff();
      return await apis(e.config);
    } else {
      return undefined;
    }
  },
);

export const DefaultAvatar = 'https://mixin-images.zeromesh.net/arqb8uxYhtRCvkT1UkoZ9BI9MPEiIvIeMVBIIbvred-82oEXgA5DDZZNP7r0tYSJ2s9HwrlvYFeCptKpS0YdepMJF3Z-Mw-wbnKIJg=s256';
