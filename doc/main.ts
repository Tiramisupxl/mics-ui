import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MICSUI from '../package/index';
import DemoBlock from './components/DemoBlock.vue';

Vue.config.productionTip = false;

Vue.use(MICSUI);
Vue.component('demo-block', DemoBlock);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
