import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/productPrice',
    name: 'ProductPrice',
    component: () => import('../views/ProductPrice.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/NonMetal.vue')
      },

      {
        path: 'metal',
        component: () => import('../views/Metal.vue')
      },
      {
        path: 'nonMetal',
        component: () => import('../views/NonMetal.vue')
      }
    ]
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/Business.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router