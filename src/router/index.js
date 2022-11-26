import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RouteDetails from '../components/RouteDetails.vue'
import ErrorComponent from '../components/ErrorComponent.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/routes/:id',
    name: 'RouteDetails',
    component: RouteDetails
  },
  {
    path: '/*',
    name: 'ErrorComponent',
    component: ErrorComponent
  },
  
]

const router = new VueRouter({
  routes
})

export default router
