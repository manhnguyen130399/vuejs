import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import User from '../components/user/User.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
