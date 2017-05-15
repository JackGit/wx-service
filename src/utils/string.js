const sha1 = require('sha1')
const md5 = require('md5')
const randomstring = require('randomstring')
const isEmpty = require('lodash.isempty')

exports.sign = function (paramsObj, options) {
  let str = typeof paramsObj === 'string' ? paramsObj : exports.object2KVString(paramsObj)
  return (options && options.signType === 'MD5') ? md5(str) : sha1(str)
}

exports.random = function (length) {
  return randomstring.generate(length)
}

exports.object2KVString = function (obj, sort = true) {
  return sort
    ? Object.keys(obj).filter(key => !isEmpty(obj[key])).sort().map(key => `${key}=${obj[key]}`).join('&')
    : Object.keys(obj).filter(key => !isEmpty(obj[key])).map(key => `${key}=${obj[key]}`).join('&')
}
