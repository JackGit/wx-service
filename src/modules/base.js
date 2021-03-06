const baseAPI = require('../api/base')
const sha1 = require('sha1')

module.exports = function (WXService) {
  WXService.base = {
    sign (nonce, timestamp) {
      return sha1([nonce, timestamp, WXService.config.token].sort().join(''))
    },

    getAccessToken () {
      return baseAPI.getAccessToken(WXService.config.appId, WXService.config.appSecret)
    },

    getCallbackIP (accessToken) {
      return baseAPI.getCallbackIP(accessToken)
    }
  }
}
