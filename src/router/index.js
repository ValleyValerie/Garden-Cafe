import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),

    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue'),
    },
    {
      path: '/bookATable',
      name: 'bookATable',
      component: () => import('../views/BookATable.vue'),
    },
    {
      path: '/:catchAll(.*)', // Matches any route not explicitly defined
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'), // Create this component
    },
  ],
})

export default router
