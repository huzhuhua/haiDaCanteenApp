import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpService:HttpService) { }
  //添加收货地址
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
  //查询收货地址
  async findAddress(){
    return await this.httpService.get(URI.findAddress,{});
  }
  //删除收货地址
  async deleteAddress(addressId:any){
    return await this.httpService.get(URI.deleteAddress,{addressId:addressId});
  }
  //修改收货地址
  async modify(param: {location : string,
    addr :string,
    name :string,
    gender : string,
    Tmobile : string,
    addressId:number
  }){
    return await this.httpService.get(URI.modify,param);
  }
  //切换默认收货地址
  async switch(addressId:any){
    return await this.httpService.get(URI.switch,{addressId:addressId});
  }

}
