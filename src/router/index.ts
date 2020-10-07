import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  //COUNTRIES
  {
    path: '/',
    name: 'Countries List',
    
    component: () => import(/* webpackChunkName: "Countries" */ '@/presentations/countries/views/List.vue')
  },
  //Country Detail
  {
    path: '/:countrycode',
    name: 'Country Detail',
    
    component: () => import(/* webpackChunkName: "Country Detail" */ '@/presentations/countries/views/CountryDetail.vue')
  },
  // About
  {
    path: '/about',
    name: 'About Countries',
    
    component: () => import(/* webpackChunkName: "about" */ '@/presentations/countries/views/About.vue')
  },
  //NOT FOUND
  {
    path: '/*',
    name: 'NotFound',
    
    component: () => import(/* webpackChunkName: "notFond" */ '@/presentations/shared/views/NotFound.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
