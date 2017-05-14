const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.createOrder = function (request) {
  return fetch.postXML(URLS.API_PAY_ORDER_CREATE, request)
}

exports.closeOrder = function () {

}

exports.queryOrder = function () {

}
