import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import SettingsPage from '../views/SettingsPage.vue'

const routes = [
  {
    path: '/vue',
    name: 'vue',
    component: HomeView
  },
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
