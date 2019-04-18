import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		globalData: {
			userInfo: null,
			url: "",
			settingData: {}, //order_limit
			dbUserInfo: null, //数据库中的用户信息,
			phoneNumber: '',
			loginUrl: '/api/miniprogram.user/login', //小程序登录api
			registerUrl: '/api/miniprogram.user/register', //注册api
		},
		loginCallbacks: [], //登录过程中要调用的方法集
		loginIn: false, //是否正在登录
		userId:''
	},
	mutations: {
	}
})

export default store
