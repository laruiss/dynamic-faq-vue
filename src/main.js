import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import About from "./components/About";
import Faq from "./components/Faq";
import HelloWorld from "./components/HelloWorld";

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq
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
