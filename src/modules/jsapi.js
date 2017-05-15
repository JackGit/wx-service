// https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html

const jsapiAPI = require('../api/jsapi')
const stringUtils = require('../utils/string')

module.exports = function (WXService) {
  WXService.jsapi = {
    getTicket (accessToken) {
      return jsapiAPI.getTicket(accessToken)
    },

    sign (ticket, url) {
      let obj = {
        nonceStr: stringUtils.random(16),
        timestamp: Date.now(),
        jsapi_ticket: ticket,
        url
      }
      obj.signature = stringUtils.sign(obj, { signType: 'sha1'})
      return obj
    }
  }
}
