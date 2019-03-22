import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from "vue-router";

import AppPosts from "./components/AppPosts";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [{ path: "/posts", component: AppPosts }];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
