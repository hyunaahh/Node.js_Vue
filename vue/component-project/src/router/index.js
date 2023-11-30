import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'; //component 담고 경로


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/dataBinding',
    name: 'dataBinding',
    component : DataBinding //import에서 선언한거 쓰면됨
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
