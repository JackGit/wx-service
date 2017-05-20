const fetch = require('../utils/fetch')
const URLS = require('../constants/urls')

exports.add = function (accessToken, account, nickname) {
  return fetch.post(`${URLS.API_CUSTOMER_SERVICE_ADD}?access_token=${accessToken}`, {
    kf_account: account,
    nickname
  })
}

exports.getList = function (accessToken) {
  return fetch.get(`${URLS.API_CUSTOMER_SERVICE_LIST}?access_token=${accessToken}`)
}

exporst.getOnlineList = function () {
  return fetch.get(`${URLS.API_CUSTOMER_SERVICE_ONLINE_LIST}?access_token=${accessToken}`)
}

exports.invite = function (accessToken, account, wxAccount) {
  return fetch.post(`${URLS.API_CUSTOMER_SERVICE_INVITE}?access_token=${accessToken}`, {
    kf_account: account,
    invite_wx: wxAccount
  })
}

exports.update = function (accessToken, account, nickname) {
  return fetch.post(`${URLS.API_CUSTOMER_SERVICE_UPDATE}?access_token=${accessToken}`, {
    kf_account: account,
    nickname
  })
}

exports.uploadAvatar = function (accessToken, account, imageURL) {
  console.warn('not implemented')
  return fetch.post(`${URLS.API_CUSTOMER_SERVICE_UPLOAD_AVATAR}?access_token=${accessToken}&kf_account=${account}`, {})
}

exports.delete = function (accessToken, account) {
  return fetch.get(`${URLS.API_CUSTOMER_SERVICE_DELETE}?access_token=${accessToken}&kf_account=${account}`)
}
