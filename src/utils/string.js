const sha1 = require('sha1')
const md5 = require('md5')
const randomstring = require('randomstring')
const isEmpty = require('./lang').isEmpty
const xml2js = require('xml2js')
const xmlBuilder = new xml2js.Builder({ rootName: 'xml', headless: true })
const xmlParser = new xml2js.Parser({ trim: true, explicitArray: false, explicitRoot: false })

exports.sign = function (paramsObj, options) {
  let str = typeof paramsObj === 'string' ? paramsObj : exports.object2KVString(paramsObj)
  return (options && options.signType.toUpperCase() === 'MD5') ? md5(str) : sha1(str)
}

exports.random = function (length) {
  return randomstring.generate(length)
}

exports.object2KVString = function (obj, sort = true) {
  return sort
    ? Object.keys(obj).filter(key => !isEmpty(obj[key])).sort().map(key => `${key}=${obj[key]}`).join('&')
    : Object.keys(obj).filter(key => !isEmpty(obj[key])).map(key => `${key}=${obj[key]}`).join('&')
}

// a promise wrapper of xml parser
exports.parseXML = function (xml) {
  return new Promise((resolve, reject) => {
    xmlParser.parseString(xml, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

// a wrapper of build xml
exports.buildXML = function (object) {
  return xmlBuilder.buildObject(object)
}
