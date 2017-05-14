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
      let requestObj = {}

      requestObj.appid = WXService.config.appId
      requestObj.mch_id = WXService.config.merchantId
      requestObj.device_info = 'WEB'
      requestObj.nonce_str = randomString(16)
      requestObj.body = request.body
      requestObj.out_trade_no = request.out_trade_no
      requestObj.fee_type = 'CNY'
      requestObj.total_fee = request.total_fee
      requestObj.spbill_create_ip = request.ip
      requestObj.notify_url = request.notify_url
      requestObj.trade_type = 'JSAPI'
      requestObj.product_id = request.product_id
      requestObj.limit_pay = 'no_credit'
      requestObj.openid = request.openid

      ['detail', 'attach', 'goods_tag'].forEach(key => {
        if (requestObj[key]) {
          requestObj[key] = request[key]
        }
      })

      ['time_start', 'time_expire'].forEach(key => {
        let t = request[key]
        if (t) {
          requestObj[key] = typeof t === 'string' ? t : WXService.pay.getTimeString(t)
        }
      })

      requestObj.sign_type = 'MD5'
      requestObj.sign = sign(requestObj, WXService.config.payKey)

      return payAPI.createOrder(requestObj)
    }
  }
}
