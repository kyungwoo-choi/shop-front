'use strict';
const Cookie = process.client ? require('js-cookie') : undefined;

// TODO: 테스트용
if (process.env.NODE_ENV === 'development' && process.client) console.log(Cookie.get('accessToken'));

export const state = () => ({
  flag: false, // 로그인 여부 플래그
  accessToken: null,
  email: '',
  uid: '',
  basket: [],
  wishes: []
});

export const mutations = {
  removeAccessToken(state) {
    state.accessToken = null;
    state.flag = false;
    this.$axios.setHeader('Authorization', '');

    if (process.client) {
      Cookie.remove('accessToken');
    }
  },
  setAccessToken(state, accessToken) {
    if (!accessToken) return state.accessToken = null;

    state.flag = true;
    state.accessToken = accessToken;

    // axios에 accessToken 기본값 세팅
    this.$axios.setHeader('Authorization', state.accessToken);

    if (process.client) {
      Cookie.set('accessToken', state.accessToken);
    }


  },
  setBasket(state, data) {
    if (!data || !data.length) return state.basket = [];
    state.basket = JSON.parse(JSON.stringify(data));
  },
  setWishes(state, data) {
    if (!data || !data.length) return state.wishes = [];
    state.wishes = JSON.parse(JSON.stringify(data));
  }
};
export const getters = {};
export const actions = {
  async signup({}, data = {}) {
    if (!data.name) return alert('이름을 입력해주세요');
    if (!data.email) return alert('이메일을 입력해주세요');
    if (!data.password || !data.confirmPassword) return alert('패스워드를 입력해주세요');
    if (data.password !== data.confirmPassword) return alert('패스워드가 일치하지 않습니다');
    if (!data.agreeTermsAndConditions) return alert('이용약관은 필수 동의 항목입니다');
    if (!data.agreePrivacyPolicy) return alert('개인정보 처리방침은 필수 동의 항목입니다');
    const response = await this.$axios.post('/users/join', {
      email: data.email,
      password: data.password,
      name: data.name
    });

    return response;
  },
  async signin({commit, dispatch}, data = {}) {
    if (!data.email) return alert('이메일을 입력해주세요');
    if (!data.password) return alert('비밀번호를 입력해주세요');
    const response = await this.$axios.post('/users/signin', {
      email: data.email,
      password: data.password
    });

    if (!response.data.success || response.data.error) return alert(response.data.msg);

    commit('setAccessToken', response.data.data.accessToken);
    await dispatch('fetchAll');
  },
  async signout({commit}) {
    commit('setBasket', []);
    commit('setWishes', []);
    commit('removeAccessToken');
  },
  async fetchBasketItems({commit}) {
    try {
      const response = await this.$axios.get('/bag');
      if (!response.data.success || response.data.error) return false;

      commit('setBasket', response.data.data);
    } catch (e) {
      return false;
    }
  },
  async fetchWishItems({commit}) {
    try {
      const response = await this.$axios.get('/wishlist');
      if (!response.data.success || response.data.error) return false;

      commit('setWishes', response.data.data);
    } catch (e) {
      return false;
    }
  },
  async fetchAll({state, dispatch}) {
    if (!state.accessToken) return;

    await Promise.all([
      dispatch('fetchBasketItems'),
      dispatch('fetchWishItems'),
    ]).catch(e => {
      console.log('fetchAll error')
    })
  },
  /*async resetAll({commit}) {
    commit('setBasket', []);
    commit('setWishes', []);
    commit('removeAccessToken');
  }*/

  async addBasketItem({state, dispatch}, {product_id, option_id, quantity = 1}) {
    await this.$axios.post('/bag', {
      product_id,
      quantity,
      option_id
    });

    dispatch('fetchBasketItems')
  },

  async removeBasketItem({dispatch}, seq) {
    let {data} = await this.$axios.delete(`/bag/${seq}`);
    return data.data;
  },
};
