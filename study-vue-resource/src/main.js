// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = "https://vue-form-13-default-rtdb.firebaseio.com"
// interceptors with req
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  // if (req.method == 'POST') {
  //   req.method = 'PUT'
  // }
  next(response => {
    response = () => {
      return {
        message: response.bodyText
      }
    }
  })

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
