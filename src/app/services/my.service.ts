import { Injectable } from '@angular/core';

import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private httpService: HttpService) { }
async getBalance(){
  return await this.httpService.post(URI.balance, {});
}
async getEarnings(){
  return await this.httpService.get(URI.earning, {});
}
  async getmy() {

    // 返回uri中请求到的数据
    return await this.httpService.post(URI.getmy, {});


    // 模拟数据
    // return [
    //   { balance: 8897.32,
    //     card: 15147218548,
    //     name: '郝海东'},
    // ];
  }

}
