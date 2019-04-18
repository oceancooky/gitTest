const COOKIE_KEY = '__cookie__';
export default {
  getCookie(key, def) {
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
  },

  setCookie(key, val, expires) {
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
  },

  removeCookie(key) {
    key = 'cookie_' + key;
    uni.removeStorageSync(key);
  },
  /**
   * 解析并后端设置cookie
   * @params cookies string
   */
  normalizeUserCookie(cookies) {
    if (!cookies) return false;
    let __cookies = this.getCookie(COOKIE_KEY) || {};
    (cookies.match(/([\w\-.]*)=([^\s=]+);/g) || []).forEach((str) => {
      if (str !== 'path=/;') {
        var item = str.split('=');
        __cookies[item[0]] = item[1];
      }
    });

    this.setCookie(COOKIE_KEY, __cookies);
    return true;
  },
  /**
   * 清除用户cookie
   */
  cleanUserCookie() {
    this.removeCookie(COOKIE_KEY);
  },
  getUserCookie(){
    return this.getCookie(COOKIE_KEY);
  }

}