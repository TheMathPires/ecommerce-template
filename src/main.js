import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App'
import vuetify from '@/plugins/vuetify'
import router from '@/router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render(createElement) {
    return createElement(App);
  },
  router
}).$mount('#app')