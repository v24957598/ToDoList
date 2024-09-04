import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpPage.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/ToDoListPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
