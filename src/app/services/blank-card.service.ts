import { Injectable } from '@angular/core';


import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class BlankCardService {

  constructor(private httpService: HttpService) { }

  // 获取银行卡数据
  async getcard() {

    // 返回uri中请求到的数据
    // return await this.httpService.get(URI.getCard, {});


    // 模拟数据
    return [
    {"name":"yuyu",
    "bindCard":
    {"id":"158390676032513885ca085634149849f3e54a73bb5ba",
    "accountNum":"6231882003111203431",
    "bankCardNum":"4270304301087875556",
    "createTime":1583906760000,
    "isPrimaryCard":"0",
    "cardPic":"aa",
    }
    }];
  }

  // 获取取消绑卡接口
  async toUntying() {
    // 返回uri中请求到的数据
    // return await this.httpService.get(URI.getCard, {});

    // 模拟数据
    // return {

    // }
  }

  async toChange(){
    // 返回uri中请求到的数据
    // return await this.httpService.get(URI.getCard, {});

  }

  async getInfomation(){
    // 返回uri中请求到的数据
    return await this.httpService.post(URI.showAccountInfo, {});
  }

}
