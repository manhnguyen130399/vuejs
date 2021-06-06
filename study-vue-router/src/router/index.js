import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import User from '../components/user/User.vue'
import UserDetail from '../components/user/UserDetail.vue'
import UserEdit from '../components/user/UserEdit.vue'
import UserBegin from '../components/user/Userbegin.vue'
import PageHeader from '../components/layout/Header.vue'
import Notfound from '../components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: Home, 'page-header': PageHeader }
    },
    {
      path: '/user',
      name: 'User',
      component: User, children: [
        {
          path: ':id',
          name: "detail",
          component: UserDetail, beforeEnter:(from, to ,next )=>{
            console.log("action of gaurds");
            next()
          }
        },
        {
          path: ':id/edit',
          name: "edit",
          component: UserEdit
        }, {
          path: '',
          name: "start",
          component: UserBegin
        }
      ]
    }, {
      path: '/auth-redirect',
      redirect: { name: 'home' }
    }, {
      path: '/404',
      name: 'error',
      component: Notfound
    }, {
      path: '*',
      redirect: {  name: 'error'  }
    }
  ]
})
