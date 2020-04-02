import { Injectable } from '@angular/core';

import { HttpService } from './http/http.service';
import { URI } from '../uri';


@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private httpService: HttpService) { }

  async getbalance() {

    // 返回uri中请求到的数据
    return await this.httpService.get(URI.getmy, {});


    // 模拟数据
    // return [
    //   {mobile: 15146218783, amount: 9889.24},
    // ];
  }

}
