import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20b83e90 = () => interopDefault(import('..\\pages\\HotComment\\index.vue' /* webpackChunkName: "pages_HotComment_index" */))
const _3b3d0434 = () => interopDefault(import('..\\pages\\HotVideo\\index.vue' /* webpackChunkName: "pages_HotVideo_index" */))
const _12822849 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _8d98e6ec = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _2ae6839c = () => interopDefault(import('..\\pages\\HotVideo\\_id.vue' /* webpackChunkName: "pages_HotVideo__id" */))
const _2f21ad1c = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */))
const _085f327c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/HotComment",
    component: _20b83e90,
    name: "HotComment"
  }, {
    path: "/HotVideo",
    component: _3b3d0434,
    name: "HotVideo"
  }, {
    path: "/profile",
    component: _12822849,
    name: "profile"
  }, {
    path: "/users",
    component: _8d98e6ec,
    name: "users"
  }, {
    path: "/HotVideo/:id",
    component: _2ae6839c,
    name: "HotVideo-id"
  }, {
    path: "/users/:id",
    component: _2f21ad1c,
    name: "users-id"
  }, {
    path: "/",
    component: _085f327c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
