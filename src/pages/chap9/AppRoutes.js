import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let router = new VueRouter({
    mode: 'history', //History HTML 5 API
    routes: [
      {
        path: '/vuejs-tuto/chap1',
        component: require('../../components/chap1/Hello.vue'),
        name: 'pagechap1'
      },
      {
        path: '/vuejs-tuto/chap2',
        component: require('../../components/chap2/Hello.vue'),
        name: 'pagechap2'
      },
      {
        /*
        path: '/vuejs-tuto/chap9',
        component: require('../../components/chap9/Hello.vue'),
         */
        path: '/vuejs-tuto/chap9/:id',
        component: r => require.ensure([], () => r(require('../../components/chap9/Hello.vue'))),
        name: 'pagechap9',
        props: true,
        beforeEnter: (to, from, next) => {
          console.log('>>> (beforeEnter) route pagechap9')
          next()
        }
      },
      {
        path: '*', //si on utilise une route qui n'est pas mappée, on est redirigée vers /
        redirect: '/vuejs-tuto/chap1'
      }

    ]
  }
)

router.beforeEach((to, from, next) => {
  console.log('>>> (beforeEach) Navigating from '+from.path+' to '+to.path)
  next()
})

router.afterEach((to, from) => {
  console.log('>>> (afterEach) Navigating from '+from.path+' to '+to.path)
})

export default router
