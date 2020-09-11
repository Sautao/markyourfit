import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Review from '@/pages/Review/Review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'

    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/review',
      name:'review',
      component:Review
    }
  ],
  mode:'history'
})
