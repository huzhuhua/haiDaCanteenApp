import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor( private httpService: HttpService,) { }


  async getrecord() {

    // return await this.httpService.get(URI.getrecord, {});

    // 模拟数据
    return [
      {
        "id":"1583919978007c662fdf21d4d4a29b315d414aee68fa7",
        "amount":"1000",
        "date":1583919978000,
        "orderType":"申购",
        "cardOrCompany":"建设银行",
        "description":"建设银行2020001期"
      },
      {
        "id":"1583919852100ecf7709cf84f4f9781fa616ec2399d38",
        "amount":"1000",
        "date":1583919852000,
        "orderType":"充值",
        "cardOrCompany":"建设银行",
        "description":"建设银行2020001期"
     },
      {
      "id":"1583919838381cdbc768435a147fb92d236c01fd45890",
      "amount":"1000",
      "date":1583919838000,
      "orderType":"赎回",
      "cardOrCompany":"建设银行",
      "description":"建设银行2020001期"
    },
    {
      "id":"1583919804411ca253db8360a4481bc079c8dbb625fd7",
      "amount":"1000",
      "date":1583919804000,
      "orderType":"提现",
      "cardOrCompany":"建设银行",
      "description":"建设银行2020001期"
    },
   
  ];
  
    
}

}
