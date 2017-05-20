const customerServiceAPI = require('../api/customerService')
const stringUtils = require('../utils/string')

module.exports = function (WXService) {

  WXService.customerService = {
    add () {},
    delete () {},
    getList () {},
    getOnlineList () {},
    invite () {},
    update () {},
    uploadAvatar () {},

    createSession () {},
    closeSession () {},
    getSession () {},
    getSessionList () {},
    getWaitSessionList () {},

    getRequestOfRedirectToCustomerService () {},
    getRequestOfRedirectToSpecificCustomerService () {},

    getMessageList (accessToken, startTime, endTime, msgID, number) {
      return customerService.getMessageList(accessToken, startTime, endTime, msgID, number)
    }
  }
}
