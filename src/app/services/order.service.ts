import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpService) { }
  //获取全部订单
  async allOrder(){
    return await this.http.get(URI.allorder,{})
  }
  //待评价订单
  async  noRemarkOrder(){
    return await this.http.get(URI.noRemarkOrder,{})
  }
  //退款订单
  async refundOrder(){
    return await this.http.get(URI.refundOrder,{})
  }
  //根据名字获取查询订单
  async searchOrderByName(name:string ){
    return await this.http.get(URI.searchOrder,{name:name})
  }
  //根据订单编号查询订单
  async searchOrderByOrderNumber(orderNumber:any){
    return await this.http.get(URI.searchOrder,{orderNumber:orderNumber})
  }
}
