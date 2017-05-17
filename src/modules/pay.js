const payAPI = require('../api/pay')
const stringUtils = require('../utils/string')
const moment = require('moment')

function sign (requestObj, key) {
  let concatStr = stringUtils.object2KVString(requestObj) + `&key=${key}`
  return stringUtils.sign(concatStr, { signType: 'MD5' }).toUpperCase()
}

module.exports = function (WXService) {
  WXService.pay = {
    getTimeString (date) {
      return moment(date).format('yyyyMMddHHmmss')
    },

    paySign (prepayId) {
      let obj = {
        appId: WXService.config.appId,
        timeStamp: Date.now(),
        nonceStr: stringUtils.random(16),
        package: `prepay_id=${prepayId}`,
        signType: 'MD5'
      }
      obj.paySign = sign(obj, WXService.config.payKey)
      return obj
    },

    createOrder (request) {
      let requestObj = {}

      requestObj.appid = WXService.config.appId
      requestObj.mch_id = WXService.config.merchantId
      requestObj.device_info = 'WEB'
      requestObj.nonce_str = stringUtils.random(16)
      requestObj.body = request.body
      requestObj.out_trade_no = request.out_trade_no
      requestObj.fee_type = 'CNY'
      requestObj.total_fee = request.total_fee
      requestObj.spbill_create_ip = request.ip
      requestObj.notify_url = request.notify_url
      requestObj.trade_type = 'JSAPI'
      requestObj.limit_pay = 'no_credit'
      requestObj.openid = request.openid

      ;['product_id', 'detail', 'attach', 'goods_tag'].forEach(key => {
        if (requestObj[key]) {
          requestObj[key] = request[key]
        }
      })

      ;['time_start', 'time_expire'].forEach(key => {
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
