import { $set } from '@/stores/ls';
import { MixinLogin } from 'mixin-web-sdk';
import { apis } from './https';

export const login = async (hasAsset = false) => {
  localStorage.clear();
  const { authorization_code } = await MixinLogin(process.env.VUE_APP_CLIENT_ID, { profile: true, assets: hasAsset });
  const token = await GetAuth(authorization_code);
  $set('token', token);
};

export const GetAuth = (code: string): Promise<string> => apis.get('/auth', { params: { code } });

export const GetUser = (identity_number: string): Promise<User> => apis.get('/user/' + identity_number);
