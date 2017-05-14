// https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3

const KEY = ''
const md5 = require('md5')
const moment = require('moment')

exports.sign = function (request) {
  let queryString = Object.keys(request).filter(k => {
    return request[k] !== ''
  }).sort().map(k => `${k}=${request[k]}`).join('&') + `&key=${KEY}`
  return md5(queryString).toUpperCase()
}

exports.getTimeString = function (date) {
  return moment(date).format('yyyyMMddHHmmss')
}
