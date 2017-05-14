const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.getTicket = function (accessToken) {
  return fetch.get(URLS.API_JSAPI_TICKET, {
    access_token: accessToken,
    type: 'jsapi'
  })
}
