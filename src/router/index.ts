import ShopLayout from '@/modules/shop/layouts/ShopLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/shop',
      name: 'shop',
      component: (ShopLayout),
    },
  ],

})


export default router
