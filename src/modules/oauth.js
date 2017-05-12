const oauthAPI = require('../api/oauth')

// please refer: https://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html

module.exports = function (WXService) {
  WXService.oauth = {
    getAuthorizeURL (redirectURI, scope, state) {
      return oauthAPI.getAuthorizeURL(WXService.CONFIG.appId, redirectURI, scope, state)
    },

    getAccessToken (authorizeCode) {
      return oauthAPI.getAccessToken(WXService.CONFIG.appId, WXService.CONFIG.appSecret, authorizeCode)
    },

    refreshAccessToken (refreshToken) {
      return oauthAPI.refreshAccessToken(WXService.CONFIG.appId, refreshToken)
    },

    verifyAccessToken (accessToken, openid) {
      return oauthAPI.verifyAccessToken(accessToken, openid)
    },

    getUserInfo (accessToken, openid, lang) {
      return oauthAPI.getUserInfo(accessToken, openid, lang)
    }
  }
}
