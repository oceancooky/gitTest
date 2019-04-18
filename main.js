import Vue from 'vue'
import App from './App'
import {commonapi} from './utils/api.js'
import store from './utils/store.js'
Vue.prototype.$store = store  
Vue.config.productionTip = false
Vue.prototype.$api = commonapi
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
