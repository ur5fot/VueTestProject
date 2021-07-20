import Vue from "vue";
import Router from "vue-router";
import Cover from "./views/Cover";
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Cover
  },
  {
    path: '/Main',
    component: () => import('./views/Main')
  },
  {
    path: '/Final',
    component: () => import('./views/Final')
  },
]

export default new Router(
  {
    mode: 'history',
    routes
  }
);