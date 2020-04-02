import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';
// import { ProductBuyPage } from '../pages/product-buy/product-buy.page';

@Injectable({
  providedIn: 'root'
})
export class ProductPayService {

  constructor( private httpService: HttpService ) {
  }
    async productPay (param:{
      verification: number,
      amount:number,
      productId:string,
    })
     {
      return await this.httpService.get(URI.productPay, param );
    //  return  {"id":"1","name":"建设银行2020001期","company":"建设银行","description":"OMG！买它！买它！买它！","purchaseAmount":"1000","grossAmount":"100000","rateReturn":"3.4","startDate":1583914894000,"endDate":1584259265000,"holdDay":"100","inventoryAmount":"83907","bankCard":"1111111111111111111","picUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=21800722,1265793989&fm=26&gp=0.jpg","handingFee":"0.01","rateChange":"","productType":"0","preorderType":"1","rateType":"0"}
   
  }
}
  
