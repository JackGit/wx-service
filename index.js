const WXService = {}

// modules
require('./src/modules/base')(WXService)
require('./src/modules/oauth')(WXService)
require('./src/modules/user')(WXService)
require('./src/modules/message')(WXService)
require('./src/modules/material')(WXService)
require('./src/modules/pay')(WXService)
require('./src/modules/customer-service')(WXService)
require('./src/modules/jsapi')(WXService)

// utils
WXService.utils = require('./src/utils')

// constants
WXService.constants = require('./src/constants')

// config
WXService.config = {
  appId: '',
  appSecret: '',
  token: '',
  EncodingAESKey: ''
}

module.exports = WXService
