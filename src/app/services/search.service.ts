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
    //支付
    async pay(list:any){
      return await this.httpService.get(URI.pay, {list:list});
    }
}
