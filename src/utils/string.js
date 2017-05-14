const sha1 = require('sha1')
const randomstring = require('randomstring')

exports.sign = function (paramsObj) {
  return sha1(Object.keys(paramsObj).sort().map(key => `${key}=${paramsObj[key]}`).join('&'))
}

exports.randomString = function (length) {
  return randomstring(length)
}
