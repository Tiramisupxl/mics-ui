import Vue from 'vue'
import Router from 'vue-router'
import docConfig from '../doc.config'

Vue.use(Router)

let routes = []

const menu = docConfig.menu

Object.keys(menu).forEach((item) => {
  routes = routes.concat(menu[item])
})

const addComponent = (router) => {
  router.forEach((route) => {
    if (route.groups) {
      addComponent(route.groups)
      routes = routes.concat(route.groups)
    } else {
      route.component = (r) => require.ensure([], () =>
        r(require(`../../package${route.path}/demo.md`)))
    }
  })
}

addComponent(routes)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if (top > 0) {
    const timer = setInterval(() => {
      scrollTo(0, top)
      top -= 100
      if (top <= 0) {
        scrollTo(0, 0)
        clearInterval(timer)
      }
    })
  }
  next()
})

export default router;
