export const $set = (key: string, val: any) => {
  if (typeof val === 'object') val = JSON.stringify(val);
  localStorage.setItem(key, val);
};

export const $get = (key: string) => {
  const val = localStorage.getItem(key);
  if (!val) return;
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};

export const $sessionGet = (key: string) => {
  const val = sessionStorage.getItem(key);
  if (!val) return;
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};

export const $sessionSet = (key: string, val: any) => {
  if (typeof val === 'object') val = JSON.stringify(val);
  sessionStorage.setItem(key, val);
};
