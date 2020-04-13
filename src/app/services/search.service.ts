import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpService:HttpService) { }
  //查询热门搜索
  async find() {
    return await this.httpService.get(URI.recommendDishes, {});
  }
  // id搜索
  async searchId(id:any ) {
    return await this.httpService.get(URI.searchDishes, {id:id});
  }
    //名字搜索
    async search(name:any ) {
      return await this.httpService.get(URI.searchDishes, {name:name});
    }
    //分类搜索
    async searchByKind(kind:string ) {
      return await this.httpService.get(URI.dishesKind, {kind:kind});
    }
    //支付
    async pay(list:any){
      return await this.httpService.get(URI.pay, {list:list});
    }
    //获取评论
    async getEvaluate(){
      return await this.httpService.get(URI.getEvaluate, {});
    }
    //退款
    async refund(orderNumber:any){
      return await this.httpService.get(URI.refund, {orderNumber:orderNumber});
    }
    //评价
    async evaluate(evaluate:any,orderNumber:any){
      return await this.httpService.get(URI.evaluate, {evaluate:evaluate,orderNumber:orderNumber});
    }
}
