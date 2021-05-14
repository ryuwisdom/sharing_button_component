/* eslint-disable no-undef */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false;
Kakao.init('e1bde4fd26acdde1c43683b308efc611');
console.log(Kakao.init)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
