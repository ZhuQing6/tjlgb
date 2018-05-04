// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/js/jquery.min.js'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.min.js'
// import './assets/js/training.js'
import './assets/css/home.css'

// import './assets/js/training.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
