
import PageHome from '@/pages/PageHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: PageHome
  }]
});

export default router
