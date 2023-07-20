import Vue from 'vue'
import App from './App.vue'

import store from './store';

import "./style/index.css"; //在此引入

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')

