export interface FinanceProduct {
    id?:string;
    name?:string; 
     company?:string;
    description?:string;
    purchaseAmount?:string;
    grossAmount?:string;
    rateReturn?:string;
    // startDate?:string;
    startDate?:number;
    //  endDate?:Date;
    endDate?:number;
    holdDay?:string; 
    inventoryAmount?:string;
    bankCard?:string;
    picUrl?:string;  
/**
 * 活期定期
 */
    productType?:string;
    /**
 * 手续费
 */
 handingFee?:string;
/**
 * 收益率涨幅
 */
 rateChange?:string;
 /**
 * 是否预购
 */
 preorderType?:string;

/**
 * 利滚利
 */
rateType?:string;
 
 }









