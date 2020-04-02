import { Injectable } from '@angular/core';

import {  HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class MyProductService {

  constructor(private httpService: HttpService,) { }


    // 已购产品列表
    async myproduct() {
      return this.httpService.post(URI.productList, { });
      // return [
      //   {"id":"1","name":"建设银行2020001期","company":"建设银行","description":"OMG！买它！买它！买它！","purchaseAmount":"1000","grossAmount":"100000","rateReturn":"3.4","startDate":1583913670000,"endDate":1584259265000,"holdDay":"100","inventoryAmount":"83907","bankCard":"","picUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=21800722,1265793989&fm=26&gp=0.jpg","handingFee":null,"rateChange":"","productType":"","preorderType":null,"rateType":null},{"id":"2","name":"虚拟银行2020002期","company":"虚拟银行","description":"这是一个理财产品","purchaseAmount":"1000","grossAmount":"100000","rateReturn":"3.5","startDate":1583913674000,"endDate":1584691273000,"holdDay":"100","inventoryAmount":"100000","bankCard":"","picUrl":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3291325566,2082764090&fm=26&gp=0.jpg","handingFee":null,"rateChange":"","productType":"","preorderType":null,"rateType":null},{"id":"3","name":"虚拟银行2020003期","company":"虚拟银行","description":"在家里躺着可以赚钱的利器","purchaseAmount":"1000","grossAmount":"100000","rateReturn":"2.7","startDate":1583913679000,"endDate":1585728077000,"holdDay":"100","inventoryAmount":"100000","bankCard":"","picUrl":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1553315655,4191692929&fm=26&gp=0.jpg","handingFee":null,"rateChange":"","productType":"","preorderType":null,"rateType":null}
      // ];
    }


}
