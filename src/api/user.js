const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.getUserInfo = function (accessToken, openid, lang = 'zh_CN') {
  return fetch.get(`${URLS.API_USER_INFO}?access_token=${accessToken}&openid=${openid}&lang=${lang}`)
}

exports.getUserInfoBatch = function (accessToken, userList) {
  return fetch.post(`${URLS.API_USER_INFO_BATCH}?access_token=${accessToken}`, {
    'user_list': userList
  })
}
