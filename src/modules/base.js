const baseAPI = require('../api/base')

class Base {
  constructor (appid, secret) {
    this.appid = appid
    this.secret = secret
  }

  getAccessToken () {
    return baseAPI.getAccessToken(this.appid, this.secret)
  }
}

module.exports = Base
