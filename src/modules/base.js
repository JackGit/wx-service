const baseAPI = require('../api/base')
const sha1 = require('sha1')

module.exports = function (WXService) {
  WXService.base = {
    sign (nonce, timestamp, token) {
      return sha1([nonce, timestamp, token].sort().join(''))
    },

    getAccessToken () {
      return baseAPI.getAccessToken(WXService.CONFIG.appId, WXService.CONFIG.appSecret)
    },

    getCallbackIP (accessToken) {
      return baseAPI.getCallbackIP(accessToken)
    }
  }
}
