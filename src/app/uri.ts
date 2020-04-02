/**author:王奇奇 
 * date:2020/3/11
 * 
*/
export const URI = {
    // 验证码
    code: '/getCode',
    //验证码登录
    codeLogin:'/codeLogin',
    // 密码登录
    login: '/login',
    //修改密码
     changePassword:'index/changePwd',
     //轮播图
     sliders:'/sliders',
    //首页推荐产品
    recommendProducts:'/recommend',
    // 验证手机号是否存在
    testMobile: '/index/mobileExist',
    // 注册
    register: '/register',
   //添加收货地址
   addReceiverAddress:'/addReceiverAddress',











    // 开户
    openAccount: '/openAccount/openAccount',
    //开户信息
    showAccountInfo:'/openAccount/showAccountInfo',
    // 绑卡
    bindCard: '/bindCard/bindCard',
    //更换主卡
    changeCard:'bindCard/changeCard',
    //解绑卡
    deleteCard:'bindCard/deleteCard',
    // 用户状态
    userInfo: '/openAccount/checkStatus',
    // 产品
    toSeeProductList: '/product/productByPage',
    // 全部产品
    allProduncts: '/allProduct',
    // 获取银行卡
    getCard: '/rechargeController/bindCard',
    //获取银行卡限额
    limit:'/rechargeController/limit',
    // 充值
    recharge: '/rechargeController/recharge',
    // 提现
    withdraw: '/withdrawController/withdraw',
    // 转账
    transfer: '/TransferController/dotransfer.do',
    // 已购产品列表
    productList: '/purchase/product',
    // 产品购买
    productPay: '/purchaseProduct',
    // 赎回
    redemption: '/redemption',
    // 获取余额
    getbalance: '/showMyBalance/showBalance',
    // home信息
    getmy: '/homeController/home',

    // 交易记录
    getrecord: '/eAccount/findAllOrderByTime',
    // 产品详情
    productDetails: '/product/productInfo',
    //获取曲线图数据
     graph:  '/product/rateReturnById',
    //充值记录查询
    rechargeOrder:'/eAccount/rechargeOrder',
    //提现记录查询
    withdrawOrder:'/eAccount/withdrawOrder',
    //申购记录
    purchaseOrder:'/eAccount/purchaseOrder',
 
    // 退出登录
    exit: '/index/exit',
    // 余额
    balance: '/showMyBalance/showBalance',
    // 总收益
    earning: '/HomeController/incomeAmount',
    //头像
     head: '/homeController/head',
  
      //上传图片
      uploadImg:'/picture',
      //找回密码
     findPassword:'/findPassword',
      //添加收藏产品
    addLove:'/addLove',
    //移除收藏产品
    removeLove:'/removeLove',
    //查询收藏产品
    allLove: '/allLove',
};
