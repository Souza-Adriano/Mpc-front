import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './config/router'
import Http from './mixins/Http';

Vue.mixin(Http); 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
