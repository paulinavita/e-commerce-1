import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import(/* webpackChunkName: "landing" */ './views/Landing.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "Register" */ './views/Register.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "User" */ './views/User.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/carts',
      name: 'carts',
      component: () => import(/* webpackChunkName: "Cart" */ './views/Carts.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/products',
      name: 'product',
      component: () => import(/* webpackChunkName: "productcategory" */ './views/ProductPageCategory.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/SearchResult.vue')
    },
    {
      path: '/products/:id',
      name: 'singleproduct',
      component: () => import(/* webpackChunkName: "productcategory" */ './views/SingleProduct.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
      meta: {
        requiresAuth: true,
        is_admin: true
      },
      children: [{
          path: 'add',
          name: 'add',
          component: () => import(/* webpackChunkName: "addproduct" */ './components/AddProduct.vue'),
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: () => import(/* webpackChunkName: "editproduct" */ './components/AddProduct.vue'),
        },
        {
          path: 'overview',
          name: 'overview',
          component: () => import(/* webpackChunkName: "overview" */ './components/ProductOverviewTable.vue'),
        },
        {
          path: "statistics",
          name : "statistics",
          component: () => import(/* webpackChunkName: "Stats" */ './views/Stats.vue'),
        }
      ]
    }
  ]
})
