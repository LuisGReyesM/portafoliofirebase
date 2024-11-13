import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

  
const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
routes : [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import('../views/ProyectosView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  }
]

})

export default router;