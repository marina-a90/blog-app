import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from "vue-router";

import AppPosts from "./components/AppPosts";
import AppSinglePost from "./components/AppSinglePost";
import AppAddPost from "./components/AppAddPost";

Vue.use(VueRouter);

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

const routes = [
  { path: "/posts", component: AppPosts },
  { path: "/posts/:id", component: AppSinglePost },
  { path: "/addPost", component: AppAddPost },
  { path: "/edit/:id", component: AppAddPost }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
