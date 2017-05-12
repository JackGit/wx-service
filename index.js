const WXService = {}

require('./src/modules/base')(WXService)
require('./src/modules/oauth')(WXService)
require('./src/modules/user')(WXService)
require('./src/modules/message')(WXSerivce)
require('./src/modules/material')(WXService)
require('./src/modules/pay')(WXService)
require('./src/modules/customer-service')(WXService)

WXService.CONSTANTS = require('./src/constants')

WXService.CONFIG = {
  appId: '',
  appSecret: ''
}

module.exports = WXService
