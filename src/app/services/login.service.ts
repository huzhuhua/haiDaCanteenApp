import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService:HttpService) { }
//验证手机号是否已注册
async testMobile(mobile:any){
  return await this.httpService.get(URI.testMobile,{mobile});
}
  //登录总验证
 async login(param: { mobile: string; password: string; }){
  return await this.httpService.get(URI.login,param);
  // return "token"
  }
  async codeLogin(param: { mobile: string; code: string; }){
    return await this.httpService.get(URI.codeLogin,param);
    // return "token"
    }
}

