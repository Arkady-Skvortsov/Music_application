import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/components/Header.vue";
import "@/components/Panel.vue";
import "@/components/Music_blog.vue";
import "font-awesome/css/font-awesome.min.css"; 

Vue.component('VueFontawesome', require('vue-fontawesome-icon/src/components/VueFontawesome.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
