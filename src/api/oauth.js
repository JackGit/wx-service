const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.getAccessToken = function (appid, secret, authorizeCode) {
  return fetch.get(URLS.API_OAU_ACCESS_TOKEN, {
    appid,
    secret,
    code: authorizeCode,
    grant_type: 'authorization_code'
  })
}

exports.refreshAccessToken = function (appid, refreshToken) {
  return fetch.get(URLS.API_OAU_REFRESH_ACCESS_TOKEN, {
    appid,
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  })
}

exports.verifyAccessToken = function (accessToken, openid) {
  return fetch.get(URLS.API_OAU_VERIFY_ACCESS_TOKEN, {
    access_token: accessToken,
    openid
  })
}

exports.getAuthorizeURL = function (appid, redirectURI, scope = 'snsapi_base', state = '') {
  redirectURI = encodeURIComponent(redirectURI)
  return `${URLS.API_OAU_AUTHORIZE}?appid=${appid}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
}

exports.getUserInfo = function (accessToken, openid, lang = 'zh_CN') {
  return fetch.get(URLS.API_OAU_GET_USER_INFO, {
    access_token: accessToken,
    openid,
    lang
  })
}
