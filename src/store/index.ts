import Vue from 'vue';
import Vuex from 'vuex';
import globalModule from './modules/global/globalModule';
import authModule from './modules/auth/authModule';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    globalModule: globalModule,
    authModule,
  }
})

export default store