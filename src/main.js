import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/vendor/bootstrap.min.css';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import BootstrapVue from 'bootstrap-vue';
import VueScrollbar from 'vue2-perfect-scrollbar';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(BootstrapVue);
Vue.use(VueScrollbar);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
