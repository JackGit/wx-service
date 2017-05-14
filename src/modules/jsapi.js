// https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html

const jsapiAPI = require('../api/jsapi')
const sign = require('../utils/string').sign

module.exports = function (WXService) {
  WXService.jsapi = {
    getTicket (accessToken) {
      return jsapiAPI.getTicket(accessToken)
    },

    sign (nonceStr, timestamp, ticket, url) {
      return sign({
        noncestr: nonceStr,
        timestamp,
        jsapi_ticket: ticket,
        url
      })
    }
  }
}
