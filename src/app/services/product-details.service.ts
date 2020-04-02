import { Injectable } from '@angular/core';


import { HttpService } from './http/http.service';
import { URI } from '../uri';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpService: HttpService) { }
  //获取产品信息
  async get(productId: string) {
    return await this.httpService.post(URI.productDetails, { productId: productId });
    // return  {"id":"1","name":"建设银行2020001期","company":"建设银行","description":"OMG！买它！买它！买它！","purchaseAmount":"1000","grossAmount":"100000","rateReturn":"3.4","startDate":1583914894000,"endDate":1584259265000,"holdDay":"100","inventoryAmount":"83907","bankCard":"1111111111111111111","picUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=21800722,1265793989&fm=26&gp=0.jpg","handingFee":"0.01","rateChange":"","productType":"0","preorderType":"1","rateType":"0"}
  }
  //获取曲线图
  async get2(productId: string) {

    return await this.httpService.post(URI.graph, { productId: productId });
     }
  async get1(productId: string) {
    // return await this.httpService.get(URI.productDetails, { id: productId });
    [ 
             {"id":"1","name":"建设银行2020001期","company":"建设银行","description":"OMG！买它！买它！买它！","purchaseAmount":"1000","grossAmount":"100000","rateReturn":"3.4","startDate":1583914894000,"endDate":1584259265000,"holdDay":"100","inventoryAmount":"83907","bankCard":"1111111111111111111","picUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=21800722,1265793989&fm=26&gp=0.jpg","handingFee":"0.01","rateChange":"","productType":"0","preorderType":"1","rateType":"0"}
    ]
  


}
}
