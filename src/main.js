// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'bulma-checkradio/dist/css/bulma-checkradio.min.css';
import 'animate.css';
Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
