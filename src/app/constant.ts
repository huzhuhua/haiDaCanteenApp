export const Constant = {
    SUCCESS_CODE: '000000',
   //身份证信息已过期
ID_CARD_EXPIRED:"HD0000",
//验证码不匹配
 VERIFICATION_NOT_TRUE : "Vt0001",
//开户状态码
 EACCOUNT_IDCARD_EXIST:"Op0001",
 EACCOUNT_INFO_WRONG :"Op0002",
 OPENACCOUNT_ALREADY:"Op0003",
//绑卡状态码
 BANKCARD_UNIQUE:"Bc0001",
 BINDCARD_INFO_WRONG:"Bc0002",
//充值提现状态码
 RECHARGE_MONEY_IS_NULL:"Rg0001",
 BANKCARD_BALANCE_NOT_ENOUGH:"Rg0002",
 BANKCARD_LIMIT_NOT_ENOUGH:"Rg0003",
 WITHDRAW_MONEY_IS_NULL:"Wd0001",
 EACCOUNT_BALANCE_NOT_ENOUGH:"Wd0002",
 EACCOUNT_LIMIT_NOT_ENOUGH:"Wd0003",
//转账对方信息不匹配
 PAYEE_NOT_TRUE:"ts0000",
 BANKCARD_BALANCE_ISNOT_ENOUGH:"ts0001",
 BANKCARD_LIMIT_ISNOT_ENOUGH:"ts0002",
//申购状态码
 MININUM_ACCOUNT_NOT_ENOUGH:"Bp0001",
 PRODUCT_INVENTORY_AMOUNT_NOT_ENOUGH:"Pa0001",
//登录注册状态码
 USER_MOBILE_EXIST:"LR0001",
 USER_MOBILE_NOT_EXIST:"LR0002",
 USER_PASSWORD_WRONG:"IR0003",
 USER_IDCARD_WRONG:"IR0004" ,
 USER_BANKCARD_WRONG:"IR0005",
//登录信息状态码
 NO_AUTH : "UI0001",
//退出登录失败状态码
 USER_EXIT_WRONG:"UE0001",
//  SERVER_URL: 'http://localhost:3000',
    SERVER_URL: 'http://qqahl.com:3000', //服务器地址
    // SERVER_URL:'/api'
}
