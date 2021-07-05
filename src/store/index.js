import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    utilityIcon: 'Database'
  },
  mutations: {
    setUtilityIcon (state, icon) {
      state.utilityIcon = icon;
    }
  },
  actions: {
  },
  modules: {
  }
});
