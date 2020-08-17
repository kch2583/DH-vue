import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { router } from "../routes/index.js";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  Vuex,
}).$mount("#app");
