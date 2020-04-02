import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  constructor(private httpService:HttpService) { }
   //获取银行卡表单
   async getCardId(){
    return await this.httpService.post(URI.getCard,{})
    // return  '1'
   }
   //获取余额
   async getLimit(bankCardNum:string){
    return await this.httpService.post(URI.limit,{bankCardNum:bankCardNum})
    // return  '1'
   }
  // 充值服务
  async recharge(param:{bankCardNum:string,money:string,password:string}) {
   
    return await this.httpService.post(URI.recharge,param)
        
    }
}
