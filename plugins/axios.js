'use strict';
// import axios from 'axios';
export default function ({$axios, store}) {
  $axios.interceptors.response.use(function(response) {
    return response;
  }, function(error) {
    if(error.response.status === 401) {
        // redirect('/user/signin');
      store.commit('User/removeAccessToken');
    }

    return Promise.reject(error);
  });
}
