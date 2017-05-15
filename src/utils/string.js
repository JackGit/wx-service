const sha1 = require('sha1')
const md5 = require('md5')
const randomstring = require('randomstring')

exports.sign = function (paramsObj, options) {
  let str = Object.keys(paramsObj).filter(key => paramsObj[key] !== '').sort().map(key => `${key}=${paramsObj[key]}`).join('&')
  return (options && options.signType === 'MD5') ? md5(str) : sha1(str)
}

exports.random = function (length) {
  return randomstring.generate(length)
}
