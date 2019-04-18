import util from '../utils/util';
import http from '../utils/http.js';
import cookie from '../utils/cookie.js';
import store from '../utils/store.js';
export default function auth(callback) {
	var app = store.state;
	var cook = cookie.getUserCookie();
	if (cook && cook.keeplogined && app.globalData.userInfo) {
		return typeof callback === 'function' ? callback() : '';
	}

	app.loginCallbacks.push(callback); //要回调的函数集
	var pageList = getCurrentPages();
	var pageObj = pageList[pageList.length - 1];

	login(function() {
		getUserInfo(callback)
	}, function() {
		pageObj.$vm.ismask = true
		pageObj.bindGetUserInfo = bindGetUserInfo;
	});

}
/**
 * 第一次去登录
 */
function getUserInfo() {
	var app = store.state;
	uni.getUserInfo({
		success: res => {
			// 可以将 res 发送给后台解码出 unionId
			app.globalData.userInfo = res.userInfo
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			if (app.userInfoReadyCallback) {
				app.userInfoReadyCallback(res)
			}
			sendQuery(res, function(ret) {
				app.globalData.userInfo = ret.data.data;
				for (var i in app.loginCallbacks) {
					var Callback = app.loginCallbacks[i]
					typeof Callback == 'function' ? Callback() : ''
				}
				app.loginCallbacks = [];
			});
		},
		fail: res => {
			console.log('获取用户信息失败');
		}
	})
}
/**
 * 第一次去登录
 */
function bindGetUserInfo(e) {
	var app = store.state;
	var that = this;
	var userInfo = e.detail.userInfo;
	if (!userInfo) {
		return uni.showToast({
			title: '授权失败，请稍后重试！',
			icon: 'none'
		});
	}
	uni.showLoading({
		title: '授权中~',
	})
	sendQuery(e.detail, function(ret) {
		uni.hideLoading();

		app.globalData.userInfo = ret.data.data;
		for (var i in app.loginCallbacks) {
			var Callback = app.loginCallbacks[i]
			typeof Callback == 'function' ? Callback() : ''
		}
		app.loginCallbacks = [];
		uni.showToast({
			title: '授权成功！',
			icon: 'none'
		})

		var pageList = getCurrentPages();
		var pageObj = pageList[pageList.length - 1];
		pageObj.$vm.ismask = false

		if (app.userId && !ret.data.data.is_member) {
			uni.navigateTo({
				url: '/pages/user/register/register'
			})
		} else {
			if (pageObj.route == 'pages/tabbar/tabbar-4/tabbar-4') {
				uni.reLaunch({
					url: '/pages/tabbar/tabbar-4/tabbar-4',
				});
			}
		}
	}, function(data) {
		uni.hideLoading();
		uni.showToast({
			title: data.msg,
			icon: 'none'
		})
	})
}

function sendQuery(res, success, error) {
	var app = store.state;
	var url = http.baseUrl + app.globalData.registerUrl;
	var data = {
		'rawData': res.rawData,
		'signature': res.signature,
		'encryptedData': res.encryptedData,
		'iv': res.iv
	}
	http.post(url, data, success, error);
}
/**
 * @params doauth  注册的两种方法，当用户已授权
 * @params error    注册的两种方法，当用户未授权或拒绝授权
 */
function login(doauth, notauth) {
	var pageList = getCurrentPages();
	var pageObj = pageList[pageList.length - 1];
	console.log(pageObj)
	var app = store.state;
	var url = http.baseUrl + app.globalData.loginUrl;
	uni.login({
		success: res => {
			var code = res.code;
			//用code到后台登录
			http.post(url, {
				code: code
			}, function(ret) {
				if (ret.statusCode == 200 && ret.data.code == 200) {
					//登录成功，用户无感知
					app.globalData.userInfo = ret.data.data;
					for (var i in app.loginCallbacks) {
						var Callback = app.loginCallbacks[i]
						typeof Callback == 'function' ? Callback() : ''
					}
					app.loginCallbacks = [];
					if (app.userId && !ret.data.data.is_member) { //二维码注册会员
						uni.navigateTo({
							url: '/pages/user/register/register'
						})
					}
				} else if (ret.data.code == 403) {
					//去注册
					uni.getSetting({
						success: res => {
							if (res.authSetting['scope.userInfo']) {
								// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
								typeof doauth === 'function' ? doauth() : '';
							} else {
								typeof notauth === 'function' ? notauth() : '';
								// console.log('没有授权');
							}

						},
						fail: res => {
							typeof notauth === 'function' ? notauth() : '';
							//console.log('拒绝授权');
						}
					})
				} else {
					uni.showToast({
						title: '网络开小差去了',
						icon: 'none'
					})
				}
			})
		}
	});
}
