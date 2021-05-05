import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/vendor/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueScrollbar from 'vue2-perfect-scrollbar';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FeatherIcon from './components/FeatherIcon';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueScrollbar);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('feather-icon', FeatherIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
