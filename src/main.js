import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBSXdAvIZX5n_bj4KsqSjJf1W-_TfCntvk",
    libraries: "places",
    region: "JP",
    language: "ja",
  },
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
