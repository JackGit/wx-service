const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.getAccessToken = function (appid, secret) {
  return fetch.get(URLS.API_BASE_ACCESS_TOKEN, {
    grant_type: 'client_credential',
    appid,
    secret
  })
}
