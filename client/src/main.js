import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VModal from 'vue-js-modal'
import './styles/styles.scss';

Vue.config.productionTip = false;
Vue.use(VModal)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
