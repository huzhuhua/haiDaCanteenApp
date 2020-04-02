import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpService:HttpService) { }
  async addReceiverAddress(param: {location : string,
    addr :string,
    name :string,
    gender : string,
    Tmobile : string }) {

    // 返回uri中请求到的数据
    return await this.httpService.get(URI.addReceiverAddress, param);


    // 模拟数据
    // return [
    //   {mobile: 15146218783, amount: 9889.24},
    // ];
  }

}
