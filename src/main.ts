import Vue from "vue";
import Router from "vue-router";

import "@/css/content.styl";

import App from "@/App.vue";
import About from "@/components/About.vue";
import faqContent from "@/components/faq-content";
import Home from "@/components/Home.vue";
import getListComponent from "@/components/Faq";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/faq",
    name: "faq",
    component: getListComponent("Faq", faqContent)
  }
];

const router = new Router({
  mode: "history",
  routes
});

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
