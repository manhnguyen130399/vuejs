// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.directive('hight-light', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'yellow'
  }

});
Vue.directive('bg-color', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value
  }

})
Vue.directive('custom', {
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;

    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)

  }

})
//filter
Vue.filter('upperCase', function (value) {
  return value.toUpperCase()

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
