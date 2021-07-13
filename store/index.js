'use strict';

// nuxt server에서 사용할 쿠키파서
const cookieParser = process.server ? require('cookieparser') : undefined;

export const actions = {
  async nuxtServerInit({dispatch, commit}, {req}) {
    if (process.env.NODE_ENV) console.log('nuxt server init!!!!!!!');

    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie);

      if (parsed.accessToken) {
        commit('User/setAccessToken', parsed.accessToken);
        await dispatch('User/fetchAll');
      }

      try {

      } catch (e) {

      }
    }
  }
};
