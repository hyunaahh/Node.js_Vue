import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//여기가 중요! - 라우팅등록! 경로요청시 어떤 component 나올지 
const routes = [
  {
    path: '/', //해당 component 불러오는 경로
    name: 'home', 
    component: HomeView //경로가 어떤 component를 불러올건지 => 위에 .vue 있음
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is "lazy-loaded when the route is visited."
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //import() : 자동으로 about~가 다 불러옴. 당장(처음)은 아니고 이 경로를 호출하는 순간 필요한 component 정보 불러오도록 지시
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //히스토리선택하면 자동생성된 애
  routes //라우팅목록
})

export default router
