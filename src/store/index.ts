import Vue from 'vue';
import Vuex from 'vuex';
import globalModule from './modules/global/globalModule';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    globalModule: globalModule
  }
})

export default store