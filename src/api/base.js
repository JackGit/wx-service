const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.getAccessToken = function (appid, secret) {
  return fetch.get(URLS.API_BASE_ACCESS_TOKEN, {
    grant_type: 'client_credential',
    appid,
    secret
  })
}

exports.getCallbackIP = function (accessToken) {
  return fetch.get(URLS.API_BASE_CALLBACK_IP, {
    access_token: accessToken
  })
}
