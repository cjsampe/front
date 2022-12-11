import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RouteDetails from '../components/RouteDetails.vue'
import LevelView from '../views/LevelView.vue'
import ErrorComponent from '../components/ErrorComponent.vue'
// nuevo
import FeatureView from '../views/FeatureView.vue'



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

  //nuevo consejos
  {
    path: '/feature',
    name: 'FeatureDetails',
    component: FeatureView
  },

  //niveles
  {
    path: '/level',
    name: 'LevelList',
    component: LevelView
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
