import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBH8bhz8T8EqhGZkOkT_3a68_dp6cg0164",
    authDomain: "vue09-be2ec.firebaseapp.com",
    projectId: "vue09-be2ec",
    storageBucket: "vue09-be2ec.appspot.com",
    messagingSenderId: "519644357767",
    appId: "1:519644357767:web:d449de097646f0a759c422",
    measurementId: "G-EKK4CPX6LL"
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')