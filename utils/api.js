import util from 'utils/util.js';
import auth from 'auth/auth.js';
import http from 'utils/http.js';

export const commonapi = {
	
	loginCallbacks: [], //登录过程中要调用的方法集
	loginIn: false, //是否正在登录
	// util: util,
	/**
	 * http请求
	 * @param methd   string        方式 post|get
	 * @param url     string        后台地址，可以带域名也可不带域名
	 * @param data    object|string 请求数据
	 * @paran success function      成功回调
	 * @param error   function      失败回调
	 * @param is_login int|bool     是否需要在登录前提下去请求
	 */
	http(methd, url, data, success, error, is_login) {
	  var hook = function(res) {
	    //如果授权失败,尝试去登录再来重试请求
	    if (res.statusCode == 401) {
	      auth(function() {
	        http.request(methd, url, data, success, error);
	      })
	      return;
	    }
	    typeof success == 'function' ? success(res) : '';
	  }
	  if (is_login) {
	    auth(function() {
	      http.request(methd, url, data, hook, error);
	    })
	  } else {
	    http.request(methd, url, data, hook, error);
	  }
	},
	/**
	 * http post请求
	 * @param url     string        后台地址，可以带域名也可不带域名
	 * @param data    object|string 请求数据
	 * @paran success function      成功回调
	 * @param error   function      失败回调
	 * @param is_login int|bool     是否需要在登录前提下去请求
	 */
	post(url, data, success, error, is_login) {
	  return this.http('post', url, data, success, error, is_login);
	},
	/**
	 * http get请求
	 * @param url     string        后台地址，可以带域名也可不带域名
	 * @param data    object|string 请求数据
	 * @paran success function      成功回调
	 * @param error   function      失败回调
	 * @param is_login int|bool     是否需要在登录前提下去请求
	 */
	get(url, data, success, error, is_login) {
	  return this.http('get', url, data, success, error, is_login);
	},
	
	isAuthorize(authority,success){
		util.isAuthorize(authority,success)
	},
	 
	/**
	 * 必须登录后执行
	 */
	auth(callback) {
	  auth(callback)
	}
}
