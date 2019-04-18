import COOKIE from '../utils/cookie.js';
export default {

  baseUrl: 'https://lthysc.com',

  /**
   * http请求
   * @param methd   string        方式 post|get
   * @param url     string        后台地址，可以带域名也可不带域名
   * @param data    object|string 请求数据
   * @paran success function      成功回调
   * @param error   function      失败回调
   */
  request(methd, url, data, success, error) {
    if (url.search(this.baseUrl) == -1) {
      url = this.baseUrl + url;
    }
    var contentType = methd.toLowerCase == 'get' ? 'application/json' : 'application/x-www-form-urlencoded';
    var cookie = COOKIE.getUserCookie();
    var cookestr = ''
    if (cookie) {
      var c = 0
      for (var i in cookie) {
        if (c !== 0) {
          cookestr += " "
        }
        cookestr += i + '=' + cookie[i];
        c++;
      }
    }

    uni.request({
      url: url,
      data: data,
      header: {
        'Content-Type': contentType,
        'Cookie': cookestr
      },
      method: methd,
      success(res) {
        var cookie = res.header['Set-Cookie'];
        if (cookie) {
          COOKIE.normalizeUserCookie(cookie);
        }
        typeof success === 'function' ? success(res) : ''
      },
      fail(e) {
        typeof error === 'function' ? error(res) : uni.showToast({
          title: '咦，网络一不小心睡着了!',
          icon: 'none'
        })
      }
    })
  },
  /**
   * http post请求
   * @param url     string        后台地址，可以带域名也可不带域名
   * @param data    object|string 请求数据
   * @paran success function      成功回调
   * @param error   function      失败回调
   */
  post(url, data, success, error) {
    return this.request('post', url, data, success, error);
  },
  /**
   * http get请求
   * @param url     string        后台地址，可以带域名也可不带域名
   * @param data    object|string 请求数据
   * @paran success function      成功回调
   * @param error   function      失败回调
   */
  get(url, data, success, error) {
    return this.request('get', url, data, success, error);
  },

}