const payAPI = require('../api/pay')
const randomString = require('../utils/string').randomString
const md5 = require('md5')
const moment = require('moment')

function sign (requestObj, key) {
  let concatStr = Object.keys(requestObj).sort().map(key => `${key}=${requestObj[key]}`).join('&') + `&key=${key}`
  return md5(concatStr).toUpperCase()
}

module.exports = function (WXService) {
  WXService.pay = {
    getTimeString (date) {
      return moment(date).format('yyyyMMddHHmmss')
    },

    createOrder (request) {
      let requestObj = {
        appid: WXService.config.appId,
        mch_id: WXService.config.merchantId,
        device_info: 'WEB',
        nonce_str: randomString(16),
        // sign: '',
        sign_type: 'MD5',
        body: request.body,
        // detail: '',
        attach: request.attach,
        out_trade_no: request.out_trade_no,
        fee_type: 'CNY',
        total_fee: request.total_fee,
        spbill_create_ip: request.ip,
        time_start: request.time_start,
        time_expire: request.time_expire,
        goods_tag: request.goods_tag,
        notify_url: request.notify_url,
        trade_type: 'JSAPI',
        product_id: request.product_id,
        limit_pay: 'no_credit',
        openid: request.openid
      }
      requestObj.sign = sign(requestObj, WXService.config.payKey)

      return payAPI.createOrder(requestObj)
    }
  }
}
