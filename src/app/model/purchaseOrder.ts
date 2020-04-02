export interface PurchaseOrder {
    id?:string;
    eAccountId?:string; 
    productId?:string;
    rateReturn?:string;
    //起始本金
    amount?:string;
    //现存本金
     nowAmount?:string;
     //订单创建时间
    createTime?:string;
    status?:string;
    income?:string; 
 //昨日收益
    yesterdayIncome?:string;
    //活期定期
    type?:string;
    //起息日
      //起息日
    startTime?:Date;
      //结息日
     endTime?:Date;
    // productType?:string;
    //涨幅
rateChange?:number;   
 }

 
