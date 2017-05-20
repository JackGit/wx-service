module.exports = {
  // base
  API_BASE_ACCESS_TOKEN: 'https://api.weixin.qq.com/cgi-bin/token', // https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
  API_BASE_CALLBACK_IP: 'https://api.weixin.qq.com/cgi-bin/getcallbackip', // https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=ACCESS_TOKEN

  // oauth
  API_OAU_AUTHORIZE: 'https://open.weixin.qq.com/connect/oauth2/authorize', // https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
  API_OAU_ACCESS_TOKEN: 'https://api.weixin.qq.com/sns/oauth2/access_token', // https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
  API_OAU_REFRESH_ACCESS_TOKEN: 'https://api.weixin.qq.com/sns/oauth2/refresh_token', // https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=APPID&grant_type=refresh_token&refresh_token=REFRESH_TOKEN
  API_OAU_VERIFY_ACCESS_TOKEN: 'https://api.weixin.qq.com/sns/auth', // https://api.weixin.qq.com/sns/auth?access_token=ACCESS_TOKEN&openid=OPENID
  API_OAU_GET_USER_INFO: 'https://api.weixin.qq.com/sns/userinfo', // https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN

  // user
  API_USER_INFO: 'https://api.weixin.qq.com/cgi-bin/user/info', // https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
  API_USER_INFO_BATCH: 'https://api.weixin.qq.com/cgi-bin/user/info/batchget', //https://api.weixin.qq.com/cgi-bin/user/info/batchget?access_token=ACCESS_TOKEN

  // pay
  API_PAY_ORDER_CREATE: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
  API_PAY_ORDER_QUERY: 'https://api.mch.weixin.qq.com/pay/orderquery',
  API_PAY_ORDER_CLOSE: 'https://api.mch.weixin.qq.com/pay/closeorder',
  API_PAY_REFUND: 'https://api.mch.weixin.qq.com/secapi/pay/refund',
  API_PAY_REFUND_QUERY: 'https://api.mch.weixin.qq.com/pay/refundquery',
  API_PAY_BILL_DOWNLOAD: 'https://api.mch.weixin.qq.com/pay/downloadbill',
  API_PAY_REPORT: 'https://api.mch.weixin.qq.com/payitil/report',

  // jsapi
  API_JSAPI_TICKET: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket', // https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi

  // customer service
  API_CUSTOMER_SERVICE_ADD: 'https://api.weixin.qq.com/customservice/kfaccount/add', // https://api.weixin.qq.com/customservice/kfaccount/add?access_token=ACCESS_TOKEN
  API_CUSTOMER_SERVICE_LIST: 'https://api.weixin.qq.com/cgi-bin/customservice/getkflist', // https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=ACCESS_TOKEN
  API_CUSTOMER_SERVICE_ONLINE_LIST: 'https://api.weixin.qq.com/cgi-bin/customservice/getonlinekflist', // https://api.weixin.qq.com/cgi-bin/customservice/getonlinekflist?access_token=ACCESS_TOKEN
  API_CUSTOMER_SERVICE_INVITE: 'https://api.weixin.qq.com/customservice/kfaccount/inviteworker', // https://api.weixin.qq.com/customservice/kfaccount/inviteworker?access_token=ACCESS_TOKEN
  API_CUSTOMER_SERVICE_UPDATE: 'https://api.weixin.qq.com/customservice/kfaccount/update', // https://api.weixin.qq.com/customservice/kfaccount/update?access_token=ACCESS_TOKEN
  API_CUSTOMER_SERVICE_DELETE: 'https://api.weixin.qq.com/customservice/kfaccount/del', // https://api.weixin.qq.com/customservice/kfaccount/del?access_token=ACCESS_TOKEN&kf_account=KFACCOUNT
  API_CUSTOMER_SERVICE_UPLOAD_AVATAR: 'https://api.weixin.qq.com/customservice/kfaccount/uploadheadimg', // https://api.weixin.qq.com/customservice/kfaccount/uploadheadimg?access_token=ACCESS_TOKEN&kf_account=KFACCOUNT
  API_CUSTOMER_SERVICE_MSG_LIST: 'https://api.weixin.qq.com/customservice/msgrecord/getmsglist' // https://api.weixin.qq.com/customservice/msgrecord/getmsglist?access_token=ACCESS_TOKEN

}
