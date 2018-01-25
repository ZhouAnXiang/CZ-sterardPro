// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { AlertPlugin, ToastPlugin} from 'vux'
import VueRouter from "vue-router"
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
