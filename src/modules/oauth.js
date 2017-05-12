const oauthAPI = require('../api/oauth')

// please refer: https://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
class OAuth {
  constructor (appid, secret) {
    this.appid = appid
    this.secret = secret
  }

  getAuthorizeURL (redirectURI, scope, state) {
    return oauthAPI.getAuthorizeURL(this.appid, redirectURI, scope, state)
  }

  getAccessToken (authorizeCode) {
    return oauthAPI.getAccessToken(this.appid, this.secret, authorizeCode)
  }

  refreshAccessToken (refreshToken) {
    return oauthAPI.refreshAccessToken(this.appid, refreshToken)
  }

  verifyAccessToken (accessToken, openid) {
    return oauthAPI.verifyAccessToken(accessToken, openid)
  }

  getUserInfo (accessToken, openid, lang) {
    return oauthAPI.getUserInfo(accessToken, openid, lang)
  }
}

module.exports = OAuth
