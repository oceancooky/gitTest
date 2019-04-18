const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

function getCookie(key, def) {
	key = 'cookie_' + key;
	var obj = uni.getStorageSync(key);
	if (obj == undefined) {
		return def ? def : null;
	}
	var date = new Date();
	var time = date.getTime();
	if (obj.expires > time) {
		return obj.val;
	}
	uni.removeStorageSync(key);
	return def ? def : null;
}

function setCookie(key, val, expires) {
	key = 'cookie_' + key;
	if (val === undefined || val === null || val === '') return uni.removeStorageSync(key);
	expires = expires ? expires : 365 * 24 * 3600; //存储到秒
	var date = new Date();
	expires = date.getTime() + expires * 1000;
	var obj = {
		expires: expires,
		val: val
	};
	uni.setStorageSync(key, obj);
}

function removeCookie(key) {
	key = 'cookie_' + key;
	uni.removeStorageSync(key);
}

/**
 * 解析后端，设置的cookie
 */
function normalizeUserCookie(cookies = '') {
	let __cookies = [];
	(cookies.match(/([\w\-.]*)=([^\s=]+);/g) || []).forEach((str) => {
		if (str !== 'Path=/;' && str.indexOf('csrfToken=') !== 0) {
			__cookies.push(str);
		}
	});
	console.log(__cookies)
};


/*获取当前页url*/
function getCurrentPageUrl() {
	var pages = getCurrentPages() //获取加载的页面
	var currentPage = pages[pages.length - 1] //获取当前页面的对象
	var url = currentPage.route //当前页面url
	return url
}

function checkForm(rules, form_data) {
	for (var field in rules) {
		var tmp = rules[field];
		if (!tmp) continue;
		if (tmp.required && tmp.required.rule) {
			if (!form_data[field]) {
				uni.showToast({
					title: tmp.required.msg,
					icon: 'none'
				})
				return false
			}
		}
		if (tmp.regExp && tmp.regExp.rule) {
			var rule = new RegExp(tmp.regExp.rule);
			if (!rule.test(form_data[field])) {
				uni.showToast({
					title: tmp.regExp.msg,
					icon: 'none'
				})
				return false

			}
		}
	}
	return true;
}

/**
 * @param num 手机号码
 * @param str 格式 ‘3-3-4’ =>'400-666-8888' |‘3 3 4’ =>'400 666 8888' |‘3-4-3’=> '400-6666-888'
 * @return renum string
 */
function formatmobile(num, str) {
	var renum = ""; //函数返回对象
	var arr = new Array();
	var i, m = 0,
		n;
	if (str.indexOf('-') > -1) {
		arr = str.split("-");
		for (i = 0; i < arr.length; i++) {
			n = m + Number(arr[i]);
			renum += num.substring(m, n);
			if (i < arr.length - 1) renum += "-";
			m = n;
		}
	} else {
		arr = str.split(" ");
		for (i = 0; i < arr.length; i++) {
			n = m + Number(arr[i]);
			renum += num.substring(m, n);
			if (i < arr.length - 1) renum += " ";
			m = n;
		}
	}
	return renum;
}

function trim(str) { //删除左右两端的空格
	return str.replace(/(^\s*)|(\s*$)/g, ""); //过滤首尾空格为空
}

//发起授权
function isAuthorize(authority, success) {
	var _this = this;
	uni.getSetting({
		success: (res) => {
			if (res.authSetting[authority] != undefined && res.authSetting[authority] !=
				true) {
				//未授权
				uni.showModal({
					title: '请求授权',
					content: '需要保存图片或视频到您的相册',
					success: function(res) {
						if (res.cancel) {
							//取消授权
							uni.showToast({
								title: '拒绝授权',
								icon: 'none',
								duration: 1000
							})
						} else if (res.confirm) {
							//确定授权，通过uni.openSetting发起授权请求
							uni.openSetting({
								success: function(res) {
									if (res.authSetting[authority] == true) {
										uni.showToast({
											title: '授权成功,请重新点击保存',
											icon: 'none',
											duration: 1000
										})
									} else {
										uni.showToast({
											title: '授权失败',
											icon: 'none',
											duration: 1000
										})
									}
								}
							})
						}
					}
				})
			} else {
				typeof success === 'function' ? success(res) : ''
			}
		}
	})
}

module.exports = {
	formatTime: formatTime,
	getCookie: getCookie,
	setCookie: setCookie,
	removeCookie: removeCookie,
	getCurrentPageUrl: getCurrentPageUrl,
	checkForm: checkForm,
	normalizeUserCookie: normalizeUserCookie,
	formatmobile: formatmobile,
	trim: trim,
	isAuthorize: isAuthorize
}
