const userAPI = require('../api/user')

module.exports = function (WXService) {
  WXService.user = {
    getUserInfo (accessToken, openid, lang) {
      userAPI.getUserInfo(accessToken, openid, lang)
    },

    getUserInfoBatch (accessToken, userList) {
      userAPI.getUserInfoBatch(accessToken, userList)
    }
  }
}
