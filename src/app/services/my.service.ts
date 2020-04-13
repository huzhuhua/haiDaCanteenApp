import { Injectable } from '@angular/core';

import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private httpService: HttpService) { }

//获取个人信息
  async getmy() {

    // 返回uri中请求到的数据
    return await this.httpService.get(URI.getmy, {});
  }

  //修改头像
  async modifyHead(headPortrait:any){
    return await this.httpService.get(URI.modifyHead, {headPortrait:headPortrait});
  }
  //修改姓名
  async modifyName(name:any){
    return await this.httpService.get(URI.modifyHead, {name:name});
  }

}
